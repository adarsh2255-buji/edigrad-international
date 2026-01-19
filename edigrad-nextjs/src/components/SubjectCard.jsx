import React from 'react';
const SubjectCard = React.forwardRef(({ icon, subject, className, style }, ref) => (
  <div 
    ref={ref}
    style={style}
    className={`${className} bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-center space-x-4 hover:bg-white hover:shadow-md transition-all duration-300`}>
    <div className="bg-white p-3 rounded-lg shadow-sm text-gray-700">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-900">{subject}</h4>
      {/* <p className="text-sm text-gray-500">Classes 8, 9, 10</p> */}
    </div>
  </div>
));

export default SubjectCard; 
