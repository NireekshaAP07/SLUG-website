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
      className="py-32 px-6 bg-white relative overflow-hidden"
    >
      {/* Background decorative lines */}
      <div className="absolute top-20 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
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

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl uppercase tracking-wider text-teal-600 font-semibold mb-4">
              Who We Are
            </div>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
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
            className="text-lg text-gray-600 leading-relaxed mb-8"
          >
            More Than a Club Its a Community. 
            SLUG ( Sapthagiri Libre-Software Users Group) is a vibrant, student-led,
            non-profit technology community dedicated to fostering a culture of
            learning, collaboration, and innovation around Linux and open-source
            software. We bring together students who are passionate about
            technology, providing them with hands-on experiences, workshops,
            hackathons, and community events that help them grow as technologists
            and collaborators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="px-6 py-2.5 bg-teal-50 text-teal-700 rounded-full border border-teal-100 text-sm font-medium"
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
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-yellow-200 -translate-x-1/2 translate-y-1/2 blur-3xl"
      />
    </section>
  );
}
