import React, { useState, useEffect } from 'react'; // Import useEffect
import {
  BookOpen,
  Award,
  Computer,
  Target,
  Users,
  Star,

} from 'lucide-react';
import FeatureCard from './FeatureCard';

const WhyEdigrad = () => {
  return (
    <>
     <section id="why-us" className="py-20 md:py-24 bg-red-50 fade-in-section">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Edigrad?</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our learning approach is designed for your success.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <FeatureCard icon={<Award size={28} />} title="Updated Curriculum" text="Always aligned with the latest syllabus and exam patterns." />
                  <FeatureCard icon={<Computer size={28} />} title="Flexible Online Learning" text="Study anytime, anywhere, at your own pace." />
                  <FeatureCard icon={<Target size={28} />} title="Mock Tests & Tracking" text="Regular quizzes and performance tracking with minor support." />
                  <FeatureCard icon={<BookOpen size={28} />} title="Concept-First Approach" text="We build strong fundamentals, not just rote memorization." />
                  <FeatureCard icon={<Users size={28} />} title="Expert Faculty" text="Learn from experienced and dedicated commerce educators." />
                  <FeatureCard icon={<Star size={28} />} title="Personalized Journey" text="Our structure follows your needs, not a rigid plan." />
                </div>
              </div>
            </section>
    </>
  )
}

export default WhyEdigrad