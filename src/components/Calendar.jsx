import React, { useMemo, useState } from 'react';
import { complianceEvents } from '../data/complianceEvents';

// Lightweight month calendar with clickable days showing tax/compliance due dates.
// Edit `src/data/complianceEvents.js` to set the real due dates.

function parseEventDate(input) {
  if (!input) return null;
  // Accept formats like YYYY-MM-DD, DD-MM-YYYY, DD/MM/YYYY
  const normalized = String(input).trim();
  let y, m, d;
  if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    [y, m, d] = normalized.split('-').map(Number);
  } else if (/^\d{2}[-\/]\d{2}[-\/]\d{4}$/.test(normalized)) {
    const parts = normalized.split(/[-\/]/).map(Number);
    [d, m, y] = parts;
  } else {
    const t = Date.parse(normalized);
    if (!Number.isNaN(t)) {
      const dt = new Date(t);
      return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
    }
    return null;
  }
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

function toKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function clampDayToMonth(year, monthIndex, day) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const d = Math.max(1, Math.min(daysInMonth, Number(day) || 1));
  return d;
}

function expandEventsForRange(input, rangeStart, rangeEnd) {
  const out = [];
  const arr = Array.isArray(input) ? input : [];

  const start = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate());
  const end = new Date(rangeEnd.getFullYear(), rangeEnd.getMonth(), rangeEnd.getDate());

  for (const item of arr) {
    if (!item) continue;
    const title = String(item.title || 'Due date');
    const type = String(item.type || 'compliance');
    const note = item.note ? String(item.note) : '';

    if (item.date) {
      const dt = parseEventDate(item.date);
      if (dt && dt >= start && dt <= end) out.push({ date: dt, title, type, note });
      continue;
    }

    const rule = item.rule;
    if (!rule || !rule.freq) continue;

    const freq = String(rule.freq);
    if (freq === 'monthly') {
      const day = Number(rule.day);
      const monthCursor = new Date(start.getFullYear(), start.getMonth(), 1);
      const monthEnd = new Date(end.getFullYear(), end.getMonth(), 1);
      while (monthCursor <= monthEnd) {
        const y = monthCursor.getFullYear();
        const m = monthCursor.getMonth();
        const d = clampDayToMonth(y, m, day);
        const dt = new Date(y, m, d);
        if (dt >= start && dt <= end) out.push({ date: dt, title, type, note });
        monthCursor.setMonth(monthCursor.getMonth() + 1);
      }
      continue;
    }

    if (freq === 'yearly') {
      const month = Number(rule.month); // 1-12
      const day = Number(rule.day);
      if (!month || month < 1 || month > 12) continue;
      for (let y = start.getFullYear(); y <= end.getFullYear(); y++) {
        const m = month - 1;
        const d = clampDayToMonth(y, m, day);
        const dt = new Date(y, m, d);
        if (dt >= start && dt <= end) out.push({ date: dt, title, type, note });
      }
      continue;
    }

    if (freq === 'quarterly') {
      const day = Number(rule.day);
      const months = Array.isArray(rule.months) ? rule.months.map(Number) : [1, 4, 7, 10]; // 1-12
      for (let y = start.getFullYear(); y <= end.getFullYear(); y++) {
        for (const month of months) {
          if (!month || month < 1 || month > 12) continue;
          const m = month - 1;
          const d = clampDayToMonth(y, m, day);
          const dt = new Date(y, m, d);
          if (dt >= start && dt <= end) out.push({ date: dt, title, type, note });
        }
      }
      continue;
    }
  }

  return out;
}

function MonthHeader({ current, onPrev, onNext }) {
  const formatter = useMemo(() => new Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' }), []);
  return (
    <div className="flex items-center justify-between mb-4">
      <button onClick={onPrev} className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50">Prev</button>
      <h2 className="text-xl font-semibold">{formatter.format(current)}</h2>
      <button onClick={onNext} className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50">Next</button>
    </div>
  );
}

function buildMonthGrid(anchorDate) {
  const year = anchorDate.getFullYear();
  const month = anchorDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startDay = (firstOfMonth.getDay() + 6) % 7; // make Monday=0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function getVisibleRange(anchorDate) {
  const year = anchorDate.getFullYear();
  const month = anchorDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startDay = (firstOfMonth.getDay() + 6) % 7; // Monday=0
  const rangeStart = new Date(year, month, 1 - startDay);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;
  const rangeEnd = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate() + (totalCells - 1));
  return { rangeStart, rangeEnd };
}

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [typeFilter, setTypeFilter] = useState({
    tax: true,
    gst: true,
    compliance: true,
  });

  const { rangeStart, rangeEnd } = useMemo(() => getVisibleRange(currentMonth), [currentMonth]);
  const events = useMemo(() => expandEventsForRange(complianceEvents, rangeStart, rangeEnd), [rangeStart, rangeEnd]);
  const filteredEvents = useMemo(() => {
    return events.filter(ev => Boolean(typeFilter[ev.type]) || (ev.type !== 'tax' && ev.type !== 'gst' && ev.type !== 'compliance'));
  }, [events, typeFilter]);

  const eventsByDay = useMemo(() => {
    const map = new Map();
    for (const ev of filteredEvents) {
      const key = toKey(ev.date);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(ev);
    }
    return map;
  }, [filteredEvents]);

  const grid = useMemo(() => buildMonthGrid(currentMonth), [currentMonth]);

  const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  function goPrev() {
    setCurrentMonth(d => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }
  function goNext() {
    setCurrentMonth(d => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }

  const selectedKey = selectedDate ? toKey(selectedDate) : null;
  const selectedEvents = selectedKey ? (eventsByDay.get(selectedKey) || []) : [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <MonthHeader current={currentMonth} onPrev={goPrev} onNext={goNext} />

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {['tax', 'gst', 'compliance'].map(t => (
          <label key={t} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-sm">
            <input
              type="checkbox"
              checked={Boolean(typeFilter[t])}
              onChange={(e) => setTypeFilter(prev => ({ ...prev, [t]: e.target.checked }))}
            />
            <span className="capitalize">{t}</span>
          </label>
        ))}
        <div className="text-xs text-gray-500 ml-auto">
          Edit due dates in <span className="font-mono">src/data/complianceEvents.js</span>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-sm">
        {weekdayLabels.map(label => (
          <div key={label} className="text-center font-medium text-gray-700">{label}</div>
        ))}
        {grid.map((date, idx) => {
          if (!date) return <div key={idx} className="h-24 border border-gray-100 rounded bg-white" />;
          const key = toKey(date);
          const dayEvents = eventsByDay.get(key) || [];
          const isToday = toKey(date) === toKey(today);
          const isSelected = selectedKey === key;
          return (
            <button
              key={idx}
              onClick={() => setSelectedDate(date)}
              className={`h-24 border rounded p-2 text-left relative transition ${isSelected ? 'border-[#FF9933] ring-2 ring-[#FF9933]/30' : 'border-gray-100'} ${isToday ? 'bg-orange-50' : 'bg-white'} hover:bg-gray-50`}
            >
              <div className="text-gray-800 font-semibold">{date.getDate()}</div>
              {dayEvents.slice(0, 3).map((ev, i) => (
                <div key={i} className="mt-1 text-[11px] px-2 py-0.5 rounded bg-gray-100 text-gray-700 truncate">
                  {ev.title}
                </div>
              ))}
              {dayEvents.length > 3 && (
                <div className="mt-1 text-[11px] text-gray-500">+{dayEvents.length - 3} more</div>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3">{selectedDate ? `Events on ${selectedKey}` : 'Select a date'}</h3>
        {selectedDate && selectedEvents.length === 0 && (
          <div className="text-gray-600">No due dates.</div>
        )}
        <ul className="space-y-2">
          {selectedEvents.map((ev, i) => (
            <li key={i} className="p-3 rounded border border-gray-100 bg-white">
              <div className="text-sm font-medium text-gray-900">{ev.title}</div>
              <div className="text-xs text-gray-600 capitalize">{ev.type}</div>
              {ev.note && <div className="text-xs text-gray-500 mt-1">{ev.note}</div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


