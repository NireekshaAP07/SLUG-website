
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gamepad2, Play } from 'lucide-react';

export default function GamingArena() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fossGames = [
    {
      name: 'SuperTuxKart',
      description: 'A fun and exciting kart racing game featuring Tux and friends.',
      icon: '🏎️',
      color: 'teal',
    },
    {
      name: '0 A.D.',
      description: 'Free, open-source game of ancient warfare and civilization building.',
      icon: '⚔️',
      color: 'yellow',
    },
    {
      name: 'Minetest',
      description: 'An open-source voxel game engine with gameplay similar to Minecraft.',
      icon: '🧱',
      color: 'teal',
    },
    {
      name: 'Battle for Wesnoth',
      description: 'Turn-based strategy game with a fantasy theme.',
      icon: '🛡️',
      color: 'yellow',
    },
  ];

  return (
    <section
      id="games"
      ref={ref}
      className="py-32 px-6 bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32">
          <Gamepad2 className="w-full h-full text-teal-600" />
        </div>
        <div className="absolute bottom-10 right-10 w-32 h-32">
          <Gamepad2 className="w-full h-full text-yellow-600" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Gaming Arena</h2>
          <p className="text-xl text-gray-600 mb-2">
            Take a break. Play something.
          </p>
          <div className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mt-4">
            FOSS GAMES
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fossGames.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 40, rotate: -5 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotate: 0 }
                  : { opacity: 0, y: 40, rotate: -5 }
              }
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                rotate: index % 2 === 0 ? 2 : -2,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className={`group relative bg-gradient-to-br ${
                game.color === 'teal'
                  ? 'from-teal-50 to-white'
                  : 'from-yellow-50 to-white'
              } rounded-3xl p-8 border-2 ${
                game.color === 'teal' ? 'border-teal-100' : 'border-yellow-100'
              } hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              data-cursor="play"
            >
              {/* Game Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl mb-6 text-center"
              >
                {game.icon}
              </motion.div>

              {/* Game Info */}
              <h3
                className={`text-xl font-bold mb-3 text-center ${
                  game.color === 'teal' ? 'text-teal-900' : 'text-yellow-900'
                }`}
              >
                {game.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
                {game.description}
              </p>

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full font-medium flex items-center justify-center gap-2 ${
                  game.color === 'teal'
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-yellow-600 text-white hover:bg-yellow-700'
                } transition-colors group-hover:gap-3`}
              >
                <Play className="w-4 h-4" />
                <span>Play Now</span>
              </motion.button>

              {/* Decorative element */}
              <div
                className={`absolute -top-2 -right-2 w-12 h-12 rounded-full ${
                  game.color === 'teal' ? 'bg-teal-200' : 'bg-yellow-200'
                } opacity-0 group-hover:opacity-50 transition-opacity blur-xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            All games featured here are Free and Open Source Software (FOSS).
            They're completely free to play, modify, and share. Explore the world
            of open-source gaming!
          </p>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
