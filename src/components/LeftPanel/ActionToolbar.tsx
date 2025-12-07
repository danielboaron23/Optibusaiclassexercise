
import React from 'react';
import { Icons } from '../figma/Icons';

const ActionToolbar = () => {
  return (
    <div className="w-full bg-[#282e36] border-b border-[#464b59] p-2 flex items-center justify-between gap-4">
      {/* Left Side: Date & Save */}
      <div className="flex items-center gap-2">
        {/* Date Picker */}
        <div className="bg-[#303745] border border-[#464b59] rounded flex items-center px-2 h-[30px] w-[180px] hover:border-[#5e6575] cursor-pointer transition-colors">
            <span className="flex-1 text-[12px] text-[#dfe1e5]">16 – 22 July 2026</span>
            <div className="w-3.5 h-3.5 text-[#bdc1c9]"><Icons.Calendar /></div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-1">
            <button className="w-5 h-5 flex items-center justify-center text-[#bdc1c9] hover:text-white rounded hover:bg-[#303745]">
                <div className="w-3.5 h-3.5"><Icons.ArrowLeft /></div>
            </button>
            <button className="w-5 h-5 flex items-center justify-center text-[#bdc1c9] hover:text-white rounded hover:bg-[#303745]">
                <div className="w-3.5 h-3.5"><Icons.ArrowRight /></div>
            </button>
        </div>

        {/* Save As Planned Button */}
        <button className="flex items-center gap-2 bg-[#303745] hover:bg-[#3a4250] text-[#dfe1e5] text-[12px] font-bold uppercase tracking-wider h-[30px] px-4 rounded transition-colors">
            Save as planned
            <div className="w-4 h-4"><Icons.ArrowDown /></div>
        </button>
      </div>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-2">
        {/* Stats Toggle */}
        <button className="h-[30px] px-2 bg-[#303745] hover:bg-[#3a4250] rounded flex items-center justify-center text-[#dfe1e5] transition-colors">
            <div className="w-[18px] h-[18px]"><Icons.Stats /></div>
        </button>

        {/* Search */}
        <div className="relative h-[30px] flex items-center">
             <input 
                type="text" 
                placeholder="Search" 
                className="h-full bg-[#303745] border border-[#464b59] rounded px-2 text-[12px] text-[#dfe1e5] placeholder-[#bdc1c9] focus:outline-none focus:border-[#2868fc] w-[150px] transition-all"
             />
        </div>

        {/* Filter Button */}
        <button className="h-[30px] flex items-center gap-2 bg-[#303745] hover:bg-[#3a4250] px-3 rounded text-[#dfe1e5] transition-colors">
            <div className="w-[18px] h-[18px]"><Icons.Filter /></div>
            <span className="text-[12px] font-bold uppercase tracking-wider">FILTER</span>
        </button>

        {/* Send Button */}
        <button className="h-[30px] px-2 bg-[#303745] hover:bg-[#3a4250] rounded flex items-center justify-center text-[#dfe1e5] transition-colors">
            <div className="w-[18px] h-[18px]"><Icons.Send /></div>
        </button>
        
        <div className="h-6 w-[1px] bg-[#464b59] mx-1"></div>

        {/* Allocate Button (Primary) */}
        <button className="h-[30px] flex items-center gap-2 bg-[#2868fc] hover:bg-[#1e54d6] px-4 rounded text-white transition-colors shadow-sm">
             <span className="text-[12px] font-bold uppercase tracking-wider">Allocate</span>
             <div className="w-4 h-4"><Icons.ArrowDown /></div>
        </button>
      </div>
    </div>
  );
};

export default ActionToolbar;
