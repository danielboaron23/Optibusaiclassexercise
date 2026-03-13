import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieDataPoint } from '../types';

interface PieChartBlockProps {
  data: PieDataPoint[];
  title?: string;
  width?: number;
  height?: number;
}

// Default color palette for pie charts (accent colors that work in both themes)
const DEFAULT_COLORS = [
  '#2868fc',
  '#26dac5',
  '#3ea8ff',
  '#f07e86',
  '#ffa726',
  '#ab47bc',
  '#66bb6a',
  '#ef5350'
];

export const PieChartBlock: React.FC<PieChartBlockProps> = ({
  data,
  title,
  width = 500,
  height = 300
}) => {
  const style = getComputedStyle(document.documentElement);
  const textSecondary = style.getPropertyValue('--text-secondary').trim() || '#bdc1c9';
  const textPrimary = style.getPropertyValue('--text-primary').trim() || '#dfe1e5';
  const borderPrimary = style.getPropertyValue('--border-primary').trim() || '#464b59';
  const bgSecondary = style.getPropertyValue('--bg-secondary').trim() || '#303745';

  return (
    <div className="w-full my-2">
      {title && (
        <h3 className="text-[16px] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      )}
      <div className="rounded-[8px] p-4" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: bgSecondary,
                border: `1px solid ${borderPrimary}`,
                borderRadius: '4px',
                color: textPrimary
              }}
            />
            <Legend
              wrapperStyle={{ color: textSecondary, fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
