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
      name: '0 A.D.',      description: 'Free, open-source game of ancient warfare and civilization building.',
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
      className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:py-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-10 top-10 h-32 w-32">
          <Gamepad2 className="h-full w-full text-teal-600" />
        </div>
        <div className="absolute bottom-10 right-10 h-32 w-32">
          <Gamepad2 className="h-full w-full text-yellow-600" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-5xl">Gaming Arena</h2>
          <p className="mb-2 text-base text-gray-600 sm:text-xl">
            Take a break. Play something.
          </p>
          <div className="mt-4 inline-block rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
            FOSS GAMES
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              className={`group relative rounded-3xl border-2 p-6 sm:p-8 ${
                game.color === 'teal'
                  ? 'border-teal-100 bg-gradient-to-br from-teal-50 to-white'
                  : 'border-yellow-100 bg-gradient-to-br from-yellow-50 to-white'
              } transition-all duration-300 hover:shadow-2xl`}
              data-cursor="play"
            >
              {/* Game Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 text-center text-5xl sm:text-6xl"
              >
                {game.icon}
              </motion.div>

              {/* Game Info */}
              <h3
                className={`mb-3 text-center text-xl font-bold ${
                  game.color === 'teal' ? 'text-teal-900' : 'text-yellow-900'
                }`}
              >
                {game.name}
              </h3>
              <p className="mb-6 text-center text-sm leading-relaxed text-gray-600">
                {game.description}
              </p>

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex w-full items-center justify-center gap-2 rounded-full py-3 font-medium transition-colors ${
                  game.color === 'teal'
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-yellow-600 text-white hover:bg-yellow-700'
                } group-hover:gap-3`}
              >
                <Play className="h-4 w-4" />
                <span>Play Now</span>
              </motion.button>

              {/* Decorative element */}
              <div
                className={`absolute -right-2 -top-2 h-12 w-12 rounded-full ${
                  game.color === 'teal' ? 'bg-teal-200' : 'bg-yellow-200'
                } opacity-0 blur-xl transition-opacity group-hover:opacity-50`}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center sm:mt-16"
        >
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
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
