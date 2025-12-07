
import React from 'react';
import { useDrop } from 'react-dnd';
import ShiftCard, { ItemTypes } from './ShiftCard';
import { Shift } from './data';
import { Icons } from '../../figma/Icons';

interface DayCellProps {
    driverId: string;
    dayIndex: number;
    shift?: Shift;
    onDrop: (item: any, driverId: string, dayIndex: number) => void;
}

const DayCell: React.FC<DayCellProps> = ({ driverId, dayIndex, shift, onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.SHIFT,
        drop: (item) => onDrop(item, driverId, dayIndex),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div 
            ref={drop}
            className={`
                w-[144px] min-w-[144px] h-[64px] border-r border-b border-[#464b59] 
                flex items-center justify-center relative
                ${isOver ? 'bg-[#303745]' : ''}
            `}
        >
            {shift ? (
                <ShiftCard shift={shift} />
            ) : (
                // Empty State
                <div className="w-[116px] h-[46px] border border-dashed border-[#626773] rounded-[3px] flex items-center justify-center group hover:border-[#8d94a5] cursor-pointer">
                    <div className="w-3.5 h-3.5 text-[#bdc1c9] group-hover:text-white transition-colors">
                        <Icons.Plus />
                    </div>
                </div>
            )}
            
            {/* Optional: Day Icons below the card? Screenshot shows small icons in some cells (Error, etc) */}
        </div>
    );
};

export default DayCell;
