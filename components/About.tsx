import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tags = [
    'Student Led',
    'Open Source',
    'Community Driven',
    'Learning Focused',
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
    >
      {/* Background decorative lines */}
      <div className="absolute -right-8 top-12 hidden h-48 w-48 opacity-5 sm:block sm:h-64 sm:w-64 lg:right-0 lg:top-20">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path
            d="M 0 100 Q 50 50 100 100 T 200 100"
            stroke="#14b8a6"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M 0 120 Q 50 70 100 120 T 200 120"
            stroke="#14b8a6"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Left Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 text-base font-semibold uppercase tracking-wider text-teal-600 sm:text-xl">
              Who We Are
            </div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              A student-led community built around Linux and open source.
            </h2>
          </motion.div>
        </div>

        {/* Right Column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            More Than a Club, It&apos;s a Community. SLUG (Sapthagiri Libre-Software
            Users Group) is a vibrant, student-led, non-profit technology
            community dedicated to fostering a culture of learning,
            collaboration, and innovation around Linux and open-source software.
            We bring together students who are passionate about technology,
            providing them with hands-on experiences, workshops, hackathons, and
            community events that help them grow as technologists and
            collaborators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-xs font-medium text-teal-700 sm:px-6 sm:py-2.5 sm:text-sm"
              >
                {tag}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-yellow-200 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
      />
    </section>
  );
}
