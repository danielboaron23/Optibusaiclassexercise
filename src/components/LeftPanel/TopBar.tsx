
import React from 'react';
import { Icons } from '../figma/Icons';
import { ChevronDown } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

interface TopBarProps {
    onProfileClick?: () => void;
    onAiClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onProfileClick, onAiClick }) => {
  return (
    <div className="h-[44px] w-full flex items-center justify-between px-2 select-none" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-primary)' }}>
      {/* Left Section */}
      <div className="flex items-center gap-4">
         {/* Hamburger / Menu Button */}
         <button className="p-2 rounded-full transition-colors" style={{ color: 'var(--text-primary)' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
            <div className="w-[18px] h-[18px]">
                <Icons.Hamburger />
            </div>
         </button>

         {/* Title & Location */}
         <div className="flex items-center gap-2 text-[14px]">
             <span className="font-bold" style={{ color: 'var(--text-bright)' }}>WEEKLY</span>
             <div className="h-4 w-[1px] mx-1" style={{ backgroundColor: 'var(--border-primary)' }}></div>
             <span className="font-normal" style={{ color: 'var(--text-secondary)' }}>MANCHESTER</span>
             <span className="mx-1" style={{ color: 'var(--text-secondary)' }}>-</span>
             <button className="flex items-center gap-2 px-2 py-1 rounded text-[12px] transition-colors" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                North
                <div className="w-3 h-3" style={{ color: 'var(--text-secondary)' }}>
                    <Icons.ArrowDown />
                </div>
             </button>
         </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center gap-3 px-2">
         <button className="w-9 h-9 flex items-center justify-center rounded transition-colors" style={{ color: 'var(--text-secondary)' }}>
             <div className="w-6 h-6"><Icons.Share /></div>
         </button>
         <div className="h-6 w-[1px]" style={{ backgroundColor: 'var(--border-primary)' }}></div>
         <button className="w-9 h-9 flex items-center justify-center rounded transition-colors" style={{ color: 'var(--text-secondary)' }}>
             <div className="w-6 h-6"><Icons.Request /></div>
         </button>
         <div className="h-6 w-[1px]" style={{ backgroundColor: 'var(--border-primary)' }}></div>
         <div className="flex items-center gap-1 rounded p-1 cursor-pointer">
             <div className="w-7 h-7 flex items-center justify-center rounded font-bold text-xs" style={{ backgroundColor: '#d9d9d9', color: 'var(--bg-secondary)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
             </div>
             <div className="w-3 h-3" style={{ color: 'var(--text-secondary)' }}><Icons.ArrowDown /></div>
         </div>

         <button
            onClick={onAiClick}
            className="w-9 h-9 flex items-center justify-center rounded transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            title="Open AI Assistant"
         >
             <div className="w-6 h-6"><Icons.Sparkle /></div>
         </button>

         <button className="w-9 h-9 flex items-center justify-center rounded transition-colors" style={{ color: 'var(--text-secondary)' }}>
             <div className="w-6 h-6"><Icons.Settings /></div>
         </button>

         {/* Theme Toggle */}
         <ThemeToggle />

         {/* User Avatar */}
         <div
            onClick={onProfileClick}
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors"
            style={{ backgroundColor: 'var(--bg-deep)', border: '1px solid var(--border-primary)' }}
         >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
         </div>
      </div>
    </div>
  );
};

export default TopBar;
