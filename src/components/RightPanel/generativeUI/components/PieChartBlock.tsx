import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieDataPoint } from '../types';

interface PieChartBlockProps {
  data: PieDataPoint[];
  title?: string;
  width?: number;
  height?: number;
}

// Default color palette for pie charts
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
  return (
    <div className="w-full my-2">
      {title && (
        <h3 className="text-[16px] font-semibold text-[#dfe1e5] mb-3">{title}</h3>
      )}
      <div className="bg-[#22272e] border border-[#464b59] rounded-[8px] p-4">
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
                backgroundColor: '#303745', 
                border: '1px solid #464b59',
                borderRadius: '4px',
                color: '#dfe1e5'
              }}
            />
            <Legend 
              wrapperStyle={{ color: '#bdc1c9', fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
