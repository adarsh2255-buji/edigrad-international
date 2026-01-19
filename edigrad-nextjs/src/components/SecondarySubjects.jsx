import AnimateOnScroll from '@/customHooks/AnimateOnScroll'
import { Atom, Calculator, Dna, FlaskConical } from 'lucide-react'
import SubjectCard from './SubjectCard'
import React from 'react'

const SecondarySubjects = () => {
  return (
    <>
    <AnimateOnScroll>
        <section className="pb-20 md:pb-24">
                <div className="container mx-auto px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Special Class for Class 8, 9, 10</h3>
                      <p className="text-gray-600">
                        Building strong fundamentals for high school students.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <AnimateOnScroll delay={0}>
                        <SubjectCard icon={<Calculator size={24} className="text-blue-500" />} subject="Mathematics" />
                      </AnimateOnScroll>
                      <AnimateOnScroll delay={100}>
                        <SubjectCard icon={<Atom size={24} className="text-purple-500" />} subject="Physics" />
                      </AnimateOnScroll>
                      <AnimateOnScroll delay={200}>
                        <SubjectCard icon={<FlaskConical size={24} className="text-green-500" />} subject="Chemistry" />
                      </AnimateOnScroll>
                      <AnimateOnScroll delay={300}>
                        <SubjectCard icon={<Dna size={24} className="text-red-500" />} subject="Biology" />
                      </AnimateOnScroll>
                    </div>
                  </div>
                </div>
              </section>
    </AnimateOnScroll>
    </>
  )
}

export default SecondarySubjects