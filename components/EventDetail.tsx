
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowLeft, X } from 'lucide-react';
import PhotoGallery from './PhotoGallery';

interface EventDetailProps {
  event: any;
  onBack: () => void;
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

export default function EventDetail({ event, onBack }: EventDetailProps) {
  const volunteers = [
    {
      name: 'Arjun Mehta',
      role: 'Lead Organizer',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    {
      name: 'Priya Sharma',
      role: 'Technical Coordinator',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    {
      name: 'Rahul Kumar',
      role: 'Logistics',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    },
    {
      name: 'Sneha Patel',
      role: 'Media & PR',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Events</span>
        </button>
      </div>

      {/* Event Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            {event.category}
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {event.name}
          </h1>

          <div className="flex flex-wrap gap-6 text-lg text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl">{event.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-96 rounded-3xl overflow-hidden"
        >
          <ImageWithFallback
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* About the Event */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About the Event
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-4 max-w-4xl">
            <p>
              This event brings together students passionate about Linux and
              open-source technologies. Whether you're a beginner or an
              experienced developer, there's something for everyone.
            </p>
            <p>
              Participants will have the opportunity to learn from industry
              experts, collaborate on projects, and connect with like-minded
              individuals in the SLUG community.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Event Details */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Event Details
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Duration</div>
              <div className="text-xl font-semibold text-gray-900">
                Full Day Event
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Expected Participants</div>
              <div className="text-xl font-semibold text-gray-900">100+ Students</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Registration</div>
              <div className="text-xl font-semibold text-gray-900">Free & Open</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Volunteers */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Volunteers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteers.map((volunteer, index) => (
              <motion.div
                key={volunteer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto">
                  <ImageWithFallback
                    src={volunteer.photo}
                    alt={volunteer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {volunteer.name}
                  </h3>
                  <p className="text-sm text-gray-600">{volunteer.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Photo Gallery */}
      <PhotoGallery />
    </div>
  );
}
