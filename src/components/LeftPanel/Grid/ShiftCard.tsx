
import React from 'react';
import { useDrag } from 'react-dnd';
import { Shift } from './data';

interface ShiftCardProps {
    shift: Shift;
    isOverlay?: boolean;
}

export const ItemTypes = {
    SHIFT: 'shift'
};

const ShiftCard: React.FC<ShiftCardProps> = ({ shift, isOverlay }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.SHIFT,
        item: { id: shift.id, shift },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    // Style based on Figma design
    // 116x46px, Dark bg #282e36, Border #464b59.
    // But the card itself seems to be inside the cell. 
    // The Figma code shows a "WeeklyDutyCellAsaf" with bg #282e36 and border.
    // Also a "Rail" bottom progress indicator.

    return (
        <div
            ref={drag}
            className={`
                relative w-[116px] h-[46px] bg-[#282e36] border border-[#464b59] rounded-[3px] 
                flex flex-col overflow-hidden cursor-move select-none hover:border-[#5e6575] transition-colors
                ${isDragging ? 'opacity-50' : 'opacity-100'}
                ${isOverlay ? 'shadow-2xl scale-105 z-50' : ''}
            `}
        >
            <div className="flex-1 p-1 flex flex-col justify-center items-start pl-2">
                <div className="text-[12px] font-bold text-[#bdc1c9] leading-tight">{shift.title}</div>
                <div className="text-[12px] text-[#bdc1c9] leading-tight">{shift.time}</div>
            </div>
            
            {/* Bottom Rail / Progress */}
            <div className="h-[3px] w-full bg-[#464b59] relative">
                <div className="absolute top-0 left-0 h-full bg-[#adb1ba] w-[40%]"></div>
            </div>
        </div>
    );
};

export default ShiftCard;
