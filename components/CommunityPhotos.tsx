
import { useState } from 'react';
import { motion } from 'framer-motion';

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

export default function CommunityPhotos() {
  // Community photos organized into columns
  const column1Photos = [
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500', height: 180 },
    { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500', height: 200 },
    { src: 'https://images.unsplash.com/photo-1531537571171-a707bf2683da?w=500', height: 170 },
    { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500', height: 190 },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500', height: 185 },
  ];

  const column2Photos = [
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500', height: 190 },
    { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500', height: 175 },
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500', height: 200 },
    { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500', height: 185 },
    { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500', height: 180 },
  ];

  const column3Photos = [
    { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500', height: 185 },
    { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500', height: 195 },
    { src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500', height: 175 },
    { src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500', height: 200 },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500', height: 188 },
  ];

  const column4Photos = [
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500', height: 190 },
    { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500', height: 180 },
    { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500', height: 195 },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500', height: 185 },
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500', height: 182 },
  ];

  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Title */}
      <div className="relative z-20 bg-white text-center mb-10 px-6 py-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-xs uppercase tracking-wider text-teal-600 font-semibold mb-3">
            Our Community
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Moments from SLUG
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our workshops, events, and community gatherings
          </p>
        </motion.div>
      </div>

      {/* Moving Photo Columns */}
      <div className="relative z-0 flex gap-3 lg:gap-4 px-2">
        {/* Column 1 - Upward */}
        <PhotoColumn photos={column1Photos} direction="up" speed={35} />
        
        {/* Column 2 - Downward */}
        <PhotoColumn photos={column2Photos} direction="down" speed={40} />
        
        {/* Column 3 - Upward */}
        <PhotoColumn photos={column3Photos} direction="up" speed={38} />
        
        {/* Column 4 - Downward */}
        <PhotoColumn photos={column4Photos} direction="down" speed={36} />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

interface PhotoColumnProps {
  photos: Array<{ src: string; height: number }>;
  direction: 'up' | 'down';
  speed: number;
  className?: string;
}

function PhotoColumn({ photos, direction, speed, className = '' }: PhotoColumnProps) {
  // Duplicate photos for seamless infinite loop
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <div className={`flex-1 min-w-0 ${className}`}>
      <motion.div
        animate={{
          y: direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex flex-col gap-3 lg:gap-4"
      >
        {duplicatedPhotos.map((photo, index) => (
          <motion.div
            key={`${photo.src}-${index}`}
            className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            style={{ height: `${photo.height}px` }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src={photo.src}
              alt="SLUG Community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
