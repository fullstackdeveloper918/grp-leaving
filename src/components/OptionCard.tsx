
import React from 'react';

interface OptionCardProps {
  title: string;
  imageSrc: string;
  description: string;
  buttonText: string;
  isFree?: boolean;
}

const OptionCard: React.FC<OptionCardProps> = ({ title, imageSrc, description, buttonText, isFree }) => {

  return (
    <div className="relative bg-white rounded-lg shadow-md p-6 w-full text-center hover:shadow-lg transition-shadow duration-300">
      {isFree && (
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
          FREE
        </span>
      )}
      <img src={imageSrc} alt={title} className="mx-auto h-24 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-500 font-semibold hover:underline">{buttonText}</button>
    </div>
  );
};

export default OptionCard;
