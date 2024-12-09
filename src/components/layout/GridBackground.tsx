import React from 'react';

interface GridBackgroundProps {
  children?: React.ReactNode;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#FFCFB0] overflow-x-hidden">
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};