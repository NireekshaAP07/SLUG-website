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
      name: 'SLUG CTRL+O',
      date: 'May 25, 2026',
      location: 'Campus Grounds',
      category: 'Community Meetup',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      description: 'Your Voyage into the FOSSiverse SLUG CTRL+O was an introductory session designed to open the door to the world of Free and Open Source Software, GNU/Linux, and open-source communities.The session introduced students to the fundamentals of FOSS and Linux while showing how students can move from simply using technology to building and contributing to it.',
    },
    {
      id: 5,
      name: 'Getting Started with LLMs & Agentic AI',
      date: 'May 30, 2026',
      location: 'Computer Lab',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      description: 'In collaboration with FSMKSLUG Getting Started with LLMs & Agentic AI workshop introduced students to the rapidly evolving world of modern artificial intelligence.Led by Praveen Nathan from Free Software Movement Karnataka (FSMK), the session combined conceptual learning with practical demonstrations and interactive exploration of AI tools.',
    },
    {
      id: 6,
      name: 'Context Engineering',
      date: 'August 3, 2026',
      location: 'Computer Lab',
      category: 'Group Discussion',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      description: 'SLUG In-Team Learning Session A focused knowledge-sharing session exploring how modern AI systems work with context, memory, external information, and tools.Led by Kishan Ravi R, the session moved beyond basic prompt engineering and explored the systems and techniques that help AI applications produce more relevant and reliable results..',
    },

    {
      id: 7,
      name: 'Linux Install Fest',
      date: 'August 3, 2026',
      location: 'Campus ',
      category: 'Hands On',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      description: 'The Linux Install Fest was a hands-on initiative by SLUG designed to help students move from learning about Linux to actually installing and exploring it on their own systems.Participants were invited to experience Linux directly on their laptops and take their first practical steps into the Linux ecosystem..',
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
      className="relative overflow-hidden bg-gray-50 py-20 px-4 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-5xl">Events</h2>
          <p className="text-base text-gray-600 sm:text-xl">Learn together. Build together.</p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 flex justify-center sm:mb-16"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 sm:px-8 sm:py-2.5 sm:text-sm ${
                activeTab === 'upcoming'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 sm:px-8 sm:py-2.5 sm:text-sm ${
                activeTab === 'ongoing'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Ongoing Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 sm:px-8 sm:py-2.5 sm:text-sm ${
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onClick={() => onEventClick(event)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-xl"
              data-cursor="view"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={event.image}
                  alt={event.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-[11px] font-medium sm:px-4 ${
                    categoryColors[event.category] || 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {event.category}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-5 sm:p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-teal-600">
                  {event.name}
                </h3>

                <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>

                <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>

                {/* Progress bar for ongoing events */}
                {activeTab === 'ongoing' && 'progress' in event && typeof event.progress === 'number' && (
                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between text-xs text-gray-600">
                      <span>Progress</span>
                      <span>{event.progress}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-500 to-yellow-500"
                        style={{ width: `${event.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm font-medium text-teal-600">
                  <span>View details</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}