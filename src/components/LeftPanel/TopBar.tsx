
import React from 'react';
import { Icons } from '../figma/Icons';
import { ChevronDown } from 'lucide-react';

interface TopBarProps {
    onProfileClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onProfileClick }) => {
  return (
    <div className="h-[44px] w-full bg-[#282e36] border-b border-[#464b59] flex items-center justify-between px-2 select-none">
      {/* Left Section */}
      <div className="flex items-center gap-4">
         {/* Hamburger / Menu Button */}
         <button className="p-2 rounded-full hover:bg-[#303745] transition-colors">
            <div className="w-[18px] h-[18px] text-[#dfe1e5]">
                <Icons.Hamburger />
            </div>
         </button>

         {/* Title & Location */}
         <div className="flex items-center gap-2 text-[14px]">
             <span className="font-bold text-[#f2f3f5]">WEEKLY</span>
             <div className="h-4 w-[1px] bg-[#464b59] mx-1"></div>
             <span className="text-[#bdc1c9] font-normal">MANCHESTER</span>
             <span className="text-[#bdc1c9] mx-1">-</span>
             <button className="flex items-center gap-2 bg-[#303745] px-2 py-1 rounded text-[12px] text-[#dfe1e5] hover:bg-[#3a4250] transition-colors">
                North
                <div className="w-3 h-3 text-[#bdc1c9]">
                    <Icons.ArrowDown />
                </div>
             </button>
         </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center gap-3 px-2">
         <button className="w-9 h-9 flex items-center justify-center hover:bg-[#303745] rounded transition-colors text-[#bdc1c9]">
             <div className="w-6 h-6"><Icons.Share /></div>
         </button>
         <div className="h-6 w-[1px] bg-[#464b59]"></div>
         <button className="w-9 h-9 flex items-center justify-center hover:bg-[#303745] rounded transition-colors text-[#bdc1c9]">
             <div className="w-6 h-6"><Icons.Request /></div>
         </button>
         <div className="h-6 w-[1px] bg-[#464b59]"></div>
         <div className="flex items-center gap-1 hover:bg-[#303745] rounded p-1 cursor-pointer">
             <div className="w-7 h-7 flex items-center justify-center bg-[#d9d9d9] rounded text-[#303745] font-bold text-xs">
                {/* Placeholder for file icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
             </div>
             <div className="w-3 h-3 text-[#bdc1c9]"><Icons.ArrowDown /></div>
         </div>
         <button className="w-9 h-9 flex items-center justify-center hover:bg-[#303745] rounded transition-colors text-[#bdc1c9]">
             <div className="w-6 h-6"><Icons.Settings /></div>
         </button>
         
         {/* User Avatar */}
         <div 
            onClick={onProfileClick}
            className="w-9 h-9 rounded-full bg-[#1a1e24] flex items-center justify-center border border-[#464b59] cursor-pointer relative hover:border-[#626773] transition-colors"
         >
            <svg className="w-5 h-5 text-[#bdc1c9]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
         </div>
      </div>
    </div>
  );
};

export default TopBar;
