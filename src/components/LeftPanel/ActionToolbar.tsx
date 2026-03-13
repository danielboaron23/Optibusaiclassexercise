
import React from 'react';
import { Icons } from '../figma/Icons';

const ActionToolbar = () => {
  return (
    <div className="w-full p-2 flex items-center justify-between gap-4" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-primary)' }}>
      {/* Left Side: Date & Save */}
      <div className="flex items-center gap-2">
        {/* Date Picker */}
        <div className="rounded flex items-center px-2 h-[30px] w-[180px] cursor-pointer transition-colors" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}>
            <span className="flex-1 text-[12px]" style={{ color: 'var(--text-primary)' }}>16 – 22 July 2026</span>
            <div className="w-3.5 h-3.5" style={{ color: 'var(--text-secondary)' }}><Icons.Calendar /></div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-1">
            <button className="w-5 h-5 flex items-center justify-center rounded" style={{ color: 'var(--text-secondary)' }}>
                <div className="w-3.5 h-3.5"><Icons.ArrowLeft /></div>
            </button>
            <button className="w-5 h-5 flex items-center justify-center rounded" style={{ color: 'var(--text-secondary)' }}>
                <div className="w-3.5 h-3.5"><Icons.ArrowRight /></div>
            </button>
        </div>

        {/* Save As Planned Button */}
        <button className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider h-[30px] px-4 rounded transition-colors" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
            Save as planned
            <div className="w-4 h-4"><Icons.ArrowDown /></div>
        </button>
      </div>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-2">
        {/* Stats Toggle */}
        <button className="h-[30px] px-2 rounded flex items-center justify-center transition-colors" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
            <div className="w-[18px] h-[18px]"><Icons.Stats /></div>
        </button>

        {/* Search */}
        <div className="relative h-[30px] flex items-center">
             <input
                type="text"
                placeholder="Search"
                className="h-full rounded px-2 text-[12px] focus:outline-none w-[150px] transition-all"
                style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', color: 'var(--text-primary)' }}
             />
        </div>

        {/* Filter Button */}
        <button className="h-[30px] flex items-center gap-2 px-3 rounded transition-colors" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
            <div className="w-[18px] h-[18px]"><Icons.Filter /></div>
            <span className="text-[12px] font-bold uppercase tracking-wider">FILTER</span>
        </button>

        {/* Send Button */}
        <button className="h-[30px] px-2 rounded flex items-center justify-center transition-colors" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
            <div className="w-[18px] h-[18px]"><Icons.Send /></div>
        </button>

        <div className="h-6 w-[1px] mx-1" style={{ backgroundColor: 'var(--border-primary)' }}></div>

        {/* Allocate Button (Primary) */}
        <button className="h-[30px] flex items-center gap-2 px-4 rounded text-white transition-colors shadow-sm" style={{ backgroundColor: 'var(--accent-blue)' }}>
             <span className="text-[12px] font-bold uppercase tracking-wider">Allocate</span>
             <div className="w-4 h-4"><Icons.ArrowDown /></div>
        </button>
      </div>
    </div>
  );
};

export default ActionToolbar;
