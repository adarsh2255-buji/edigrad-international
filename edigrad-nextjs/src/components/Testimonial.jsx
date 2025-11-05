import React from 'react'
import TestimonialCard from './TestimonialCard'
import AnimateOnScroll from '../customHooks/AnimateOnScroll'

const Testimonial = () => {
  return (
    <>
    <AnimateOnScroll>
    <section id="testimonials" className="py-20 md:py-24 bg-gray-50 fade-in-section">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <AnimateOnScroll delay={0}>
                  <TestimonialCard 
                    quote="An excellent choice for students who want to improve their academic performance and achieve their goals. They offering exceptional teaching and support and provides individualized attention for each student by ensuring they receive the best possible guidance."
                    author="Naveen S."
                    role="Plus Two Student"
                  />
                  </AnimateOnScroll>
                  <AnimateOnScroll delay={150}>
                  <TestimonialCard 
                    quote="Great tuition 👍 The teachers are very friendly and teach well , my daughter enjoys tuition classes and her grades have improved a lot. The one to one tuition really helps kids concentrate and be more personal in asking doubts and understanding. Love the flexibility with being able to change time of classes and even change of teachers if they aren't suitable for your child ❤️. So satisfied with their service."
                    author="Shreya S"
                    role="B.Com Student"
                  />
                  </AnimateOnScroll>
                  <AnimateOnScroll delay={300}>
                  <TestimonialCard 
                    quote="Your classes are very interactive and helpful. All my doubts are cleared, and my marks have improved a lot. I really understand and enjoy your teaching method. Thank you!"
                    author="Anay"
                    role="Plus One Student"
                  />
                  </AnimateOnScroll>
                </div>
              </div>
    </section>
    </AnimateOnScroll>
    </>
  )
}

export default Testimonial