import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '../types';

interface AreaChartBlockProps {
  data: ChartDataPoint[];
  title?: string;
  xKey: string;
  yKey: string;
  width?: number;
  height?: number;
}

export const AreaChartBlock: React.FC<AreaChartBlockProps> = ({
  data,
  title,
  xKey,
  yKey,
  width = 500,
  height = 300
}) => {
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
          <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id={`color${yKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={accentBlue} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={accentBlue} stopOpacity={0}/>
              </linearGradient>
            </defs>
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
            <Area
              type="monotone"
              dataKey={yKey}
              stroke={accentBlue}
              fillOpacity={1}
              fill={`url(#color${yKey})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
