
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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

export default function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });

  // Event photos organized into columns
  const column1Photos = [
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600', label: 'Workshop Session', height: 350 },
    { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600', label: 'Team Collaboration', height: 400 },
    { src: 'https://images.unsplash.com/photo-1531537571171-a707bf2683da?w=600', label: 'Coding Together', height: 300 },
    { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600', label: 'Conference Talk', height: 380 },
  ];

  const column2Photos = [
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600', label: 'Group Discussion', height: 380 },
    { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600', label: 'Hackathon', height: 320 },
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600', label: 'Community Meetup', height: 400 },
    { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600', label: 'Networking', height: 350 },
  ];

  const column3Photos = [
    { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600', label: 'Project Demo', height: 340 },
    { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600', label: 'Team Photo', height: 380 },
    { src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600', label: 'Workshop Activity', height: 320 },
    { src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600', label: 'Presentation', height: 400 },
  ];

  const column4Photos = [
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600', label: 'Brainstorming', height: 360 },
    { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600', label: 'Laptop Setup', height: 330 },
    { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600', label: 'Team Work', height: 390 },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600', label: 'Event Space', height: 350 },
  ];

  const column5Photos = [
    { src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600', label: 'Speaker Session', height: 370 },
    { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600', label: 'Tech Discussion', height: 340 },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600', label: 'Group Activity', height: 380 },
    { src: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=600', label: 'Learning Session', height: 320 },
  ];

  const column6Photos = [
    { src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600', label: 'Community', height: 350 },
    { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600', label: 'Auditorium', height: 390 },
    { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600', label: 'Collaboration', height: 330 },
    { src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600', label: 'Workshop', height: 360 },
  ];

  const allColumns = [column1Photos, column2Photos, column3Photos, column4Photos, column5Photos, column6Photos];
  const allPhotos = [...column1Photos, ...column2Photos, ...column3Photos, ...column4Photos, ...column5Photos, ...column6Photos];

  const openLightbox = (photo: any) => {
    const index = allPhotos.findIndex(p => p.src === photo.src);
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % allPhotos.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  return (
    <>
      <section ref={ref} className="relative bg-gray-900 py-24 overflow-hidden">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center mb-16"
        >
          <h2 className="text-6xl lg:text-7xl font-bold text-white">Memories</h2>
        </motion.div>

        {/* Moving Photo Columns */}
        <div className="flex gap-4 lg:gap-6">
          {/* Column 1 - Upward, slow */}
          <PhotoColumn photos={column1Photos} direction="up" speed={40} onPhotoClick={openLightbox} />
          
          {/* Column 2 - Downward, slow */}
          <PhotoColumn photos={column2Photos} direction="down" speed={45} onPhotoClick={openLightbox} />
          
          {/* Column 3 - Upward, medium */}
          <PhotoColumn photos={column3Photos} direction="up" speed={35} onPhotoClick={openLightbox} />
          
          {/* Column 4 - Downward, medium */}
          <PhotoColumn photos={column4Photos} direction="down" speed={38} onPhotoClick={openLightbox} className="hidden md:block" />
          
          {/* Column 5 - Upward */}
          <PhotoColumn photos={column5Photos} direction="up" speed={42} onPhotoClick={openLightbox} className="hidden lg:block" />
          
          {/* Column 6 - Downward */}
          <PhotoColumn photos={column6Photos} direction="down" speed={40} onPhotoClick={openLightbox} className="hidden lg:block" />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none" />
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-teal-400 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 text-white hover:text-teal-400 transition-colors z-10"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-white hover:text-teal-400 transition-colors z-10"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={allPhotos[selectedImage].src}
              alt={allPhotos[selectedImage].label}
              className="w-full h-full object-contain rounded-2xl"
            />
            <p className="text-white text-center mt-4 text-lg">
              {allPhotos[selectedImage].label}
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

interface PhotoColumnProps {
  photos: Array<{ src: string; label: string; height: number }>;
  direction: 'up' | 'down';
  speed: number;
  onPhotoClick: (photo: any) => void;
  className?: string;
}

function PhotoColumn({ photos, direction, speed, onPhotoClick, className = '' }: PhotoColumnProps) {
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
        className="flex flex-col gap-4"
      >
        {duplicatedPhotos.map((photo, index) => (
          <motion.div
            key={`${photo.src}-${index}`}
            onClick={() => onPhotoClick(photo)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
            style={{ height: `${photo.height}px` }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            data-cursor="view"
          >
            <ImageWithFallback
              src={photo.src}
              alt={photo.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium">{photo.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
