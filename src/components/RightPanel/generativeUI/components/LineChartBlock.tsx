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

  // Calculate total value if needed (use provided value or calculate)
  const totalValue = useMemo(() => {
    if (!enhancements?.showTotalValue) return null;
    // Use provided totalValue if available, otherwise calculate
    if (enhancements.totalValue) return enhancements.totalValue;
    const sum = data.reduce((acc, item) => {
      const value = typeof item[yKey] === 'number' ? item[yKey] : 0;
      return acc + value;
    }, 0);
    return sum.toFixed(1);
  }, [data, yKey, enhancements?.showTotalValue, enhancements?.totalValue]);

  // Framer Motion variants for animations
  const chartVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="w-full my-2">
      {/* Header with title and optional dropdown */}
      {(title || enhancements?.enableDropdown) && (
        <div className="flex items-center justify-between mb-3">
          {title && (
            <h3 className="text-[16px] font-semibold text-[#dfe1e5]">{title}</h3>
          )}
          {enhancements?.enableDropdown && enhancements?.dropdownOptions && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-sm text-[#bdc1c9] hover:text-[#dfe1e5] hover:bg-[#303745] border border-[#464b59]"
                >
                  {selectedRange}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end"
                className="bg-[#22272e] border-[#464b59] text-[#dfe1e5]"
              >
                {enhancements.dropdownOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onSelect={() => setSelectedRange(option)}
                    className="text-[#dfe1e5] hover:bg-[#303745] focus:bg-[#303745]"
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
          <p className="text-5xl font-bold tracking-tighter text-[#dfe1e5]">
            {totalValue}
          </p>
          {enhancements.trendIndicator && (
            <div className="flex items-center gap-1 text-[14px] text-[#bdc1c9] mt-1">
              <TrendingUp className={`h-4 w-4 ${enhancements.trendIndicator.isPositive ? 'text-emerald-500' : 'text-red-500'}`} />
              <span>{enhancements.trendIndicator.value} from last week</span>
            </div>
          )}
        </div>
      )}

      {/* Chart Container */}
      <div className="bg-[#22272e] border border-[#464b59] rounded-[8px] p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={enhancements?.enableDropdown ? selectedRange : 'default'} // Re-trigger animation when range changes
            variants={enhancements?.enableAnimations ? chartVariants : undefined}
            initial={enhancements?.enableAnimations ? "hidden" : false}
            animate={enhancements?.enableAnimations ? "visible" : false}
            className="w-full"
          >
            <ResponsiveContainer width="100%" height={height}>
              <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
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
                <Line 
                  type="monotone" 
                  dataKey={yKey} 
                  stroke="#2868fc" 
                  strokeWidth={2}
                  dot={{ fill: '#2868fc', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
