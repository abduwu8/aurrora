import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export const CreditsScreen: React.FC = () => {
  const handleRedirect = () => {
    window.location.href = "https://www.linkedin.com/in/abdullahkhannn/";
  };

  return (
    <motion.div 
      className="fixed bottom-4 hidden lg:flex right-4 sm:bottom-8 sm:right-8 h-[100px] w-[300px] bg-[#120904] flex flex-col items-center justify-center"
      animate={{
        y: [0, 10, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        },
      }}
    > 
      <p className="text-[#e8a179] text-center text-lg sm:text-xl" style={{ fontFamily: 'Fh Total' }}>
        crafted by{" "}
        <span
          className="cursor-pointer hover:text-white underline transition-colors"
          onClick={handleRedirect}
        >
          abdullah
        </span>
      </p>
      <div className="absolute top-0 right-0 left-0 w-full h-[20px] bg-[#e8a179] flex items-center justify-end px-2">
        <X size={16} className="cursor-pointer hover:text-[#120904] transition-colors" />
      </div>
    </motion.div>
  );
};