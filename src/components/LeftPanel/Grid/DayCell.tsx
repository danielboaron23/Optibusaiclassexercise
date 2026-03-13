
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
            className="w-[144px] min-w-[144px] h-[64px] flex items-center justify-center relative"
            style={{
                borderRight: '1px solid var(--border-primary)',
                borderBottom: '1px solid var(--border-primary)',
                backgroundColor: isOver ? 'var(--bg-secondary)' : 'transparent'
            }}
        >
            {shift ? (
                <ShiftCard shift={shift} />
            ) : (
                // Empty State
                <div className="w-[116px] h-[46px] rounded-[3px] flex items-center justify-center group cursor-pointer" style={{ border: '1px dashed var(--border-secondary)' }}>
                    <div className="w-3.5 h-3.5 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                        <Icons.Plus />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DayCell;
