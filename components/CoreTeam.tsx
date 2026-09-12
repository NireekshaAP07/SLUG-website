
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';


// Custom social icons as SVG components
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

function ImageWithFallback(props: any) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => setDidError(true)}
    />
  );
}

export default function CoreTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const coreMembers = [
    {
      name: 'Aditya Kulkarni',
      role: 'Organising Lead',
      description: 'Passionate about building communities and fostering collaborative learning environments.',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      socials: {
        github: '#',
        linkedin: '#',
        email: 'aditya@slug.org',
      },
    },
    {
      name: 'Meera Iyer',
      role: 'Tech Lead',
      description: 'Linux enthusiast and open-source advocate with expertise in system administration.',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      socials: {
        github: '#',
        linkedin: '#',
        email: 'meera@slug.org',
      },
    },
    {
      name: 'Nireeksha A P',
      role: 'Design Lead',
      description: 'Creating beautiful and accessible experiences for the SLUG community.',
      photo: '/nagisa.jpg',
      socials: {
        github: '#',
        linkedin: '#',
        email: 'niree@slug.org',
      },
    },
    {
      name: 'Ishita Malhotra',
      role: 'PR / Media Lead',
      description: 'Connecting SLUG with the wider tech community through storytelling and outreach.',
      photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400',
      socials: {
        github: '#',
        linkedin: '#',
        email: 'ishita@slug.org',
      },
    },
    {
      name: 'Rahul Sharma',
      role: 'Events Coordinator',
      description: 'Orchestrating amazing events and workshops that bring the community together.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      socials: {
        github: '#',
        linkedin: '#',
        email: 'rahul@slug.org',
      },
    },
    {
      name: 'Priya Menon',
      role: 'Content Lead',
      description: 'Crafting compelling content and managing our documentation for the SLUG community.',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      socials: {
        github: '#',
        linkedin: '#',
        email: 'priya@slug.org',
      },
    },
    {
      name: 'Arjun Patel',
      role: 'Community Manager',
      description: 'Building connections and fostering an inclusive environment for all members.',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      socials: {
        github: '#',
        linkedin: '#',
        email: 'arjun@slug.org',
      },
    },
  ];

  // Duplicate the array for seamless infinite loop
  const duplicatedMembers = [...coreMembers, ...coreMembers];

  return (
    <section
      id="core"
      ref={ref}
      className="py-32 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Meet the Core Team
          </h2>
          <p className="text-xl text-gray-600">
            Leading SLUG's mission and vision
          </p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, -2464], // 7 cards * 352px (300px width + 2*26px padding)
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-8"
        >
          {duplicatedMembers.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.05 * (index % coreMembers.length) }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-teal-300 hover:shadow-2xl transition-all duration-300 flex-shrink-0 w-[300px]"
            >
              {/* Portrait */}
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                  {member.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={member.socials.github}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-teal-100 flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-teal-100 flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-teal-100 flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
    </section>
  );
}