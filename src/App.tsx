
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WorkforcePlanner from './components/WorkforcePlanner';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#1e1e1e] text-[#dfe1e5] font-sans overflow-hidden">
        <WorkforcePlanner />
      </div>
    </DndProvider>
  );
};

export default App;
