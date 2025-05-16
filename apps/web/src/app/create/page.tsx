"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion/dist/components/AnimatePresence';
import { motion as m } from 'framer-motion/dist/components/motion';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Create() {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState('');
  const [audience, setAudience] = useState('');
  const [keyPoints, setKeyPoints] = useState('');

  const steps = [
    {
      title: 'Choose Your Topic',
      description: 'What would you like to present about?',
      input: (
        <Textarea
          placeholder="Enter your presentation topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="min-h-[150px]"
        />
      ),
    },
    {
      title: 'Define Your Audience',
      description: 'Who will be attending your presentation?',
      input: (
        <Textarea
          placeholder="Describe your target audience..."
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className="min-h-[150px]"
        />
      ),
    },
    {
      title: 'Key Points',
      description: 'What are the main points you want to cover?',
      input: (
        <Textarea
          placeholder="List your key points..."
          value={keyPoints}
          onChange={(e) => setKeyPoints(e.target.value)}
          className="min-h-[150px]"
        />
      ),
    },
  ];

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Create Your Presentation
          </h1>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h2 className="text-2xl font-semibold">{steps[step - 1].title}</h2>
                  <p className="text-muted-foreground mt-2">{steps[step - 1].description}</p>
                </div>

                {steps[step - 1].input}

                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      className="w-32"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    className="w-32"
                  >
                    {step === steps.length ? 'Generate' : 'Next'}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
