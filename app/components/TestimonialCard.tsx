import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  content: string;
  name: string;
  username: string;
  imageSrc?: string;
  featured?: boolean;
  companyLogo?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  name,
  username,
  imageSrc,
  featured = false,
  companyLogo
}) => {
  return (
    <div className={`bg-white p-6 ${featured ? 'p-8' : 'p-6'} rounded-xl shadow-sm`}>
      <p className={`text-gray-700 mb-5 ${featured ? 'text-lg' : ''}`}>
        {content}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ 
                backgroundImage: `url(/placeholder.svg?text=${name.charAt(0)}${name.split(' ')[1]?.charAt(0) || ''}&fontsize=18&width=100&height=100)` 
              }} 
            />
          )}
        </div>
        <div className={companyLogo ? "flex items-center justify-between w-full" : ""}>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">@{username}</p>
          </div>
          {companyLogo && (
            <div className="flex">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-white text-xs font-medium">{companyLogo}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 