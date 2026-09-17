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

export default function Volunteers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const volunteers = [
    {
      name: 'Arjun Mehta',
      event: 'Linux Workshop 2024',
      role: 'Lead Organizer',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    },
    {
      name: 'Priya Sharma',
      event: 'Open Source Hackathon',
      role: 'Technical Coordinator',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
    },
    {
      name: 'Rahul Kumar',
      event: 'Linux Workshop 2024',
      role: 'Logistics Manager',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
    },
    {
      name: 'Sneha Patel',
      event: 'Community Meetup',
      role: 'Media & PR',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
    },
    {
      name: 'Karan Singh',
      event: 'Open Source Hackathon',
      role: 'Mentor',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300',
    },
    {
      name: 'Ananya Reddy',
      event: 'Guest Talk Series',
      role: 'Event Coordinator',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300',
    },
  ];

  return (
    <section
      id="volunteers"
      ref={ref}
      className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-5xl">
            The people who make it happen.
          </h2>
          <p className="text-base text-gray-600 sm:text-xl">
            Our dedicated volunteers bring events to life
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {volunteers.map((volunteer, index) => (
            <motion.div
              key={volunteer.name}
              initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, x: 0 }
                  : { opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 }
              }
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-xl sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-gray-100 transition-all group-hover:ring-teal-200">
                  <ImageWithFallback
                    src={volunteer.photo}
                    alt={volunteer.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-teal-600">
                    {volunteer.name}
                  </h3>
                  <p className="mb-1 text-sm text-gray-600">{volunteer.event}</p>
                  <div className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                    {volunteer.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}
