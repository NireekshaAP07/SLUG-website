import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function FOSSFacts() {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const facts = [
    {
      number: '01',
      title: 'Linux Powers 96.3% of the World\'s Top 1 Million Servers',
      description:
        'From Google to Facebook, the world\'s biggest tech companies rely on Linux for their infrastructure. Its stability, security, and flexibility make it the foundation of modern web services.',
      accent: 'teal',
    },
    {
      number: '02',
      title: 'Over 15,600 Developers Contributed to Linux Kernel 5.0',
      description:
        'The Linux kernel is one of the largest collaborative software projects in human history. Developers from around the world contribute code, making it a true testament to open-source collaboration.',
      accent: 'yellow',
    },
    {
      number: '03',
      title: 'Android is Built on the Linux Kernel',
      description:
        'With over 3 billion active devices, Android runs on Linux. This means Linux touches more lives daily than any other operating system, powering smartphones and tablets worldwide.',
      accent: 'teal',
    },
    {
      number: '04',
      title: 'NASA Uses Linux for Space Missions',
      description:
        'The International Space Station runs on Linux. NASA chose it for its reliability and the ability to customize it for critical space operations. If it\'s good enough for space, it\'s good enough for us!',
      accent: 'yellow',
    },
  ];

  return (
    <section
      id="foss"
      ref={ref}
      className="relative overflow-hidden bg-gray-50 py-20 px-4 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-20"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-5xl">
            Interesting facts about FOSS
          </h2>
          <p className="text-base text-gray-600 sm:text-xl">
            Discover the impact of Free and Open Source Software
          </p>
        </motion.div>

        <div ref={containerRef} className="space-y-12 sm:space-y-20 lg:space-y-32">
          {facts.map((fact, index) => (
            <FactCard
              key={fact.number}
              fact={fact}
              index={index}
              scrollProgress={scrollYProgress}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20 -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-20 translate-x-1/2" />
    </section>
  );
}

interface FactCardProps {
  fact: {
    number: string;
    title: string;
    description: string;
    accent: string;
  };
  index: number;
  scrollProgress: any;
  isInView: boolean;
}

function FactCard({ fact, index, scrollProgress, isInView }: FactCardProps) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: '-100px' });

  // Parallax effect based on scroll
  const y = useTransform(
    scrollProgress,
    [0, 1],
    [index % 2 === 0 ? 50 : -50, index % 2 === 0 ? -50 : 50]
  );

  const accentColors = {
    teal: {
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      border: 'border-teal-200',
      number: 'text-teal-600',
    },
    yellow: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
      border: 'border-yellow-200',
      number: 'text-yellow-600',
    },
  };

  const colors = accentColors[fact.accent as keyof typeof accentColors];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ y }}
      className="relative"
    >
      <div className={`grid gap-4 lg:grid-cols-12 lg:gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
        {/* Number */}
        <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-11' : ''}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-5xl font-bold opacity-20 sm:text-7xl lg:text-8xl ${colors.number}`}
          >
            {fact.number}
          </motion.div>
        </div>

        {/* Content */}
        <div className={`lg:col-span-10 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${colors.bg} ${colors.border} rounded-3xl border-2 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8 lg:p-12`}
          >
            <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              {fact.title}
            </h3>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              {fact.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
