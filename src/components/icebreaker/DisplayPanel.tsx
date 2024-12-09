import React from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { DisplayPanelProps } from '../../types/icebreaker';

export const DisplayPanel: React.FC<DisplayPanelProps> = ({
  icebreaker,
  error,
  loading,
  onGenerate
}) => (
  <motion.div 
    className="w-full lg:w-[800px] h-[400px] sm:h-[500px] lg:h-[600px] bg-[#120904] flex flex-col items-center justify-center p-4 relative"
    animate={{
      y: [0, 10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
  >
    <div className="absolute top-0 right-0 left-0 w-full h-[20px] bg-[#e8a179] flex items-center px-4">
      <p className="text-xs sm:text-sm text-center w-full" style={{ fontFamily: 'Fh Total' }}>
        click on the spark button to generate response
      </p>
      
    </div>

    <div 
      onClick={onGenerate}
      className="cursor-pointer mb-4 hover:scale-110 transition-transform"
    >
      <Sparkles 
        size={32} 
        color="#e8a179" 
        className={`${loading ? 'animate-pulse' : ''}`}
      />
    </div>

    {error && <p className="text-red-500 text-center text-sm sm:text-base">{error}</p>}
    <div className="w-11/12 sm:w-3/4 max-h-[150px] sm:max-h-[200px] overflow-auto">
      <p 
        className="text-[#e8a179] text-center text-2xl sm:text-3xl lg:text-4xl break-words" 
        style={{ fontFamily: 'Fh Total' }}
      >
        {icebreaker}
      </p>
    </div>
  </motion.div>
);