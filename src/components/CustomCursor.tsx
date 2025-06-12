import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-hover')) {
        setIsHovering(true);
        setCursorVariant('hover');
      } else if (target.classList.contains('cursor-text')) {
        setIsHovering(true);
        setCursorVariant('text');
      } else if (target.classList.contains('cursor-view')) {
        setIsHovering(true);
        setCursorVariant('view');
      } else {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      scale: 1,
      backgroundColor: '#D4958A',
      mixBlendMode: 'difference' as const,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
      backgroundColor: 'transparent',
      border: '2px solid #C9A876',
      mixBlendMode: 'normal' as const,
    },
    text: {
      x: mousePosition.x - 1,
      y: mousePosition.y - 12,
      scale: 1,
      width: '2px',
      height: '24px',
      backgroundColor: '#1A1A1A',
      borderRadius: '1px',
      mixBlendMode: 'normal' as const,
    },
    view: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      scale: 1.2,
      backgroundColor: 'rgba(212, 149, 138, 0.1)',
      border: '1px solid #D4958A',
      mixBlendMode: 'normal' as const,
    }
  };

  const outerCursorVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      opacity: 0.3,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      scale: 1.2,
      opacity: 0.6,
    },
    clicking: {
      scale: 0.8,
      opacity: 0.8,
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50"
        animate={cursorVariants[cursorVariant as keyof typeof cursorVariants]}
        transition={{ 
          type: 'spring', 
          stiffness: 500, 
          damping: 28,
          mass: 0.5
        }}
        style={{
          backgroundColor: cursorVariant === 'hover' ? 'transparent' : '#D4958A',
          border: cursorVariant === 'hover' ? '2px solid #C9A876' : 'none',
          mixBlendMode: cursorVariant === 'default' ? 'difference' : 'normal',
        }}
      />
      
      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-warm-gold/30 rounded-full pointer-events-none z-40"
        animate={{
          ...outerCursorVariants[isClicking ? 'clicking' : isHovering ? 'hover' : 'default'],
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 30,
          mass: 0.8
        }}
      />

      {/* Cursor text for hover states */}
      {cursorVariant === 'view' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 text-xs font-inter font-medium text-charcoal bg-pearl px-2 py-1 rounded-full shadow-luxury"
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y - 10,
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          View
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;