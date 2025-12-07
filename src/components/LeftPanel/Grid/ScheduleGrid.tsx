
import React, { useState } from 'react';
import { REAL_DAYS, MOCK_DRIVERS, MOCK_SHIFTS, Shift } from './data';
import DayCell from './DayCell';
import { Icons } from '../../figma/Icons';

const ScheduleGrid = () => {
    // State for shifts
    const [shifts, setShifts] = useState(MOCK_SHIFTS);

    const handleDrop = (item: any, driverId: string, dayIndex: number) => {
        const newShift = item.shift;
        setShifts(prev => ({
            ...prev,
            [driverId]: {
                ...(prev[driverId] || {}),
                [dayIndex]: newShift
            }
        }));
        // Note: In a real app we would remove it from the source if needed, 
        // but for "Allocate" from drawer, we might just copy it.
        // For moving between cells, we'd need source info.
    };

    return (
        <div className="flex-1 overflow-auto bg-[#282e36] relative custom-scrollbar">
            <div className="inline-block min-w-full relative">
                {/* Grid Container */}
                {/* Grid Layout: Driver (200px) | Seniority (88px) | Days (10 * 144px) */}
                
                {/* Header Row 1: Stats */}
                <div className="flex border-b border-[#464b59] bg-[#282e36] sticky top-0 z-20 w-max">
                     <div className="w-[200px] p-2 sticky left-0 bg-[#282e36] border-r border-[#464b59] z-30 flex items-center">
                         <span className="text-[11px] uppercase tracking-widest text-[#dfe1e5]">Unsaved as planned</span>
                     </div>
                     <div className="w-[88px] p-2 sticky left-[200px] bg-[#282e36] border-r border-[#464b59] z-30"></div>
                     {REAL_DAYS.map((day, i) => (
                         <div key={i} className="w-[144px] px-2 py-1 border-r border-[#464b59] flex items-center gap-2">
                            <span className="text-[11px] text-[#dfe1e5]">5</span> 
                            {/* Stats number placeholder */}
                         </div>
                     ))}
                </div>

                {/* Header Row 2: Unallocated Stats */}
                <div className="flex border-b border-[#464b59] bg-[#282e36] sticky top-[37px] z-20 w-max">
                     <div className="w-[200px] p-2 sticky left-0 bg-[#282e36] border-r border-[#464b59] z-30 flex items-center justify-between">
                         <span className="text-[11px] uppercase tracking-widest text-[#dfe1e5]">Unallocated duties</span>
                         <div className="w-3 h-3 text-[#dfe1e5]"><Icons.ArrowDown /></div>
                     </div>
                     <div className="w-[88px] p-2 sticky left-[200px] bg-[#282e36] border-r border-[#464b59] z-30"></div>
                     {REAL_DAYS.map((day, i) => (
                         <div key={i} className="w-[144px] px-2 py-1 border-r border-[#464b59] flex items-center gap-2">
                            <span className="text-[11px] text-[#dfe1e5]">5</span>
                         </div>
                     ))}
                </div>

                {/* Header Row 3: Column Headers (Driver, Seniority, Fri 3, etc) */}
                <div className="flex border-b border-[#464b59] bg-[#303745] sticky top-[74px] z-20 w-max shadow-md">
                    {/* Driver Header */}
                    <div className="w-[200px] h-[30px] px-2 flex items-center justify-between sticky left-0 bg-[#303745] border-r border-[#464b59] z-30">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#dfe1e5]">Driver</span>
                        {/* Icons */}
                        <div className="flex gap-1">
                            {/* ... */}
                        </div>
                    </div>
                    
                    {/* Seniority Header */}
                    <div className="w-[88px] h-[30px] px-2 flex items-center sticky left-[200px] bg-[#303745] border-r border-[#464b59] z-30">
                         <span className="text-[11px] font-bold uppercase tracking-widest text-[#dfe1e5]">Seniority</span>
                    </div>

                    {/* Day Headers */}
                    {REAL_DAYS.map((day, i) => (
                        <div key={i} className="w-[144px] h-[30px] px-2 flex items-center justify-between border-r border-[#464b59]">
                            <div className="flex items-center gap-1">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-[#dfe1e5]">{day.day}</span>
                                <div className="w-2 h-2 rounded-full bg-[#36cc68]"></div>
                            </div>
                            <span className="text-[11px] font-bold text-[#dfe1e5]">{day.date}</span>
                        </div>
                    ))}
                </div>

                {/* Driver Rows */}
                {MOCK_DRIVERS.map((driver) => (
                    <div key={driver.id} className="flex border-b border-[#464b59] bg-[#282e36] w-max hover:bg-[#2d333d] group">
                        {/* Driver Info Column */}
                        <div className="w-[200px] h-[64px] sticky left-0 bg-[#282e36] group-hover:bg-[#2d333d] border-r border-[#464b59] z-10 flex items-center px-4 gap-3">
                            {/* Avatar */}
                            <div className="w-[30px] h-[30px] rounded-full bg-[#06887c] flex items-center justify-center text-white text-[12px] font-bold">
                                {driver.avatar}
                            </div>
                            {/* Name & ID */}
                            <div className="flex flex-col">
                                <span className="text-[12px] font-bold text-[#dfe1e5] leading-tight">{driver.name}</span>
                                <div className="flex gap-1 text-[11px] leading-tight">
                                    <span className="text-[#f2f3f5]">{driver.shiftLabel}</span>
                                    <span className="text-[#bdc1c9] font-semibold">{driver.employeeId}</span>
                                </div>
                            </div>
                        </div>

                        {/* Seniority Column */}
                        <div className="w-[88px] h-[64px] sticky left-[200px] bg-[#282e36] group-hover:bg-[#2d333d] border-r border-[#464b59] z-10 flex items-center justify-center">
                             <span className="text-[12px] font-bold text-[#dfe1e5]">{driver.seniority}</span>
                        </div>

                        {/* Day Columns */}
                        {REAL_DAYS.map((day, dayIndex) => {
                             const shift = shifts[driver.id]?.[dayIndex];
                             return (
                                 <DayCell 
                                    key={`${driver.id}-${dayIndex}`}
                                    driverId={driver.id}
                                    dayIndex={dayIndex}
                                    shift={shift}
                                    onDrop={handleDrop}
                                 />
                             );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScheduleGrid;
