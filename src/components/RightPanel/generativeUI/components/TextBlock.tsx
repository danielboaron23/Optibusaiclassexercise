import React from 'react';

interface TextBlockProps {
  text: string;
}

export const TextBlock: React.FC<TextBlockProps> = ({ text }) => {
  // Render markdown-like text with basic formatting support
  const formatText = (text: string) => {
    // Simple markdown parsing for bold (**text**)
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return <strong key={index}>{boldText}</strong>;
      }
      // Handle line breaks
      if (part.includes('\n')) {
        return part.split('\n').map((line, lineIndex, array) => (
          <React.Fragment key={index}>
            {line}
            {lineIndex < array.length - 1 && <br />}
          </React.Fragment>
        ));
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="text-[#dfe1e5] text-[16px] leading-relaxed whitespace-pre-wrap">
      {formatText(text)}
    </div>
  );
};
