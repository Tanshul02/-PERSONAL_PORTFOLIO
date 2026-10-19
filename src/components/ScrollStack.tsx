import React from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  index: number;
  totalItems?: number;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  index,
  totalItems = 3,
  itemClassName = '',
}) => {
  // Sticky position with 120px base top and staggered offset
  const topOffset = 120 + index * 20;
  const zIndex = 10 + index;
  // Subtle base scale based on index to create depth
  const scale = 1 - (totalItems - 1 - index) * 0.015;

  return (
    <div
      className={`scroll-stack-card ${itemClassName}`.trim()}
      style={{
        top: `${topOffset}px`,
        zIndex,
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
};

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`scroll-stack-container ${className}`.trim()}>
      <div className="w-full pb-20">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
