import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, TrendingUp } from 'lucide-react';
import { ChartDataPoint, ChartEnhancements } from '../types';
import { Button } from '../../../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../../../ui/dropdown-menu';

interface LineChartBlockProps {
  data: ChartDataPoint[];
  title?: string;
  xKey: string;
  yKey: string;
  width?: number;
  height?: number;
  enhancements?: ChartEnhancements;
}

export const LineChartBlock: React.FC<LineChartBlockProps> = ({
  data,
  title,
  xKey,
  yKey,
  width = 500,
  height = 300,
  enhancements
}) => {
  const [selectedRange, setSelectedRange] = React.useState(
    enhancements?.dropdownOptions?.[0] || ''
  );

  // Read CSS variable values for recharts
  const style = getComputedStyle(document.documentElement);
  const textSecondary = style.getPropertyValue('--text-secondary').trim() || '#bdc1c9';
  const textPrimary = style.getPropertyValue('--text-primary').trim() || '#dfe1e5';
  const borderPrimary = style.getPropertyValue('--border-primary').trim() || '#464b59';
  const bgSecondary = style.getPropertyValue('--bg-secondary').trim() || '#303745';
  const accentBlue = style.getPropertyValue('--accent-blue').trim() || '#2868fc';

  const totalValue = useMemo(() => {
    if (!enhancements?.showTotalValue) return null;
    if (enhancements.totalValue) return enhancements.totalValue;
    const sum = data.reduce((acc, item) => {
      const value = typeof item[yKey] === 'number' ? item[yKey] : 0;
      return acc + value;
    }, 0);
    return sum.toFixed(1);
  }, [data, yKey, enhancements?.showTotalValue, enhancements?.totalValue]);

  const chartVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="w-full my-2">
      {/* Header with title and optional dropdown */}
      {(title || enhancements?.enableDropdown) && (
        <div className="flex items-center justify-between mb-3">
          {title && (
            <h3 className="text-[16px] font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</h3>
          )}
          {enhancements?.enableDropdown && enhancements?.dropdownOptions && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-sm"
                  style={{ color: 'var(--text-secondary)', border: '1px solid var(--border-primary)' }}
                >
                  {selectedRange}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-primary)', color: 'var(--text-primary)' }}
              >
                {enhancements.dropdownOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onSelect={() => setSelectedRange(option)}
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      )}

      {/* Total Value Display */}
      {enhancements?.showTotalValue && totalValue && (
        <div className="flex flex-col mb-4">
          <p className="text-5xl font-bold tracking-tighter" style={{ color: 'var(--text-primary)' }}>
            {totalValue}
          </p>
          {enhancements.trendIndicator && (
            <div className="flex items-center gap-1 text-[14px] mt-1" style={{ color: 'var(--text-secondary)' }}>
              <TrendingUp className={`h-4 w-4 ${enhancements.trendIndicator.isPositive ? 'text-emerald-500' : 'text-red-500'}`} />
              <span>{enhancements.trendIndicator.value} from last week</span>
            </div>
          )}
        </div>
      )}

      {/* Chart Container */}
      <div className="w-full rounded-[8px] p-4" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)', minWidth: 0, display: 'block' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={enhancements?.enableDropdown ? selectedRange : 'default'}
            variants={enhancements?.enableAnimations ? chartVariants : undefined}
            initial={enhancements?.enableAnimations ? "hidden" : false}
            animate={enhancements?.enableAnimations ? "visible" : false}
            className="w-full"
            style={{ width: '100%', minWidth: 0, display: 'block' }}
          >
            <div style={{ width: '100%', height: `${height}px` }}>
              <ResponsiveContainer width="100%" height={height}>
              <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
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
                <Line
                  type="monotone"
                  dataKey={yKey}
                  stroke={accentBlue}
                  strokeWidth={2}
                  dot={{ fill: accentBlue, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
