
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
            bg-[#303745] border border-[#464b59] rounded-[8px] p-4 flex items-start gap-3 cursor-pointer hover:bg-[#3a4050] transition-colors group
            ${isHorizontal ? 'flex-1 h-full' : 'w-full'}
        `}
    >
        <div className="mt-0.5 text-[#dfe1e5] w-4 h-4 shrink-0 group-hover:text-white">
            {icon}
        </div>
        <div className="flex flex-col gap-0.5">
            <span className="text-[14px] font-bold text-[#dfe1e5] group-hover:text-white">{title}</span>
            <span className="text-[14px] font-normal text-[#bdc1c9] leading-tight">{description}</span>
        </div>
    </div>
);

const RightPanel: React.FC<RightPanelProps> = ({ mode, onMinimize, onMaximize, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [feedbackId, setFeedbackId] = useState<string | null>(null); // Message ID showing feedback form
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, feedbackId]);

  const generateAIResponse = (userMessage: string): MessageContent => {
      const lowerMsg = userMessage.toLowerCase();

      // Check for efficiency/metrics queries - return chart
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

      // Check for hours/overtime queries - return line chart with enhancements
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

      // Check for shift distribution - return pie chart
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

      // Check for specific driver data queries - return table
      if ((lowerMsg.includes('james') && lowerMsg.includes('joyce')) ||
          (lowerMsg.includes('driver') && (lowerMsg.includes('324099') || lowerMsg.includes('info') || lowerMsg.includes('details')))) {
          // Defensively check if MOCK_DRIVERS is an array and has at least one element
          if (!Array.isArray(MOCK_DRIVERS) || MOCK_DRIVERS.length === 0) {
              return {
                  type: 'text',
                  text: 'No driver data is currently available. Please add drivers to the system first.'
              };
          }
          
          const driver = MOCK_DRIVERS[0];
          // Additional safety check in case driver is undefined/null
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

      // Check for greetings
      if (lowerMsg.match(/^(hi|hello|hey|good morning|good afternoon|good evening)\b/)) {
          return { 
              type: 'text', 
              text: `Hello! 👋 I'm your Workforce Planning Assistant.

I can help you with:
• **Driver Management** - Adding, editing, and assigning drivers
• **Shift Scheduling** - Understanding shift types and patterns
• **Optimization** - Automatically improving your schedules
• **Reports** - Exporting data and generating reports
• **Troubleshooting** - Solving common issues

What would you like to know?` 
          };
      }

      // Check for thank you
      if (lowerMsg.match(/\b(thank|thanks|thx)\b/)) {
          return { 
              type: 'text', 
              text: `You're welcome! Feel free to ask if you have more questions about workforce planning or scheduling.` 
          };
      }

      // Use knowledge base for everything else - wrap in text type
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
    <div className={`flex w-full h-full bg-[#282e36] ${mode === 'panel' ? 'rounded-[8px] border border-[#464b59]' : ''} overflow-hidden`}>
        
        {/* History Sidebar (Fullscreen Only) */}
        {mode === 'fullscreen' && (
            <div className="w-[240px] bg-[#282e36] border-r border-[#464b59] flex flex-col shrink-0">
                <div className="p-4 border-b border-[#464b59]">
                    <button 
                        onClick={() => setMessages([])}
                        className="w-full h-[36px] bg-[#303745] hover:bg-[#3a4250] text-[#dfe1e5] rounded-[4px] flex items-center justify-center gap-2 text-[14px] font-bold transition-colors"
                    >
                        <div className="w-4 h-4"><Icons.WriteNew /></div>
                        New Chat
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-2">
                    <div className="text-[12px] text-[#bdc1c9] px-2 py-2 font-bold uppercase tracking-wider">Chat history</div>
                    {/* Mock History Items */}
                    <div className="h-[40px] flex items-center px-2 text-[14px] text-[#dfe1e5] hover:bg-[#303745] rounded-[8px] cursor-pointer truncate">
                        Adding deadhead catalog
                    </div>
                    <div className="h-[40px] flex items-center px-2 text-[14px] text-[#dfe1e5] hover:bg-[#303745] rounded-[8px] cursor-pointer truncate">
                        Optimization settings
                    </div>
                    <div className="h-[40px] flex items-center px-2 text-[14px] text-[#dfe1e5] hover:bg-[#303745] rounded-[8px] cursor-pointer truncate">
                        Driver seniority check
                    </div>
                </div>
            </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#282e36]">
            
            {/* Header */}
            <div className="h-[40px] border-b border-[#464b59] flex items-center justify-between px-3 shrink-0 drag-handle cursor-grab active:cursor-grabbing bg-[#282e36]">
                <div className="flex items-center gap-1">
                    {mode === 'fullscreen' && (
                        <div className="flex items-center gap-2 mr-2 text-[12px] text-[#bdc1c9]">
                            <span>Operations</span>
                            <span>/</span>
                            <span className="text-[#dfe1e5]">Weekly</span>
                        </div>
                    )}
                    <button onClick={onMaximize} className="p-1 rounded hover:bg-[#303745] text-[#dfe1e5] w-[20px] h-[20px] flex items-center justify-center transition-colors">
                        {mode === 'fullscreen' ? <Icons.Minimize /> : <Icons.Expand />}
                    </button>
                    <button className="p-1 rounded hover:bg-[#303745] text-[#dfe1e5] w-[20px] h-[20px] flex items-center justify-center transition-colors">
                        <Icons.Timer />
                    </button>
                    <button onClick={() => setMessages([])} className="p-1 rounded hover:bg-[#303745] text-[#dfe1e5] w-[20px] h-[20px] flex items-center justify-center transition-colors">
                        <Icons.WriteNew />
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="border border-[#adb1ba] rounded-[4px] px-1.5 py-[2px] text-[10px] font-bold text-[#adb1ba] uppercase tracking-wide">Beta</div>
                    <button onClick={onClose} className="p-1 rounded hover:bg-[#303745] text-[#dfe1e5] w-[20px] h-[20px] flex items-center justify-center transition-colors">
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
                                        <div className="bg-[#1a1e24] text-[#dfe1e5] text-[16px] p-4 rounded-tl-[16px] rounded-bl-[16px] rounded-tr-[4px] rounded-br-[16px] ml-6 max-w-[85%]">
                                            {msg.content.type === 'text' ? msg.content.text : 'Unsupported content type'}
                                        </div>
                                    ) : (
                                        /* Bot Message */
                                        <div className="flex gap-3 w-full max-w-[90%] min-w-0">
                                            <div className="w-6 h-6 shrink-0 text-[#2868fc] mt-1">
                                                <Icons.Sparkle />
                                            </div>
                                            <div className="flex-1 min-w-0 flex flex-col gap-2">
                                                <MessageRenderer content={msg.content} />
                                                
                                                {/* Action Buttons */}
                                                <div className="flex items-center gap-2 mt-1">
                                                    <button className="w-5 h-5 flex items-center justify-center rounded-[4px] hover:bg-[#303745] text-[#bdc1c9] transition-colors"><Icons.ThumbsUp /></button>
                                                    <button 
                                                        onClick={() => handleThumbDown(msg.id)}
                                                        className={`w-5 h-5 flex items-center justify-center rounded-[4px] hover:bg-[#303745] transition-colors ${feedbackId === msg.id ? 'text-[#f07e86]' : 'text-[#bdc1c9]'}`}
                                                    >
                                                        <Icons.ThumbsDown />
                                                    </button>
                                                    <button className="w-5 h-5 flex items-center justify-center rounded-[4px] hover:bg-[#303745] text-[#bdc1c9] transition-colors"><Icons.Copy /></button>
                                                </div>

                                                {/* Feedback Panel */}
                                                {feedbackId === msg.id && (
                                                    <div className="mt-2 bg-[#22272e] border border-[#464b59] rounded-[8px] p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                                                        <p className="text-[14px] text-[#dfe1e5] mb-2">What was the issue with the answer?</p>
                                                        <div className="flex flex-wrap gap-2 mb-3">
                                                            {["Incorrect answer", "Insulting", "Didn't follow instructions", "I don't like the answer"].map(chip => (
                                                                <button key={chip} className="h-[24px] px-3 bg-[#303745] hover:bg-[#3a4250] rounded-[4px] text-[12px] text-[#bdc1c9] transition-colors">
                                                                    {chip}
                                                                </button>
                                                            ))}
                                                        </div>
                                                        <p className="text-[12px] text-[#bdc1c9] mb-1">Something else?</p>
                                                        <input 
                                                            type="text" 
                                                            placeholder="Write it here" 
                                                            className="w-full bg-[#303745] border border-[#464b59] rounded-[4px] px-2 py-1 text-[14px] text-[#dfe1e5] focus:border-[#2868fc] outline-none"
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
                                    <div className="w-6 h-6 shrink-0 text-[#2868fc] mt-1"><Icons.Sparkle /></div>
                                    <div className="bg-[#303745] p-3 rounded-[12px] rounded-tl-[2px] flex gap-1">
                                        <div className="w-2 h-2 bg-[#bdc1c9] rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-[#bdc1c9] rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-[#bdc1c9] rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    )}
                </div>
            </div>

            {/* Input Footer */}
            <div className="p-4 bg-[#282e36] border-t border-transparent relative z-20 shrink-0">
                <div className={`mx-auto ${mode === 'fullscreen' ? 'max-w-[800px]' : ''}`}>
                    <div className="bg-[#22272e] border border-[#464b59] rounded-[16px] p-4 flex flex-col gap-2 relative focus-within:ring-1 focus-within:ring-[#464b59] transition-shadow shadow-lg">
                        <textarea 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(inputValue); } }}
                            placeholder="Ask anything" 
                            className="w-full bg-transparent border-none outline-none text-[#dfe1e5] placeholder-[#bdc1c9] text-[16px] italic resize-none min-h-[24px] max-h-[100px] custom-scrollbar"
                            rows={1}
                        />
                        <div className="flex justify-end">
                            <button 
                                onClick={() => handleSendMessage(inputValue)}
                                disabled={!inputValue.trim()}
                                className={`
                                    w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors
                                    ${inputValue.trim() ? 'bg-[#2868fc] text-white hover:bg-[#1e54d6]' : 'bg-[#35393f] text-[#808080] cursor-not-allowed'}
                                `}
                            >
                                <div className="w-[18px] h-[18px]"><Icons.Send /></div>
                            </button>
                        </div>
                    </div>
                    <p className="text-[12px] text-[#bdc1c9] text-center mt-2">
                        Optibus assistant is powered by AI, so your review is essential to ensure accuracy
                    </p>
                </div>
                
                {/* Resize Handle (Panel Mode Only) */}
                {mode === 'panel' && (
                    <div className="absolute bottom-1 left-1 w-4 h-4 text-[#bdc1c9] opacity-50 pointer-events-none">
                        <Icons.ResizeHandle />
                    </div>
                )}
            </div>

        </div>
    </div>
  );
};

export default RightPanel;
