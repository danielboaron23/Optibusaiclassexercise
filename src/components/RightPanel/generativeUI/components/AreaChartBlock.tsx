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
  return (
    <div className="w-full my-2">
      {title && (
        <h3 className="text-[16px] font-semibold text-[#dfe1e5] mb-3">{title}</h3>
      )}
      <div className="bg-[#22272e] border border-[#464b59] rounded-[8px] p-4">
        <ResponsiveContainer width="100%" height={height}>
          <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id={`color${yKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2868fc" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#2868fc" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#464b59" />
            <XAxis 
              dataKey={xKey} 
              stroke="#bdc1c9"
              tick={{ fill: '#bdc1c9', fontSize: 12 }}
            />
            <YAxis 
              stroke="#bdc1c9"
              tick={{ fill: '#bdc1c9', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#303745', 
                border: '1px solid #464b59',
                borderRadius: '4px',
                color: '#dfe1e5'
              }}
            />
            <Legend 
              wrapperStyle={{ color: '#bdc1c9', fontSize: '12px' }}
            />
            <Area 
              type="monotone" 
              dataKey={yKey} 
              stroke="#2868fc" 
              fillOpacity={1}
              fill={`url(#color${yKey})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
