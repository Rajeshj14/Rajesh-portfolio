import React from 'react';

interface SkillCardProps {
  title: string;
  percentage: number;
  lastWeek: number;
  lastMonth: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, percentage, lastWeek, lastMonth }) => {
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center">
      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-8">{title}</h3>
      
      {/* Circular Progress */}
      <div className="relative mb-8">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#f3f4f6"
            strokeWidth="6"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#ef4444"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-white">
            {percentage}%
          </span>
        </div>
      </div>
      
      {/* Stats */}
      <div className="flex items-center space-x-8 w-full  justify-center">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-white mb-1">{lastWeek}%</span>
          <span className="text-sm text-white">Last week</span>
        </div>
        <div className="w-px h-12 bg-gray-200"></div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-white mb-1">{lastMonth}%</span>
          <span className="text-sm text-white">Last month</span>
        </div>
      </div>
    </div>
  );
};

const SkillsGrid = () => {
  const skills = [
    { title: 'CSS', percentage: 95, lastWeek: 28, lastMonth: 60 },
    { title: 'HTML', percentage: 98, lastWeek: 28, lastMonth: 60 },
    { title: 'Reactjs', percentage: 68, lastWeek: 28, lastMonth: 60 },
    { title: 'Tailwind Css', percentage: 92, lastWeek: 28, lastMonth: 60 },
    { title: 'Python', percentage: 83, lastWeek: 28, lastMonth: 60 },
    { title: 'SEO', percentage: 95, lastWeek: 28, lastMonth: 60 },
  ];

  return (
    <div className="bg-slate-900 py-13  px-4 md:py-2 lg:py-6 xl:py-14 relative">
      {/* Background "ABOUT ME" text */}
      <h1
        className="absolute top-8 left-1/2 transform -translate-x-1/2 select-none z-0 uppercase"
        style={{
          WebkitTextStrokeWidth: '1px',
          WebkitTextStrokeColor: '#fff',
          fontSize: '7vw',
          color: 'transparent',
          margin: 0,
          fontWeight: 600,
          lineHeight: 1,
          opacity: 0.1,
          letterSpacing: '0.8rem',
        }}
      >
        SKILLS
      </h1>
      
      {/* Section title */}
      <div className="relative z-10 text-centermb-8 p-0 m-1 md:p-0 sm:mt-17 mb-10">

        <div className="flex justify-center items-center gap-1 md:gap-4">
          <div className="w-6 md:w-9 lg:w-11 xl:w-12 h-1 bg-red-500" />
          <h2 className="text-md md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">SKILLS</h2>
          <div className="w-6 md:w-9 lg:w-11 xl:w-12 h-1 bg-red-500" />
        </div>
      </div>
      
      {/* Skills grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              percentage={skill.percentage}
              lastWeek={skill.lastWeek}
              lastMonth={skill.lastMonth}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;