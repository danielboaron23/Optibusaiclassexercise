
import React from 'react';
import TopBar from './TopBar';
import ActionToolbar from './ActionToolbar';
import ScheduleGrid from './Grid/ScheduleGrid';
import BottomDrawer from './BottomDrawer';
import Sidebar from '../Sidebar';

interface LeftPanelProps {
    isChatOpen: boolean;
    onProfileClick?: () => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ isChatOpen, onProfileClick }) => {
  return (
    <div className="flex flex-col h-full w-full relative bg-[#282e36]">
        {/* Top Header */}
        <div className="flex-shrink-0 z-50">
            <TopBar onProfileClick={onProfileClick} />
        </div>
        
        {/* Main Content Area with Sidebar */}
        <div className="flex-1 flex overflow-hidden">
             <Sidebar />
             
             {/* Grid Area */}
             <div className="flex-1 flex flex-col relative min-w-0">
                 <ActionToolbar />
                 
                 <div className="flex-1 overflow-hidden relative flex flex-col">
                    <ScheduleGrid />
                    <BottomDrawer />
                 </div>
             </div>
        </div>
    </div>
  );
};

export default LeftPanel;
