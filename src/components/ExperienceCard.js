import React from 'react';

const ExperienceCard = ({ title, company, date, description }) => {
  return (
    <div className=" text-white p-4 rounded-lg shadow-md border border-gray-500 mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{company}</p>
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <p className='text-gray-300'>{description}</p>
    </div>
  );
};

export default ExperienceCard;
