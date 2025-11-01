import React, { useState, useEffect } from 'react'; // Import useEffect
import {
  GraduationCap,
  BookOpen,
  CheckCircle,
} from 'lucide-react';

const Offer = () => {
  return (
    <>
     <section id="courses" className="py-20 md:py-24 fade-in-section">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Expert coaching tailored for every stage of your commerce education.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  {/* Plus One / Plus Two Card */}
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 text-red-600 p-3 rounded-lg mr-4">
                        <BookOpen size={24} />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">Plus One & Plus Two</h3>
                    </div>
                    <p className="text-gray-600 mb-6">Comprehensive coaching for higher secondary commerce students.</p>
                    <ul className="space-y-3">
                      <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-3" /> Accountancy</li>
                      <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-3" /> Business Studies</li>
                      <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-3" /> Economics</li>
                      <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-3" /> Informatics Practices</li>
                    </ul>
                  </div>

                  {/* UG & PG Card */}
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 text-red-600 p-3 rounded-lg mr-4">
                        <GraduationCap size={24} />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">UG & PG Commerce</h3>
                    </div>
                    <p className="text-gray-600 mb-6">Advanced coaching for B.Com, M.Com, and other degree students.</p>

                    <ul className="space-y-3">
                      <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-3" /> Financial Accounting</li>
                      <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-3" /> Cost Accounting</li>
                      <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-3" /> Corporate Law</li>
                      <li className="flex items-center"><CheckCircle size={20} className="text-green-500 mr-3" /> Auditing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
    </>
  )
}

export default Offer