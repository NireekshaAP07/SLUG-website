import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

export default function Members() {
  const [activeTab, setActiveTab] = useState<'current' | 'past'>('current');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentMembers = [
    {
      name: 'Rohan Gupta',
      photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200',
      year: '3rd Year',
      interests: 'Kernel Development, DevOps',
    },
    {
      name: 'Sanya Kapoor',
      photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200',
      year: '2nd Year',
      interests: 'Web Development, Open Source',
    },
    {
      name: 'Aman Verma',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
      year: '4th Year',
      interests: 'System Administration, Cloud',
    },
    {
      name: 'Divya Nair',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
      year: '3rd Year',
      interests: 'Cybersecurity, Linux',
    },
    {
      name: 'Kabir Shah',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      year: '2nd Year',
      interests: 'Machine Learning, Python',
    },
    {
      name: 'Riya Joshi',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      year: '3rd Year',
      interests: 'Embedded Systems, IoT',
    },
    {
      name: 'Aryan Patil',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      year: '4th Year',
      interests: 'Database, Backend',
    },
    {
      name: 'Neha Agarwal',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      year: '2nd Year',
      interests: 'UI/UX, Frontend',
    },
  ];

  const pastMembers = [
    {
      name: 'Akash Sharma',
      photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200',
      year: 'Alumni 2024',
      interests: 'Founding Member, Community Builder',
    },
    {
      name: 'Pooja Menon',
      photo: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200',
      year: 'Alumni 2024',
      interests: 'Former Tech Lead, Workshop Mentor',
    },
    {
      name: 'Rajesh Kumar',
      photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200',
      year: 'Alumni 2023',
      interests: 'Event Organization, Outreach',
    },
    {
      name: 'Tanya Singh',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200',
      year: 'Alumni 2024',
      interests: 'Media Lead, Content Creation',
    },
    {
      name: 'Karan Desai',
      photo: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=200',
      year: 'Alumni 2023',
      interests: 'Design Lead, UX Research',
    },
    {
      name: 'Ananya Rao',
      photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200',
      year: 'Alumni 2022',
      interests: 'Developer Advocate, Open Source',
    },
    {
      name: 'Nikhil Jain',
      photo: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200',
      year: 'Alumni 2023',
      interests: 'Infrastructure, DevOps',
    },
    {
      name: 'Shreya Patel',
      photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200',
      year: 'Alumni 2024',
      interests: 'Community Manager, Events',
    },
  ];

  return (
    <section
      id="members"
      ref={ref}
      className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-5xl">Our Community</h2>
          <p className="text-base text-gray-600 sm:text-xl">
            Students passionate about Linux and open source
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 flex justify-center sm:mb-16"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-full bg-gray-100 p-1.5">
            <button
              onClick={() => setActiveTab('current')}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-8 sm:py-2.5 sm:text-sm ${
                activeTab === 'current'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Current Members
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-8 sm:py-2.5 sm:text-sm ${
                activeTab === 'past'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Past Members
            </button>
          </div>
        </motion.div>

        {/* Current Members Grid */}
        {activeTab === 'current' && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {currentMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full ring-2 ring-gray-100">
                  <ImageWithFallback
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-center font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mb-2 text-center text-sm text-teal-600">
                  {member.year}
                </p>
                <p className="text-center text-xs text-gray-600">
                  {member.interests}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Past Members List */}
        {activeTab === 'past' && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pastMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full ring-2 ring-gray-100">
                  <ImageWithFallback
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-center font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mb-2 text-center text-sm text-teal-600">
                  {member.year}
                </p>
                <p className="text-center text-xs text-gray-600">
                  {member.interests}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-10 translate-x-1/2" />
    </section>
  );
}