
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import LeftPanel from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';
import ProfilePage from './ProfilePage';
import { Icons } from './figma/Icons';

const WorkforcePlanner = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [view, setView] = useState<'planner' | 'profile'>('planner');
  const [assistantMode, setAssistantMode] = useState<'panel' | 'fullscreen' | 'minimized'>('panel');
  
  // Panel State
  const [panelPosition, setPanelPosition] = useState({ x: 0, y: 0 });
  const [panelSize, setPanelSize] = useState({ width: 400, height: 700 });
  
  const nodeRef = useRef(null); // For Draggable strict mode

  // Toggle Minimize/Restore
  const toggleMinimize = () => {
      if (assistantMode === 'minimized') {
          setAssistantMode('panel');
      } else {
          setAssistantMode('minimized');
      }
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
      if (assistantMode === 'fullscreen') {
          setAssistantMode('panel');
      } else {
          setAssistantMode('fullscreen');
      }
  };

  const handleClose = () => {
      setIsChatOpen(false);
  };

  if (!isChatOpen) return (
      <div className="flex h-screen w-full overflow-hidden relative" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <div className="flex-1 flex flex-col min-w-0 relative">
             {view === 'planner' ? (
                 <LeftPanel
                    isChatOpen={false}
                    onProfileClick={() => setView('profile')}
                    onAiClick={() => { setIsChatOpen(true); setAssistantMode('panel'); }}
                 />
             ) : (
                 <ProfilePage onBack={() => setView('planner')} />
             )}
        </div>
        {/* Re-open button if closed completely - Optional, but useful */}
        <div className="absolute bottom-6 right-6 z-50">
             <button
                onClick={() => { setIsChatOpen(true); setAssistantMode('panel'); }}
                className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--accent-blue)' }}
             >
                <div className="w-6 h-6"><Icons.Sparkle /></div>
             </button>
        </div>
      </div>
  );

  return (
    <div className="flex h-screen w-full overflow-hidden relative" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative z-0">
         {view === 'planner' ? (
             <LeftPanel 
                isChatOpen={isChatOpen} 
                onProfileClick={() => setView('profile')}
                onAiClick={() => { setIsChatOpen(true); setAssistantMode('panel'); }}
             />
         ) : (
             <ProfilePage onBack={() => setView('planner')} />
         )}
      </div>

      {/* AI Assistant Layer */}
      {/* Minimized Mode (FAB) */}
      {assistantMode === 'minimized' && (
          <div className="absolute bottom-6 right-6 z-50">
              <button 
                  onClick={toggleMinimize}
                  className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform group" style={{ backgroundColor: 'var(--accent-blue)' }}
                  title="Open Assistant"
              >
                  <div className="w-6 h-6"><Icons.Sparkle /></div>
              </button>
          </div>
      )}

      {/* Panel Mode (Floating) */}
      {assistantMode === 'panel' && (
          <Draggable
             nodeRef={nodeRef}
             handle=".drag-handle"
             defaultPosition={{x: 0, y: 0}}
             position={panelPosition}
             onStop={(e, data) => setPanelPosition({ x: data.x, y: data.y })}
             bounds="parent"
          >
              <div 
                ref={nodeRef}
                className="absolute top-20 right-20 z-40 shadow-2xl"
                style={{ width: 'auto', height: 'auto' }} // Wrapper sizing
              >
                  <Resizable
                      size={{ width: panelSize.width, height: panelSize.height }}
                      onResizeStop={(e, direction, ref, d) => {
                          setPanelSize({
                              width: panelSize.width + d.width,
                              height: panelSize.height + d.height,
                          });
                      }}
                      minWidth={400}
                      minHeight={500}
                      enable={{ 
                          top:false, right:false, bottom:false, left:false, 
                          topRight:false, bottomRight:false, bottomLeft:true, topLeft:false 
                      }}
                      handleStyles={{
                          bottomLeft: { width: '20px', height: '20px', left: 0, bottom: 0, cursor: 'sw-resize', zIndex: 50 }
                      }}
                  >
                      <RightPanel 
                          mode="panel"
                          onMinimize={toggleMinimize}
                          onMaximize={toggleFullscreen}
                          onClose={handleClose}
                      />
                  </Resizable>
              </div>
          </Draggable>
      )}

      {/* Full Screen Mode */}
      {assistantMode === 'fullscreen' && (
          <div className="absolute inset-0 z-50 backdrop-blur-[2px] flex items-center justify-center p-8" style={{ backgroundColor: 'var(--overlay-bg)' }}>
              <div className="w-full max-w-[1200px] h-[90vh] flex shadow-2xl rounded-[8px] overflow-hidden">
                  <RightPanel 
                      mode="fullscreen"
                      onMinimize={toggleMinimize} // Logic might be different here (exit fullscreen?)
                      onMaximize={toggleFullscreen} // Toggle back to panel
                      onClose={handleClose}
                  />
              </div>
          </div>
      )}
    </div>
  );
};

export default WorkforcePlanner;
