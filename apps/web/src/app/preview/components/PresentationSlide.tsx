import { motion } from 'framer-motion';
import Image from 'next/image';

interface PresentationSlideProps {
  slide: {
    id: string;
    title: string;
    content: string;
    image?: string;
    notes: string;
    layout: string;
    elements: any[];
  };
}

export function PresentationSlide({ slide }: PresentationSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full"
    >
      {/* Background Image */}
      {slide.image && (
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover opacity-20"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative p-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-6"
        >
          {slide.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl"
        >
          <p>{slide.content}</p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-primary/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-secondary/20 to-transparent" />
    </motion.div>
  );
}
