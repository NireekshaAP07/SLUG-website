
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('[data-cursor="view"]')) {
        setCursorVariant('view');
        setCursorText('VIEW');
      } else if (target.closest('[data-cursor="play"]')) {
        setCursorVariant('play');
        setCursorText('PLAY');
      } else if (target.closest('a, button, [role="button"]')) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'rgba(20, 184, 166, 0.5)',
    },
    hover: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(20, 184, 166, 0.2)',
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(20, 184, 166, 0.1)',
    },
    play: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(20, 184, 166, 0.1)',
    },
  };

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        className="absolute rounded-full flex items-center justify-center"
        animate={cursorVariant}
        variants={variants}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          x: '-50%',
          y: '-50%',
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-semibold text-teal-600">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
