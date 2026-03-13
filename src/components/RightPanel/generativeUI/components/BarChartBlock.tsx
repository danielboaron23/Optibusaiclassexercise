import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '../types';

interface BarChartBlockProps {
  data: ChartDataPoint[];
  title?: string;
  xKey: string;
  yKey: string;
  width?: number;
  height?: number;
}

export const BarChartBlock: React.FC<BarChartBlockProps> = ({
  data,
  title,
  xKey,
  yKey,
  width = 500,
  height = 300
}) => {
  // Read CSS variable values for recharts (which needs actual color strings)
  const style = getComputedStyle(document.documentElement);
  const textSecondary = style.getPropertyValue('--text-secondary').trim() || '#bdc1c9';
  const textPrimary = style.getPropertyValue('--text-primary').trim() || '#dfe1e5';
  const borderPrimary = style.getPropertyValue('--border-primary').trim() || '#464b59';
  const bgSecondary = style.getPropertyValue('--bg-secondary').trim() || '#303745';
  const accentBlue = style.getPropertyValue('--accent-blue').trim() || '#2868fc';

  return (
    <div className="w-full my-2">
      {title && (
        <h3 className="text-[16px] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      )}
      <div className="rounded-[8px] p-4" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
        <ResponsiveContainer width="100%" height={height}>
          <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={borderPrimary} />
            <XAxis
              dataKey={xKey}
              stroke={textSecondary}
              tick={{ fill: textSecondary, fontSize: 12 }}
            />
            <YAxis
              stroke={textSecondary}
              tick={{ fill: textSecondary, fontSize: 12 }}
            />
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
            <Bar
              dataKey={yKey}
              fill={accentBlue}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
