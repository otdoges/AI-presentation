import { motion, AnimatePresence } from 'framer-motion/dist/components/AnimatePresence';
import { motion as m } from 'framer-motion/dist/components/motion';
import { Presentation } from '@/types/presentation';
import { PresentationSlide } from './components/PresentationSlide';

interface PreviewProps {
  params: {
    id: string;
  };
}

export default function Preview({ params }: PreviewProps) {
  // In a real app, this would fetch the presentation data from your backend
  const presentation: Presentation = {
    id: params.id,
    title: 'AI-Powered Presentations',
    description: 'Transform your ideas into stunning presentations',
    createdAt: new Date(),
    updatedAt: new Date(),
    slides: [
      {
        id: '1',
        title: 'Introduction',
        content: 'Welcome to our AI-powered presentation platform',
        image: '/images/ai-intro.jpg',
        notes: 'Start with a strong opening that captures attention',
        layout: 'center',
        elements: []
      },
      {
        id: '2',
        title: 'Key Features',
        content: '• AI Design\n• Smart Content\n• Real-time Collaboration',
        image: '/images/features.jpg',
        notes: 'Highlight the main features of our platform',
        layout: 'split',
        elements: []
      },
      {
        id: '3',
        title: 'Getting Started',
        content: '1. Choose a template\n2. Add your content\n3. Let AI enhance it',
        image: '/images/getting-started.jpg',
        notes: 'Guide users through the process',
        layout: 'grid',
        elements: []
      },
    ],
    template: 'modern',
    theme: {
      name: 'Modern',
      primaryColor: '#4F46E5',
      secondaryColor: '#818CF8',
      backgroundColor: '#FFFFFF',
      font: 'Inter',
      typography: {
        heading: {
          size: 48,
          weight: 700,
          lineHeight: 1.2
        },
        body: {
          size: 20,
          weight: 400,
          lineHeight: 1.6
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{presentation.title}</h1>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-primary text-white rounded-lg">
                Download
              </button>
              <button className="px-4 py-2 border border-primary text-primary rounded-lg">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-12 gap-8">
          {/* Slides */}
          <div className="col-span-8">
            <div className="relative h-[600px] bg-white rounded-lg shadow-xl overflow-hidden">
              {presentation.slides.map((slide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <PresentationSlide slide={slide} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4 space-y-8">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Slide Navigation</h2>
              <div className="space-y-2">
                {presentation.slides.map((slide, index) => (
                  <button
                    key={index}
                    className="w-full p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    {slide.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Presentation Notes</h2>
              <div className="space-y-4">
                {presentation.slides.map((slide, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      {slide.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
