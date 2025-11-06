import React from 'react'
import {ArrowRight} from 'lucide-react';
import AnimateOnScroll from '../customHooks/AnimateOnScroll';


export const metadata = {
  title: "Edigrad International",
  description: "Edigrad International offers expert online tuition for Plus One, Plus Two, B.Com, and UG/PG Commerce students. Personalized, flexible learning. Unlock your potential today!",
  icons: {
    icon: '/favicon.ico', // Make sure favicon.png is in /public
  },
  authors : [{name : "Adarsh SR"}],
  keywords: ["Best online tuition for B.Com 1st year","Affordable Plus Two commerce coaching",
    "Personalized online commerce tuition", "Online B.Com coaching in India",
    "Expert faculty for commerce online"
   ]
};


const About = () => {
  return (
    <>
    <AnimateOnScroll>
           <section id="about" className="py-20 md:py-24 fade-in-section">
              <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                <AnimateOnScroll>
                  <img 
                    src="/img2.jpg" 
                    alt="Our Mission" 
                    className="rounded-xl shadow-2xl"
                    onError={(e) => e.target.src = 'https://placehold.co/600x450/FEE2E2/EF4444?text=Image+Error'}
                  />
                  </AnimateOnScroll>
                </div>
                <div className="lg:w-1/2">
                <AnimateOnScroll>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                  <div className="space-y-4 text-gray-700 text-lg">
                    <p>
                      Edigrad is completely personalized in a way that it doesn't follow a one-time structure. Edigrad is completely dependent on the need provided by the students. At Edigrad, it's a learner's journey to realizing what they are good at and what they do best.
                    </p>
                    <p>
                      With a team of experts who ensure this on a broader level, you can see a change that truly counts. We embark on superiority by admitting to being true to our mission and vision: to give education that stays at its unhinged best.
                    </p>
                    </div>
                  </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </section>
    </AnimateOnScroll>

    <AnimateOnScroll>
            {/* CTA (Demo) Section */}
            <section className="bg-red-600">
              <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-lg text-red-100 max-w-2xl mx-auto mb-10">
                  Register for a free, no-obligation live demo and see the Edigrad difference for yourself. Our team is ready to help you unlock your potential.
                </p>
                <a
                  href="https://forms.gle/your-google-form-link" // <-- !! REPLACE WITH YOUR GOOGLE FORM LINK
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center"
                >
                  Register for a Live Demo
                  <ArrowRight size={22} className="ml-2" />
                </a>
              </div>
      </section>
    </AnimateOnScroll>
    </>
  )
}

export default About