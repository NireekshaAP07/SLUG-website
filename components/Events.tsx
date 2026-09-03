
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface EventsProps {
  onEventClick: (event: any) => void;
}

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

export default function Events({ onEventClick }: EventsProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'ongoing' | 'past'>('upcoming');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const upcomingEvents = [
    {
      id: 1,
      name: 'Linux Workshop 2024',
      date: 'September 15, 2026',
      location: 'Main Auditorium',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
      description:
        'An intensive hands-on workshop covering Linux fundamentals, command line, and system administration.',
    },
    {
      id: 2,
      name: 'Open Source Hackathon',
      date: 'September 22-23, 2026',
      location: 'Tech Lab',
      category: 'Hackathon',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
      description:
        '48-hour hackathon focused on building innovative open-source projects and solutions.',
    },
    {
      id: 3,
      name: 'Guest Talk: Future of Linux',
      date: 'October 5, 2026',
      location: 'Seminar Hall',
      category: 'Talk',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
      description:
        'Industry expert sharing insights on the evolution and future of Linux in modern computing.',
    },
  ];

  const ongoingEvents = [
    {
      id: 6,
      name: 'Linux Kernel Development Sprint',
      date: 'September 1-7, 2026',
      location: 'Innovation Lab',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      description:
        'Week-long intensive sprint contributing to the Linux kernel. Learn from experienced maintainers.',
      progress: 65,
      daysRemaining: 3,
    },
    {
      id: 7,
      name: 'Open Source Code Review Marathon',
      date: 'September 2-4, 2026',
      location: 'Online & Campus',
      category: 'Hackathon',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
      description:
        'Ongoing code review sessions for popular open-source projects. Join anytime to learn and contribute.',
      progress: 40,
      daysRemaining: 1,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      name: 'SLUG Community Meetup',
      date: 'August 10, 2026',
      location: 'Campus Grounds',
      category: 'Community Meetup',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      description: 'Monthly community gathering to discuss projects and share knowledge.',
    },
    {
      id: 5,
      name: 'Git & GitHub Workshop',
      date: 'July 20, 2026',
      location: 'Computer Lab',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      description: 'Learn version control with Git and collaborative development on GitHub.',
    },
  ];

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : activeTab === 'ongoing' ? ongoingEvents : pastEvents;

  const categoryColors: Record<string, string> = {
    Workshop: 'bg-teal-100 text-teal-700 border-teal-200',
    Hackathon: 'bg-purple-100 text-purple-700 border-purple-200',
    Talk: 'bg-blue-100 text-blue-700 border-blue-200',
    'Community Meetup': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  };

  return (
    <section
      id="events"
      ref={ref}
      className="py-32 px-6 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Events</h2>
          <p className="text-xl text-gray-600">Learn together. Build together.</p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-2.5 rounded-full transition-all duration-300 font-medium ${
                activeTab === 'upcoming'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`px-8 py-2.5 rounded-full transition-all duration-300 font-medium ${
                activeTab === 'ongoing'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Ongoing Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-2.5 rounded-full transition-all duration-300 font-medium ${
                activeTab === 'past'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Past Events
            </button>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onClick={() => onEventClick(event)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-teal-300 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
              data-cursor="view"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-medium border ${
                    categoryColors[event.category] || 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {event.category}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {event.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>

                {/* Progress bar for ongoing events */}
                {activeTab === 'ongoing' && 'progress' in event && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                      <span>Event Progress</span>
                      <span className="font-semibold text-teal-600">{(event as any).progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${(event as any).progress}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"
                      />
                    </div>
                    {/* Days remaining badge */}
                    {('daysRemaining' in event) && (
                      <div className="mt-2 inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold border border-yellow-200">
                        <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse" />
                        {(event as any).daysRemaining} {(event as any).daysRemaining === 1 ? 'day' : 'days'} remaining
                      </div>
                    )}
                  </div>
                )}

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="flex items-center text-teal-600 font-medium group-hover:gap-3 gap-2 transition-all">
                  <span>View Event</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20 -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-20 translate-x-1/2" />
    </section>
  );
}