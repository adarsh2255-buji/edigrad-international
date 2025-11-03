import React from 'react'
import {CheckCircle} from 'lucide-react';
import AnimateOnScroll from '../customHooks/AnimateOnScroll';

const OfferCard = ({ icon: Icon, title, desc, items }) => {
  return (
    <>
    <AnimateOnScroll>
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="bg-red-100 text-red-600 p-3 rounded-lg mr-4">
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 mb-6">{desc}</p>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle size={20} className="text-green-500 mr-3" />
            {item}
          </li>
        ))}
      </ul>
    </div>
    </AnimateOnScroll>
    </>
  )
}

export default OfferCard