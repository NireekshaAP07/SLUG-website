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
    <section id="collaborators" ref={ref} className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 mb-4">Together in open source</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our collaborators</h2>
          <p className="text-lg text-gray-600">Communities that help us learn, build, and share freely.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {collaborators.map((collaborator, index) => (
            <motion.article
              key={collaborator.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
              className="group flex items-center gap-6 p-7 bg-gray-50 border border-gray-200 rounded-3xl hover:bg-white hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-24 h-24 shrink-0 rounded-2xl flex items-center justify-center overflow-hidden ${collaborator.imageClassName}`}>
                <img src={collaborator.image} alt={`${collaborator.name} logo`} className="w-20 h-20 object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">{collaborator.name}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">{collaborator.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="absolute -z-0 right-0 bottom-0 w-72 h-72 rounded-full bg-orange-100 opacity-30 blur-3xl translate-x-1/3 translate-y-1/3" />
    </section>
  );
}
