
import React from 'react';
// @ts-ignore
import imgImage131 from "figma:asset/fd8f454c969a52a5661662299ddad401cef43630.png";

const Sidebar = () => {
  return (
    <div className="w-[48px] h-full bg-[#282e36] border-r border-[#464b59] flex flex-col items-center py-4 justify-between shrink-0 z-30">
      {/* Logo / Top Icon */}
      <div className="w-[30px] h-[30px] flex items-center justify-center">
         {/* Optibus Logo Placeholder - mimicking the 'Group' from import */}
         <div className="w-8 h-8 rounded-full bg-[#282e36] shadow-[0_4px_6px_rgba(0,0,0,0.3)] flex items-center justify-center">
            <div className="w-5 h-5 text-[#dfe1e5]">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
                </svg>
            </div>
         </div>
      </div>

      {/* Footer Image/Icon */}
      <div className="w-[33px] h-[9px] flex items-center justify-center">
         <img src={imgImage131} alt="Logo" className="w-full h-full object-contain opacity-50" />
      </div>
    </div>
  );
};

export default Sidebar;
