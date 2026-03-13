
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

    return (
        <div
            ref={drag}
            className={`
                relative w-[116px] h-[46px] rounded-[3px]
                flex flex-col overflow-hidden cursor-move select-none transition-colors
                ${isDragging ? 'opacity-50' : 'opacity-100'}
                ${isOverlay ? 'shadow-2xl scale-105 z-50' : ''}
            `}
            style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-primary)' }}
        >
            <div className="flex-1 p-1 flex flex-col justify-center items-start pl-2">
                <div className="text-[12px] font-bold leading-tight" style={{ color: 'var(--text-secondary)' }}>{shift.title}</div>
                <div className="text-[12px] leading-tight" style={{ color: 'var(--text-secondary)' }}>{shift.time}</div>
            </div>

            {/* Bottom Rail / Progress */}
            <div className="h-[3px] w-full relative" style={{ backgroundColor: 'var(--border-primary)' }}>
                <div className="absolute top-0 left-0 h-full w-[40%]" style={{ backgroundColor: 'var(--text-tertiary)' }}></div>
            </div>
        </div>
    );
};

export default ShiftCard;
