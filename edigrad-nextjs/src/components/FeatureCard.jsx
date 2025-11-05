import React from 'react'

const FeatureCard = React.forwardRef(({ icon, title, text, className, style }, ref) => (
  <div 
    ref={ref}
    style={style}
    className={`${className} bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
    <div className="bg-red-100 text-red-600 p-3 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
));

export default FeatureCard