import React from 'react';
import { motion } from 'framer-motion';

interface StarburstProps {
  size?: number;
  color?: string;
  className?: string;
  points?: number;
}

export const Starburst: React.FC<StarburstProps> = ({ 
  size = 180, 
  color = "#e8a179", 
  className = "", 
  points = 16 
}) => {
  const starPoints = Array.from({ length: points * 2 }, (_, i) => {
    const angle = (i * Math.PI) / points;
    const radius = size / 2;
    const pointRadius = i % 2 === 0 ? radius : radius * 0.55;
    const x = radius + pointRadius * Math.cos(angle);
    const y = radius + pointRadius * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full"
      >
        <polygon
          points={starPoints}
          fill={color}
          stroke="#000000"
          strokeWidth={size / 100}
          strokeLinejoin="miter"
          strokeMiterlimit="2"
        />
      </svg>
    </motion.div>
  );
};