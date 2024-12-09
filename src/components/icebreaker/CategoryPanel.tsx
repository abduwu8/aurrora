import React from 'react';
import { motion } from 'framer-motion';
import { CategoryButton } from './CategoryButton';
import { CategoryPanelProps } from '../../types/icebreaker';
import { X } from 'lucide-react';

export const CategoryPanel: React.FC<CategoryPanelProps> = ({
  selectedCategory,
  onCategorySelect,
  categories
}) => (
  <motion.div 
    className="w-full lg:w-[350px] h-[400px] sm:h-[500px] bg-[#120904] flex flex-col items-center justify-center p-4 relative mt-4 lg:mt-0"
    animate={{
      y: [0, 10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
  >
    <div className="absolute top-0 right-0 left-0 h-[20px] bg-[#e8a179]" />
    
    <div className="flex flex-col space-y-2 w-full px-4">
      {Object.keys(categories).map((category) => (
        <CategoryButton
          key={category}
          category={category}
          isSelected={selectedCategory === category}
          onClick={() => onCategorySelect(category)}
        />
      ))}
      <div className="absolute top-0 right-0 left-0 w-full h-[20px] bg-[#e8a179] flex items-center justify-end px-2">
        <X size={18} className="cursor-pointer hover:text-[#120904] transition-colors" />
      </div>
    </div>
  </motion.div>
);