
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WorkforcePlanner from './components/WorkforcePlanner';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="min-h-screen font-sans overflow-hidden" style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}>
          <WorkforcePlanner />
        </div>
      </DndProvider>
    </ThemeProvider>
  );
};

export default App;
