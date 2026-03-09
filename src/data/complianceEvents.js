// Hyderabad, Telangana (India) - starter compliance calendar.
//
// You can add:
// - Fixed dates: { date: 'YYYY-MM-DD', title, type }
// - Recurring rules:
//   - Monthly:   { rule: { freq: 'monthly', day: 20 }, title, type }
//   - Quarterly: { rule: { freq: 'quarterly', months: [4,7,10,1], day: 30 }, title, type }  // months are 1-12
//   - Yearly:    { rule: { freq: 'yearly', month: 7, day: 31 }, title, type }
//
// Types used by filters: 'tax' | 'gst' | 'compliance' (you can add more).
export const complianceEvents = [
  {
    rule: { freq: 'monthly', day: 7 },
    title: 'TDS payment due (Sec 200) (common)',
    type: 'tax',
    note: 'Due date can vary by case; update to match your client/category.',
  },
  {
    rule: { freq: 'monthly', day: 20 },
    title: 'GSTR-3B filing due (common)',
    type: 'gst',
    note: 'Some taxpayers have staggered due dates; update if needed.',
  },
  {
    rule: { freq: 'monthly', day: 15 },
    title: 'PF/ESI payment due (common)',
    type: 'compliance',
  },
  {
    rule: { freq: 'monthly', day: 11 },
    title: 'GSTR-1 filing due (common)',
    type: 'gst',
    note: 'Depends on monthly/quarterly filing; update to your GST profile.',
  },
  {
    date: '2026-06-15',
    title: 'Advance tax instalment due (15 Jun) (common)',
    type: 'tax',
  },
  {
    date: '2026-09-15',
    title: 'Advance tax instalment due (15 Sep) (common)',
    type: 'tax',
  },
  {
    date: '2026-12-15',
    title: 'Advance tax instalment due (15 Dec) (common)',
    type: 'tax',
  },
  {
    date: '2027-03-15',
    title: 'Advance tax instalment due (15 Mar) (common)',
    type: 'tax',
  },
  {
    rule: { freq: 'monthly', day: 20 },
    title: 'Professional Tax (PT) payment (Telangana) (verify)',
    type: 'compliance',
    note: 'PT due dates can vary by establishment/registration. Confirm exact Telangana PT due date and update.',
  },
];

