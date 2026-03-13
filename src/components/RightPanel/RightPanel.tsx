
import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../figma/Icons';
import { MOCK_DRIVERS } from '../LeftPanel/Grid/data';
import { getBestAnswer, getSuggestedQuestions } from './knowledgeBase';
import { Message, MessageContent } from './generativeUI';
import { MessageRenderer } from './generativeUI/MessageRenderer';

interface RightPanelProps {
    mode: 'panel' | 'fullscreen' | 'minimized';
    onMinimize: () => void;
    onMaximize: () => void;
    onClose: () => void;
}

const SuggestionCard = ({
    icon,
    title,
    description,
    onClick,
    isHorizontal
}: {
    icon: React.ReactNode,
    title: string,
    description: string,
    onClick: () => void,
    isHorizontal?: boolean
}) => (
    <div
        onClick={onClick}
        className={`
            rounded-[8px] p-4 flex items-start gap-3 cursor-pointer transition-colors group
            ${isHorizontal ? 'flex-1 h-full' : 'w-full'}
        `}
        style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover-alt)'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
    >
        <div className="mt-0.5 w-4 h-4 shrink-0" style={{ color: 'var(--text-primary)' }}>
            {icon}
        </div>
        <div className="flex flex-col gap-0.5">
            <span className="text-[14px] font-bold" style={{ color: 'var(--text-primary)' }}>{title}</span>
            <span className="text-[14px] font-normal leading-tight" style={{ color: 'var(--text-secondary)' }}>{description}</span>
        </div>
    </div>
);

const RightPanel: React.FC<RightPanelProps> = ({ mode, onMinimize, onMaximize, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [feedbackId, setFeedbackId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, feedbackId]);

  const generateAIResponse = (userMessage: string): MessageContent => {
      const lowerMsg = userMessage.toLowerCase();

      if (lowerMsg.includes('efficiency') || lowerMsg.includes('performance') || lowerMsg.includes('metrics')) {
          return {
              type: 'composite',
              blocks: [
                  { type: 'text', text: 'Here is your weekly efficiency breakdown:' },
                  {
                      type: 'bar_chart',
                      title: 'Weekly Efficiency',
                      xKey: 'day',
                      yKey: 'efficiency',
                      data: [
                          { day: 'Mon', efficiency: 85 },
                          { day: 'Tue', efficiency: 92 },
                          { day: 'Wed', efficiency: 78 },
                          { day: 'Thu', efficiency: 88 },
                          { day: 'Fri', efficiency: 90 },
                          { day: 'Sat', efficiency: 82 },
                          { day: 'Sun', efficiency: 75 }
                      ]
                  }
              ]
          };
      }

      if (lowerMsg.includes('hours') || lowerMsg.includes('overtime') || lowerMsg.includes('worked')) {
          return {
              type: 'composite',
              blocks: [
                  { type: 'text', text: 'Here is the weekly hours breakdown:' },
                  {
                      type: 'line_chart',
                      title: 'Weekly Hours Worked',
                      xKey: 'day',
                      yKey: 'hours',
                      data: [
                          { day: 'Mon', hours: 8 },
                          { day: 'Tue', hours: 8.5 },
                          { day: 'Wed', hours: 7.5 },
                          { day: 'Thu', hours: 9 },
                          { day: 'Fri', hours: 8 },
                          { day: 'Sat', hours: 6 },
                          { day: 'Sun', hours: 0 }
                      ],
                      enhancements: {
                          enableAnimations: true,
                          enableDropdown: true,
                          dropdownOptions: ['Weekly', 'Monthly', 'Yearly'],
                          showTotalValue: true,
                          totalValue: '47.0',
                          trendIndicator: {
                              value: '+12%',
                              isPositive: true
                          }
                      }
                  }
              ]
          };
      }

      if (lowerMsg.includes('shift') && (lowerMsg.includes('distribution') || lowerMsg.includes('breakdown') || lowerMsg.includes('split'))) {
          return {
              type: 'composite',
              blocks: [
                  { type: 'text', text: 'Here is the shift type distribution:' },
                  {
                      type: 'pie_chart',
                      title: 'Shift Type Distribution',
                      data: [
                          { name: 'Early', value: 35 },
                          { name: 'Day', value: 28 },
                          { name: 'Late', value: 22 },
                          { name: 'Night', value: 15 }
                      ]
                  }
              ]
          };
      }

      if ((lowerMsg.includes('james') && lowerMsg.includes('joyce')) ||
          (lowerMsg.includes('driver') && (lowerMsg.includes('324099') || lowerMsg.includes('info') || lowerMsg.includes('details')))) {
          if (!Array.isArray(MOCK_DRIVERS) || MOCK_DRIVERS.length === 0) {
              return {
                  type: 'text',
                  text: 'No driver data is currently available. Please add drivers to the system first.'
              };
          }

          const driver = MOCK_DRIVERS[0];
          if (!driver) {
              return {
                  type: 'text',
                  text: 'Driver information could not be retrieved. Please try again later.'
              };
          }

          return {
              type: 'composite',
              blocks: [
                  { type: 'text', text: '**Driver Information:**' },
                  {
                      type: 'table',
                      title: 'Driver Details',
                      columns: ['Field', 'Value'],
                      rows: [
                          { Field: 'Name', Value: driver.name },
                          { Field: 'Employee ID', Value: driver.employeeId },
                          { Field: 'Shift Pattern', Value: driver.shiftLabel },
                          { Field: 'Seniority', Value: `${driver.seniority} years` }
                      ]
                  },
                  { type: 'text', text: 'This driver is currently assigned to the Early shift pattern (05:00-12:00).\n\nWould you like to know more about managing drivers or shift assignments?' }
              ]
          };
      }

      if (lowerMsg.match(/^(hi|hello|hey|good morning|good afternoon|good evening)\b/)) {
          return {
              type: 'text',
              text: `Hello! I'm your Workforce Planning Assistant.

I can help you with:
• **Driver Management** - Adding, editing, and assigning drivers
• **Shift Scheduling** - Understanding shift types and patterns
• **Optimization** - Automatically improving your schedules
• **Reports** - Exporting data and generating reports
• **Troubleshooting** - Solving common issues

What would you like to know?`
          };
      }

      if (lowerMsg.match(/\b(thank|thanks|thx)\b/)) {
          return {
              type: 'text',
              text: `You're welcome! Feel free to ask if you have more questions about workforce planning or scheduling.`
          };
      }

      return { type: 'text', text: getBestAnswer(userMessage) };
  };

  const handleSendMessage = async (text: string) => {
      if (!text.trim()) return;

      const newMessage: Message = {
          id: Date.now().toString(),
          content: { type: 'text', text: text },
          sender: 'user',
          timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      setIsTyping(true);

      setTimeout(() => {
          const responseContent = generateAIResponse(text);
          const aiMessage: Message = {
              id: (Date.now() + 1).toString(),
              content: responseContent,
              sender: 'ai',
              timestamp: new Date()
          };
          setMessages(prev => [...prev, aiMessage]);
          setIsTyping(false);
      }, 1500);
  };

  const handleThumbDown = (msgId: string) => {
      setFeedbackId(feedbackId === msgId ? null : msgId);
  };

  return (
    <div className={`flex w-full h-full ${mode === 'panel' ? 'rounded-[8px]' : ''} overflow-hidden`} style={{ backgroundColor: 'var(--bg-primary)', border: mode === 'panel' ? '1px solid var(--border-primary)' : 'none' }}>

        {/* History Sidebar (Fullscreen Only) */}
        {mode === 'fullscreen' && (
            <div className="w-[240px] flex flex-col shrink-0" style={{ backgroundColor: 'var(--bg-primary)', borderRight: '1px solid var(--border-primary)' }}>
                <div className="p-4" style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <button
                        onClick={() => setMessages([])}
                        className="w-full h-[36px] rounded-[4px] flex items-center justify-center gap-2 text-[14px] font-bold transition-colors"
                        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                    >
                        <div className="w-4 h-4"><Icons.WriteNew /></div>
                        New Chat
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-2">
                    <div className="text-[12px] px-2 py-2 font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Chat history</div>
                    {[
                        'Adding deadhead catalog',
                        'Optimization settings',
                        'Driver seniority check'
                    ].map((item, i) => (
                        <div key={i} className="h-[40px] flex items-center px-2 text-[14px] rounded-[8px] cursor-pointer truncate transition-colors" style={{ color: 'var(--text-primary)' }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0" style={{ backgroundColor: 'var(--bg-primary)' }}>

            {/* Header */}
            <div className="h-[40px] flex items-center justify-between px-3 shrink-0 drag-handle cursor-grab active:cursor-grabbing" style={{ borderBottom: '1px solid var(--border-primary)', backgroundColor: 'var(--bg-primary)' }}>
                <div className="flex items-center gap-1">
                    {mode === 'fullscreen' && (
                        <div className="flex items-center gap-2 mr-2 text-[12px]" style={{ color: 'var(--text-secondary)' }}>
                            <span>Operations</span>
                            <span>/</span>
                            <span style={{ color: 'var(--text-primary)' }}>Weekly</span>
                        </div>
                    )}
                    <button onClick={onMaximize} className="p-1 rounded w-[20px] h-[20px] flex items-center justify-center transition-colors" style={{ color: 'var(--text-primary)' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        {mode === 'fullscreen' ? <Icons.Minimize /> : <Icons.Expand />}
                    </button>
                    <button className="p-1 rounded w-[20px] h-[20px] flex items-center justify-center transition-colors" style={{ color: 'var(--text-primary)' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <Icons.Timer />
                    </button>
                    <button onClick={() => setMessages([])} className="p-1 rounded w-[20px] h-[20px] flex items-center justify-center transition-colors" style={{ color: 'var(--text-primary)' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <Icons.WriteNew />
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="rounded-[4px] px-1.5 py-[2px] text-[10px] font-bold uppercase tracking-wide" style={{ border: '1px solid var(--text-tertiary)', color: 'var(--text-tertiary)' }}>Beta</div>
                    <button onClick={onClose} className="p-1 rounded w-[20px] h-[20px] flex items-center justify-center transition-colors" style={{ color: 'var(--text-primary)' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <Icons.Close />
                    </button>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar flex flex-col items-center">
                <div className={`w-full ${mode === 'fullscreen' ? 'max-w-[800px]' : ''}`}>
                    {messages.length === 0 ? (
                        /* Empty State */
                        <div className="flex flex-col items-center justify-center min-h-[400px] gap-8">
                            <h2 className="text-[24px] font-semibold text-center tracking-tight bg-gradient-to-r from-[#3ea8ff] to-[#26dac5] bg-clip-text text-transparent">
                                What would you like to know?
                            </h2>

                            <div className={`flex gap-4 w-full ${mode === 'fullscreen' ? 'flex-row flex-wrap justify-center' : 'flex-col max-w-[360px]'}`}>
                                <SuggestionCard
                                    icon={<Icons.Bus />}
                                    title="How to manage drivers?"
                                    description="Learn about adding, editing, and assigning drivers"
                                    onClick={() => handleSendMessage("How do I add and manage drivers?")}
                                    isHorizontal={mode === 'fullscreen'}
                                />
                                <SuggestionCard
                                    icon={<Icons.Bolt />}
                                    title="Optimize my schedule"
                                    description="Automatically improve schedules to meet defined goals"
                                    onClick={() => handleSendMessage("How does schedule optimization work?")}
                                    isHorizontal={mode === 'fullscreen'}
                                />
                                <SuggestionCard
                                    icon={<Icons.Download />}
                                    title="Export reports"
                                    description="Download schedules and data for external analysis"
                                    onClick={() => handleSendMessage("How can I export reports?")}
                                    isHorizontal={mode === 'fullscreen'}
                                />
                            </div>
                            {mode === 'fullscreen' && (
                                <div className="flex gap-4 w-full flex-row flex-wrap justify-center mt-4">
                                    <SuggestionCard
                                        icon={<Icons.Timer />}
                                        title="Shift types & patterns"
                                        description="Understand different shift types and scheduling patterns"
                                        onClick={() => handleSendMessage("What shift types are available?")}
                                        isHorizontal={true}
                                    />
                                    <SuggestionCard
                                        icon={<Icons.Close />}
                                        title="Resolve conflicts"
                                        description="Understand and fix scheduling conflicts and warnings"
                                        onClick={() => handleSendMessage("What do conflicts and warnings mean?")}
                                        isHorizontal={true}
                                    />
                                    <SuggestionCard
                                        icon={<Icons.WriteNew />}
                                        title="Keyboard shortcuts"
                                        description="Speed up your work with keyboard hotkeys"
                                        onClick={() => handleSendMessage("What keyboard shortcuts are available?")}
                                        isHorizontal={true}
                                    />
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Messages */
                        <div className="flex flex-col gap-6 pb-20">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.sender === 'user' ? (
                                        /* User Message Bubble */
                                        <div className="text-[16px] p-4 rounded-tl-[16px] rounded-bl-[16px] rounded-tr-[4px] rounded-br-[16px] ml-6 max-w-[85%]" style={{ backgroundColor: 'var(--bg-deep)', color: 'var(--text-primary)' }}>
                                            {msg.content.type === 'text' ? msg.content.text : 'Unsupported content type'}
                                        </div>
                                    ) : (
                                        /* Bot Message */
                                        <div className="flex gap-3 w-full max-w-[90%] min-w-0">
                                            <div className="w-6 h-6 shrink-0 mt-1" style={{ color: 'var(--accent-blue)' }}>
                                                <Icons.Sparkle />
                                            </div>
                                            <div className="flex-1 min-w-0 flex flex-col gap-2">
                                                <MessageRenderer content={msg.content} />

                                                {/* Action Buttons */}
                                                <div className="flex items-center gap-2 mt-1">
                                                    <button className="w-5 h-5 flex items-center justify-center rounded-[4px] transition-colors" style={{ color: 'var(--text-secondary)' }}
                                                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                                                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                                                    ><Icons.ThumbsUp /></button>
                                                    <button
                                                        onClick={() => handleThumbDown(msg.id)}
                                                        className="w-5 h-5 flex items-center justify-center rounded-[4px] transition-colors"
                                                        style={{ color: feedbackId === msg.id ? 'var(--accent-red)' : 'var(--text-secondary)' }}
                                                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                                                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                                                    >
                                                        <Icons.ThumbsDown />
                                                    </button>
                                                    <button className="w-5 h-5 flex items-center justify-center rounded-[4px] transition-colors" style={{ color: 'var(--text-secondary)' }}
                                                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                                                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                                                    ><Icons.Copy /></button>
                                                </div>

                                                {/* Feedback Panel */}
                                                {feedbackId === msg.id && (
                                                    <div className="mt-2 rounded-[8px] p-3 animate-in fade-in slide-in-from-top-2 duration-200" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
                                                        <p className="text-[14px] mb-2" style={{ color: 'var(--text-primary)' }}>What was the issue with the answer?</p>
                                                        <div className="flex flex-wrap gap-2 mb-3">
                                                            {["Incorrect answer", "Insulting", "Didn't follow instructions", "I don't like the answer"].map(chip => (
                                                                <button key={chip} className="h-[24px] px-3 rounded-[4px] text-[12px] transition-colors" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
                                                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'}
                                                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                                                                >
                                                                    {chip}
                                                                </button>
                                                            ))}
                                                        </div>
                                                        <p className="text-[12px] mb-1" style={{ color: 'var(--text-secondary)' }}>Something else?</p>
                                                        <input
                                                            type="text"
                                                            placeholder="Write it here"
                                                            className="w-full rounded-[4px] px-2 py-1 text-[14px] outline-none"
                                                            style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', color: 'var(--text-primary)' }}
                                                            onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
                                                            onBlur={e => e.currentTarget.style.borderColor = 'var(--border-primary)'}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 shrink-0 mt-1" style={{ color: 'var(--accent-blue)' }}><Icons.Sparkle /></div>
                                    <div className="p-3 rounded-[12px] rounded-tl-[2px] flex gap-1" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                        <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
                                        <div className="w-2 h-2 rounded-full animate-bounce delay-100" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
                                        <div className="w-2 h-2 rounded-full animate-bounce delay-200" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    )}
                </div>
            </div>

            {/* Input Footer */}
            <div className="p-4 border-t border-transparent relative z-20 shrink-0" style={{ backgroundColor: 'var(--bg-primary)' }}>
                <div className={`mx-auto ${mode === 'fullscreen' ? 'max-w-[800px]' : ''}`}>
                    <div className="rounded-[16px] p-4 flex flex-col gap-2 relative transition-shadow shadow-lg" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(inputValue); } }}
                            placeholder="Ask anything"
                            className="w-full bg-transparent border-none outline-none text-[16px] italic resize-none min-h-[24px] max-h-[100px] custom-scrollbar"
                            style={{ color: 'var(--text-primary)', '--tw-placeholder-opacity': 1 } as any}
                            rows={1}
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={() => handleSendMessage(inputValue)}
                                disabled={!inputValue.trim()}
                                className="w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors"
                                style={inputValue.trim()
                                    ? { backgroundColor: 'var(--accent-blue)', color: 'white' }
                                    : { backgroundColor: 'var(--bg-surface)', color: 'var(--accent-gray)', cursor: 'not-allowed' }
                                }
                            >
                                <div className="w-[18px] h-[18px]"><Icons.Send /></div>
                            </button>
                        </div>
                    </div>
                    <p className="text-[12px] text-center mt-2" style={{ color: 'var(--text-secondary)' }}>
                        Optibus assistant is powered by AI, so your review is essential to ensure accuracy
                    </p>
                </div>

                {/* Resize Handle (Panel Mode Only) */}
                {mode === 'panel' && (
                    <div className="absolute bottom-1 left-1 w-4 h-4 opacity-50 pointer-events-none" style={{ color: 'var(--text-secondary)' }}>
                        <Icons.ResizeHandle />
                    </div>
                )}
            </div>

        </div>
    </div>
  );
};

export default RightPanel;
