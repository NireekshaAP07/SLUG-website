import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const collaborators = [
  {
    name: 'Ubuntu India',
    description: 'India community for Ubuntu users and contributors.',
    image: '/ubuntu-india.svg',
    imageClassName: 'bg-orange-50',
  },
  {
    name: 'FSMK',
    description: 'Free Software Movement Karnataka.',
    image: '/fsmk.svg',
    imageClassName: 'bg-teal-50',
  },
];

export default function Collaborators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="collaborators" ref={ref} className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 sm:text-sm">Together in open source</p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Our collaborators</h2>
          <p className="text-base text-gray-600 sm:text-lg">Communities that help us learn, build, and share freely.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {collaborators.map((collaborator, index) => (
            <motion.article
              key={collaborator.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
              className="group flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:border-teal-300 hover:bg-white hover:shadow-xl sm:flex-row sm:items-center sm:gap-6 sm:p-7"
            >
              <div className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl sm:h-24 sm:w-24 ${collaborator.imageClassName}`}>
                <img src={collaborator.image} alt={`${collaborator.name} logo`} className="h-full w-full object-contain" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-teal-700">{collaborator.name}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{collaborator.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="absolute -z-0 bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-orange-100 opacity-30 blur-3xl" />
    </section>
  );
}
