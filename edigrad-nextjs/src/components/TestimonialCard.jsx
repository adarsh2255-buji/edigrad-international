import React from 'react'
import { Star, } from 'lucide-react';

const TestimonialCard = React.forwardRef(({ quote, author, role, stars = 5, className, style }, ref) => (
  <div 
    ref={ref}
    style={style}
    className={`${className} bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col justify-between`}>
    <div className="flex mb-4">
      {Array(stars).fill(0).map((_, i) => (
        <Star key={i} className="text-yellow-500 fill-current w-5 h-5" />
      ))}
    </div>
    <p className="text-gray-600 italic mb-6">"{quote}"</p>
    <div>
      <p className="font-semibold text-gray-900">{author}</p>
      <p className="text-sm text-red-600">{role}</p>
    </div>
  </div>
));

export default TestimonialCard