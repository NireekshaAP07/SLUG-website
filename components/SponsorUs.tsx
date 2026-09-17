import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useRef } from 'react';

const sponsorEmail = 'info@snpsu.edu.in';

export default function SponsorUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sponsor" ref={ref} className="py-24 px-6 bg-teal-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto relative grid lg:grid-cols-[1fr_auto] gap-10 items-center"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-100 mb-4">Support student innovation</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Sponsor us</h2>
          <p className="text-lg text-teal-50 max-w-2xl mt-5 leading-relaxed">
            Help us create more workshops, hackathons, and open-source learning opportunities for students.
          </p>
        </div>

        <a
          href={`mailto:${sponsorEmail}`}
          className="group inline-flex items-center gap-4 px-6 py-5 bg-white text-teal-800 rounded-2xl font-semibold shadow-xl hover:bg-yellow-100 hover:-translate-y-1 transition-all duration-300"
        >
          <span className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
            <Mail className="w-5 h-5" />
          </span>
          <span>
            <span className="block text-xs uppercase tracking-wider text-teal-600 mb-1">Email us</span>
            {sponsorEmail}
          </span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
