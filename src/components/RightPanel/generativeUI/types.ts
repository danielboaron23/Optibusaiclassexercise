/**
 * Type definitions for Generative UI message content
 * Uses discriminated union pattern for type-safe message rendering
 */

// Base data point for charts with x/y axes
export interface ChartDataPoint {
  [key: string]: string | number;
}

// Data point for pie charts (name + value)
export interface PieDataPoint {
  name: string;
  value: number;
  color?: string;
}

// Enhanced chart options (optional)
export interface ChartEnhancements {
  enableAnimations?: boolean;
  enableDropdown?: boolean;
  dropdownOptions?: string[];
  showTotalValue?: boolean;
  totalValue?: string;
  trendIndicator?: {
    value: string;  // e.g., "+12%"
    isPositive: boolean;
  };
}

// Discriminated union for all message content types
export type MessageContent =
  | { type: 'text'; text: string }
  | { 
      type: 'bar_chart'; 
      data: ChartDataPoint[]; 
      title?: string; 
      xKey: string; 
      yKey: string;
      width?: number;
      height?: number;
      enhancements?: ChartEnhancements;
    }
  | { 
      type: 'line_chart'; 
      data: ChartDataPoint[]; 
      title?: string; 
      xKey: string; 
      yKey: string;
      width?: number;
      height?: number;
      enhancements?: ChartEnhancements;
    }
  | { 
      type: 'pie_chart'; 
      data: PieDataPoint[]; 
      title?: string;
      width?: number;
      height?: number;
      enhancements?: ChartEnhancements;
    }
  | { 
      type: 'area_chart'; 
      data: ChartDataPoint[]; 
      title?: string; 
      xKey: string; 
      yKey: string;
      width?: number;
      height?: number;
      enhancements?: ChartEnhancements;
    }
  | { 
      type: 'table'; 
      columns: string[]; 
      rows: Record<string, string | number>[];
      title?: string;
    }
  | { 
      type: 'composite'; 
      blocks: MessageContent[];
    };

// Updated Message interface
export interface Message {
  id: string;
  content: MessageContent;
  sender: 'user' | 'ai';
  timestamp: Date;
  hasFeedback?: boolean;
}
