
import React, { useState } from 'react';
import { Icons } from '../figma/Icons';
import ShiftCard from './Grid/ShiftCard';
import { Shift } from './Grid/data';

const MOCK_STACK_SHIFTS: Shift[] = [
    { id: 'st1', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
    { id: 'st2', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
    { id: 'st3', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
    { id: 'st4', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
    { id: 'st5', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
    { id: 'st6', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
    { id: 'st7', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
    { id: 'st8', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
];

const BottomDrawer = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div 
            className={`
                absolute bottom-0 left-0 right-0 bg-[#282e36] border-t border-[#464b59] 
                shadow-[0px_-2px_16px_rgba(0,0,0,0.3)] z-40 transition-all duration-200 ease-in-out
                ${isOpen ? 'h-[250px]' : 'h-[12px]'}
            `}
        >
            {/* Handle */}
            <div 
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-[37px] h-[12px] bg-[#282e36] border-t border-l border-r border-[#464b59] rounded-t-[4px] flex items-center justify-center cursor-pointer hover:bg-[#303745]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={`w-3 h-3 text-[#dfe1e5] transition-transform ${isOpen ? '' : 'rotate-180'}`}>
                    <Icons.ArrowDown />
                </div>
            </div>

            {/* Content */}
            {isOpen && (
                <div className="flex h-full">
                    {/* Sidebar Filter Area */}
                    <div className="w-[290px] p-3 border-r border-[#464b59] flex flex-col gap-2 shrink-0">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search stack" 
                                className="w-full h-[30px] bg-[#303745] border border-[#464b59] rounded px-2 text-[12px] text-[#dfe1e5] placeholder-[#bdc1c9] focus:outline-none focus:border-[#2868fc]"
                            />
                        </div>
                        <button className="h-[30px] border border-[#464b59] rounded flex items-center justify-center gap-2 text-[#dfe1e5] hover:bg-[#303745] transition-colors">
                            <div className="w-4 h-4"><Icons.Filter /></div>
                            <span className="text-[12px] font-bold uppercase tracking-widest">FILTER STACK</span>
                        </button>
                    </div>

                    {/* Stack Grid */}
                    <div className="flex-1 p-3 overflow-auto">
                        <div className="flex flex-wrap gap-2">
                            {MOCK_STACK_SHIFTS.map((shift) => (
                                <div key={shift.id} className="shrink-0">
                                    <ShiftCard shift={shift} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BottomDrawer;
