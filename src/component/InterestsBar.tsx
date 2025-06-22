import React from 'react';
import { Music, Plane, Film, Trophy } from 'lucide-react';

const InterestsBar = () => {
  const interests = [
    {
      title: 'Music',
      icon: <Music className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      title: 'Travel',
      icon: <Plane className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      title: 'Movie',
      icon: <Film className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      title: 'Sports',
      icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />,
    }
  ];

  return (
    <div className="flex flex-wrap items-center  gap-x-3 gap-y-3 sm:gap-x-6 ">
      {interests.map((interest, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/10 rounded-lg flex items-center justify-center 
                           transition-all duration-300 group-hover:bg-red-500/20 group-hover:scale-110 border border-red-500/20">
              <span className="text-red-400 group-hover:text-red-500">
                {interest.icon}
              </span>
            </div>
            <span className="text-white font-medium text-sm sm:text-base lg:text-lg whitespace-nowrap">
              {interest.title}
            </span>
          </div>
          {index < interests.length - 1 && (
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default InterestsBar;