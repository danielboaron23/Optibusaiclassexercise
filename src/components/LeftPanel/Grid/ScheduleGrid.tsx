
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
    };

    return (
        <div className="flex-1 overflow-auto relative custom-scrollbar" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="inline-block min-w-full relative">
                {/* Header Row 1: Stats */}
                <div className="flex sticky top-0 z-20 w-max" style={{ borderBottom: '1px solid var(--border-primary)', backgroundColor: 'var(--bg-primary)' }}>
                     <div className="w-[200px] p-2 sticky left-0 z-30 flex items-center" style={{ backgroundColor: 'var(--bg-primary)', borderRight: '1px solid var(--border-primary)' }}>
                         <span className="text-[11px] uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Unsaved as planned</span>
                     </div>
                     <div className="w-[88px] p-2 sticky left-[200px] z-30" style={{ backgroundColor: 'var(--bg-primary)', borderRight: '1px solid var(--border-primary)' }}></div>
                     {REAL_DAYS.map((day, i) => (
                         <div key={i} className="w-[144px] px-2 py-1 flex items-center gap-2" style={{ borderRight: '1px solid var(--border-primary)' }}>
                            <span className="text-[11px]" style={{ color: 'var(--text-primary)' }}>5</span>
                         </div>
                     ))}
                </div>

                {/* Header Row 2: Unallocated Stats */}
                <div className="flex sticky top-[37px] z-20 w-max" style={{ borderBottom: '1px solid var(--border-primary)', backgroundColor: 'var(--bg-primary)' }}>
                     <div className="w-[200px] p-2 sticky left-0 z-30 flex items-center justify-between" style={{ backgroundColor: 'var(--bg-primary)', borderRight: '1px solid var(--border-primary)' }}>
                         <span className="text-[11px] uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Unallocated duties</span>
                         <div className="w-3 h-3" style={{ color: 'var(--text-primary)' }}><Icons.ArrowDown /></div>
                     </div>
                     <div className="w-[88px] p-2 sticky left-[200px] z-30" style={{ backgroundColor: 'var(--bg-primary)', borderRight: '1px solid var(--border-primary)' }}></div>
                     {REAL_DAYS.map((day, i) => (
                         <div key={i} className="w-[144px] px-2 py-1 flex items-center gap-2" style={{ borderRight: '1px solid var(--border-primary)' }}>
                            <span className="text-[11px]" style={{ color: 'var(--text-primary)' }}>5</span>
                         </div>
                     ))}
                </div>

                {/* Header Row 3: Column Headers */}
                <div className="flex sticky top-[74px] z-20 w-max shadow-md" style={{ borderBottom: '1px solid var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
                    {/* Driver Header */}
                    <div className="w-[200px] h-[30px] px-2 flex items-center justify-between sticky left-0 z-30" style={{ backgroundColor: 'var(--bg-secondary)', borderRight: '1px solid var(--border-primary)' }}>
                        <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Driver</span>
                        <div className="flex gap-1"></div>
                    </div>

                    {/* Seniority Header */}
                    <div className="w-[88px] h-[30px] px-2 flex items-center sticky left-[200px] z-30" style={{ backgroundColor: 'var(--bg-secondary)', borderRight: '1px solid var(--border-primary)' }}>
                         <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Seniority</span>
                    </div>

                    {/* Day Headers */}
                    {REAL_DAYS.map((day, i) => (
                        <div key={i} className="w-[144px] h-[30px] px-2 flex items-center justify-between" style={{ borderRight: '1px solid var(--border-primary)' }}>
                            <div className="flex items-center gap-1">
                                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>{day.day}</span>
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                            </div>
                            <span className="text-[11px] font-bold" style={{ color: 'var(--text-primary)' }}>{day.date}</span>
                        </div>
                    ))}
                </div>

                {/* Driver Rows */}
                {MOCK_DRIVERS.map((driver) => (
                    <div key={driver.id} className="flex w-max group" style={{ borderBottom: '1px solid var(--border-primary)', backgroundColor: 'var(--bg-primary)' }}>
                        {/* Driver Info Column */}
                        <div className="w-[200px] h-[64px] sticky left-0 z-10 flex items-center px-4 gap-3" style={{ backgroundColor: 'var(--bg-primary)', borderRight: '1px solid var(--border-primary)' }}>
                            {/* Avatar */}
                            <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[12px] font-bold" style={{ backgroundColor: 'var(--accent-teal)' }}>
                                {driver.avatar}
                            </div>
                            {/* Name & ID */}
                            <div className="flex flex-col">
                                <span className="text-[12px] font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>{driver.name}</span>
                                <div className="flex gap-1 text-[11px] leading-tight">
                                    <span style={{ color: 'var(--text-bright)' }}>{driver.shiftLabel}</span>
                                    <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>{driver.employeeId}</span>
                                </div>
                            </div>
                        </div>

                        {/* Seniority Column */}
                        <div className="w-[88px] h-[64px] sticky left-[200px] z-10 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)', borderRight: '1px solid var(--border-primary)' }}>
                             <span className="text-[12px] font-bold" style={{ color: 'var(--text-primary)' }}>{driver.seniority}</span>
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
