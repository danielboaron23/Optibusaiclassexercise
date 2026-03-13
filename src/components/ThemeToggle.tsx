import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-[52px] h-[28px] rounded-full cursor-pointer transition-colors duration-300 border"
      style={{
        backgroundColor: isLight ? '#2868fc' : 'var(--bg-secondary)',
        borderColor: isLight ? '#2868fc' : 'var(--border-primary)',
      }}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      {/* Track icons */}
      <span className="absolute left-[7px] top-1/2 -translate-y-1/2 text-[12px] leading-none select-none" style={{ opacity: isLight ? 0.9 : 0.3 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      </span>
      <span className="absolute right-[7px] top-1/2 -translate-y-1/2 text-[12px] leading-none select-none" style={{ opacity: isLight ? 0.3 : 0.9 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </span>

      {/* Sliding thumb */}
      <span
        className="absolute top-[3px] w-[20px] h-[20px] rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"
        style={{
          left: isLight ? '28px' : '3px',
          backgroundColor: isLight ? '#ffffff' : '#dfe1e5',
        }}
      />
    </button>
  );
};

export { ThemeToggle };
export default ThemeToggle;
