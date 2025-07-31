import React, { useEffect, useRef } from 'react';
import AnimatedBackground from './components/AnimatedBackground';

const CURSOR_COLOR = '#FF9933'; // Saffron
const CURSOR_BG = 'rgba(255,255,255,0.8)'; // White with opacity
const CURSOR_BORDER = '#F0F0F0'; // Light Gray

const AnimatedCursor = () => {
  const cursorRef = useRef(null);
  const trailingRef = useRef(null);
  const requestRef = useRef();
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const trailing = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  // Disable on mobile
  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      if (trailingRef.current) trailingRef.current.style.display = 'none';
      return;
    }
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const animate = () => {
      // Trailing effect
      trailing.current.x += (mouse.current.x - trailing.current.x) * 0.18;
      trailing.current.y += (mouse.current.y - trailing.current.y) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouse.current.x - 10}px, ${mouse.current.y - 10}px, 0)`;
      }
      if (trailingRef.current) {
        trailingRef.current.style.transform = `translate3d(${trailing.current.x - 20}px, ${trailing.current.y - 20}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Interactive elements hover effect
  useEffect(() => {
    const addHover = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.getAttribute('role') === 'button'
      ) {
        cursorRef.current.classList.add('cursor-hover');
        trailingRef.current.classList.add('trailing-hover');
      }
    };
    const removeHover = () => {
      cursorRef.current.classList.remove('cursor-hover');
      trailingRef.current.classList.remove('trailing-hover');
    };
    document.addEventListener('mouseover', addHover);
    document.addEventListener('mouseout', removeHover);
    return () => {
      document.removeEventListener('mouseover', addHover);
      document.removeEventListener('mouseout', removeHover);
    };
  }, []);

  return (
    <>
      <AnimatedBackground />
      <div
        ref={trailingRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: `2px solid ${CURSOR_BORDER}`,
          background: CURSOR_BG,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'border-color 0.2s, background 0.2s',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          mixBlendMode: 'exclusion',
        }}
        className="finlytiq-cursor-trailing"
      ></div>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: CURSOR_COLOR,
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'transform 0.15s cubic-bezier(.4,2,.6,1), background 0.2s',
          boxShadow: '0 2px 8px rgba(255,153,51,0.08)',
        }}
        className="finlytiq-cursor"
      ></div>
      <style>{`
        .finlytiq-cursor-trailing.trailing-hover {
          border-color: ${CURSOR_COLOR};
          background: #fff;
        }
        .finlytiq-cursor.cursor-hover {
          transform: scale(1.6);
          background: #fff;
          box-shadow: 0 0 0 4px ${CURSOR_COLOR}33;
        }
      `}</style>
    </>
  );
};

export default AnimatedCursor;