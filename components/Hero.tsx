
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Keep the illustration's movement pleasantly subtle, even on large screens.
  const laptopOffset = Math.max(-16, Math.min(16, mousePosition.x * 0.04));
  const laptopTilt = Math.max(-4, Math.min(4, mousePosition.x * 0.01));
  // The card dips slightly at either end of its travel to create a pendulum arc.
  const laptopArcY = (Math.abs(laptopOffset) / 16) ** 2 * 7;
  const eyeOffsetX = laptopOffset * 0.25;
  const eyeOffsetY = Math.max(-3, Math.min(3, mousePosition.y * 0.01));

  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20"
    >
      {/* Background Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        {/* Teal dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
            className="absolute w-2 h-2 rounded-full bg-teal-600"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Yellow accent circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute w-64 h-64 rounded-full bg-yellow-200 -top-32 -right-32 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute w-96 h-96 rounded-full bg-teal-200 -bottom-48 -left-48 blur-3xl"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div>
          {/* SLUG Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-12"
          >
            <img
              src="public/SLUGLOGO.svg"
              alt="SLUG Logo"
              className="w-80 h-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            Learn Open. Build Open. Grow Together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
          >
            A student-led Linux and open-source community where students learn,
            collaborate, build projects and participate in technology events.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, type: 'spring', stiffness: 100 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToEvents}
              className="px-8 py-3.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 hover:-translate-y-1 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Explore SLUG →
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 bg-white text-gray-900 rounded-full border border-gray-300 hover:border-teal-600 hover:text-teal-600 hover:-translate-y-1 transition-all duration-200"
            >
              Join the Community
            </button>
          </motion.div>
        </div>

        {/* Right: Penguin and Laptop Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
          className="relative h-[500px] hidden lg:block"
        >
          {/* Laptop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: laptopOffset,
              y: laptopArcY,
              rotate: laptopTilt,
            }}
            transition={{
              opacity: { delay: 1, duration: 0.6 },
              scale: { delay: 1, duration: 0.6 },
              x: { type: 'spring', stiffness: 120, damping: 18 },
              y: { type: 'spring', stiffness: 120, damping: 18 },
              rotate: { type: 'spring', stiffness: 120, damping: 18 },
            }}
            style={{ transformOrigin: '50% 0%' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-gray-800 rounded-2xl shadow-2xl p-4 hover:scale-105 transition-transform duration-300"
            data-cursor="view"
          >
            <div className="w-full h-full bg-gray-900 rounded-lg p-4 overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2 font-mono text-xs">
                <div className="text-green-400">$ slug --version</div>
                <div className="text-gray-400">SLUG v2.0.0</div>
                <div className="text-green-400">$ ./community.sh</div>
                <div className="text-teal-400">Starting Linux User Group...</div>
                <div className="text-gray-400">✓ Loading events</div>
                <div className="text-gray-400">✓ Connecting members</div>
                <div className="text-yellow-400">Welcome to SLUG! 🐧</div>
              </div>
            </div>
          </motion.div>

          {/* Penguin */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6, type: 'spring' }}
            className="absolute top-1/4 -right-12 w-48 h-48 z-20"
          >
            <svg
              viewBox="0 0 200 240"
              className="w-full h-full drop-shadow-xl"
            >
              {/* Penguin Body */}
              <ellipse cx="100" cy="140" rx="60" ry="80" fill="#1a1a1a" />
              <ellipse cx="100" cy="140" rx="40" ry="60" fill="white" />
              
              {/* Head */}
              <circle cx="100" cy="60" r="45" fill="#1a1a1a" />
              
              {/* Eyes with cursor tracking */}
              <g>
                <circle cx="85" cy="55" r="12" fill="white" />
                <motion.circle
                  cx="85"
                  cy="55"
                  r="6"
                  fill="#1a1a1a"
                  animate={{
                    cx: 85 + eyeOffsetX,
                    cy: 55 + eyeOffsetY,
                  }}
                  transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                />
              </g>
              <g>
                <circle cx="115" cy="55" r="12" fill="white" />
                <motion.circle
                  cx="115"
                  cy="55"
                  r="6"
                  fill="#1a1a1a"
                  animate={{
                    cx: 115 + eyeOffsetX,
                    cy: 55 + eyeOffsetY,
                  }}
                  transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                />
              </g>
              
              {/* Beak */}
              <ellipse cx="100" cy="70" rx="8" ry="6" fill="#ff9800" />
              
              {/* Wings */}
              <ellipse
                cx="50"
                cy="140"
                rx="20"
                ry="50"
                fill="#1a1a1a"
                transform="rotate(-20 50 140)"
              />
              <ellipse
                cx="150"
                cy="140"
                rx="20"
                ry="50"
                fill="#1a1a1a"
                transform="rotate(20 150 140)"
              />
              
              {/* Feet */}
              <ellipse cx="85" cy="215" rx="18" ry="10" fill="#ff9800" />
              <ellipse cx="115" cy="215" rx="18" ry="10" fill="#ff9800" />
            </svg>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gray-400" />
        </div>
      </motion.div>
    </div>
  );
}
