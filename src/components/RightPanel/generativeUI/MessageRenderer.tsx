import React from 'react';
import { MessageContent } from './types';
import { 
  TextBlock, 
  BarChartBlock, 
  LineChartBlock, 
  PieChartBlock, 
  AreaChartBlock, 
  TableBlock 
} from './components';

interface MessageRendererProps {
  content: MessageContent;
}

export const MessageRenderer: React.FC<MessageRendererProps> = ({ content }) => {
  switch (content.type) {
    case 'text':
      return <TextBlock text={content.text} />;
    
    case 'bar_chart':
      return (
        <BarChartBlock 
          data={content.data}
          title={content.title}
          xKey={content.xKey}
          yKey={content.yKey}
          width={content.width}
          height={content.height}
        />
      );
    
    case 'line_chart':
      return (
        <LineChartBlock 
          data={content.data}
          title={content.title}
          xKey={content.xKey}
          yKey={content.yKey}
          width={content.width}
          height={content.height}
        />
      );
    
    case 'pie_chart':
      return (
        <PieChartBlock 
          data={content.data}
          title={content.title}
          width={content.width}
          height={content.height}
        />
      );
    
    case 'area_chart':
      return (
        <AreaChartBlock 
          data={content.data}
          title={content.title}
          xKey={content.xKey}
          yKey={content.yKey}
          width={content.width}
          height={content.height}
        />
      );
    
    case 'table':
      return (
        <TableBlock 
          columns={content.columns}
          rows={content.rows}
          title={content.title}
        />
      );
    
    case 'composite':
      return (
        <div className="w-full flex flex-col gap-4">
          {content.blocks.map((block, index) => (
            <MessageRenderer key={index} content={block} />
          ))}
        </div>
      );
    
    default:
      // TypeScript exhaustiveness check
      const _exhaustive: never = content;
      return <TextBlock text="Unsupported content type" />;
  }
};
