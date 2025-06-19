import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

interface NeuFollowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NeuFollowButton: React.FC<NeuFollowButtonProps> = ({ 
  children, 
  onClick,
  className = ""
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, SPRING_OPTIONS);
  const ySpring = useSpring(y, SPRING_OPTIONS);

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const { height, width } = ref.current.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    const xPct = offsetX / width;
    const yPct = 1 - offsetY / height;

    const newY = 8 + yPct * 8;
    const newX = 10 + xPct * 10;

    x.set(newX);
    y.set(-newY);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`h-16 w-full max-w-72 bg-black ${className}`}>
      <motion.button
        ref={ref}
        style={{
          transform,
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleReset}
        onMouseDown={handleReset}
        onClick={onClick}
        className="group flex h-full w-full items-center justify-between text-black border-2 border-[#32E01F] hover:border-[#F5F000] bg-[#32E01F] hover:bg-[#F5F000] px-8 text-xl font-semibold"
      >
        <Copy>{children}</Copy>
        <Arrow />
      </motion.button>
    </div>
  );
};

const Copy: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="relative overflow-hidden pr-1">
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
};

const Arrow = () => (
  <div className="pointer-events-none flex h-6 w-6 overflow-hidden text-2xl">
    <FiArrowRight className="shrink-0 -translate-x-full text-black transition-transform duration-300 group-hover:translate-x-0" />
    <FiArrowRight className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
  </div>
);

export default NeuFollowButton; 