import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (window.getComputedStyle(target).cursor === 'pointer' || target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    const handleClick = (e: MouseEvent) => {
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev, newClick]);
      // Remove ripple after animation completes
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 600);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center mix-blend-multiply"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
        style={{ width: 32, height: 32 }}
      >
        {/* Crosshair lines */}
        <div className={`absolute transition-colors duration-300 ${isHovering ? 'bg-klein' : 'bg-ink'}`} style={{ width: 1, height: '100%' }} />
        <div className={`absolute transition-colors duration-300 ${isHovering ? 'bg-klein' : 'bg-ink'}`} style={{ width: '100%', height: 1 }} />
      </motion.div>

      {/* Ripple Effects */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed pointer-events-none z-40 rounded-full border border-ink/50"
            style={{
              left: click.x - 20,
              top: click.y - 20,
              width: 40,
              height: 40,
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
