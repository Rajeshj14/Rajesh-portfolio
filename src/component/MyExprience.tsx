import React from 'react';

const experiences = [
  {
    date: 'Sep, 2023 – Feb, 2024',
    title: 'Full Stack Developer / Internship',
    company: 'Inbox Info Solutions',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'Manimedai, Nagercoil',
  },
  {
    date: 'Mar, 2024 – May, 2025',
    title: ' Web Developer',
    company: 'Matt Engineering Solutions', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'Nagercoil, India',
  },
  {
    date: 'Mar, 2024 – May, 2025',
    title: 'Full Stack Developer',
    company: 'Matt Engineering Solutions',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'Nagercoil, India',
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-[#0a1e2c] py-16 px-4 text-white relative">
      {/* Background Text */}
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
        EXPERIENCE
            </h1>

      {/* Title */}
      <div className="relative z-10 text-center mb-12 mt-12">
        <div className="flex justify-center items-center gap-4">
          <div className="w-12 h-1 bg-red-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">MY EXPERIENCE</h2>
          <div className="w-12 h-1 bg-red-500" />
        </div>
      </div>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#12283a] rounded-md px-6 py-5 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div className="inline-block bg-white/10 text-white text-sm px-4 py-1 rounded-full mb-2 font-semibold">
              {exp.date}
            </div>
            <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
            <p className="text-white/80 text-sm mb-1">{exp.company}</p>
            <p className="text-white/80 text-sm">{exp.desc}</p>
            <p className="text-white/50 text-sm mt-2">– {exp.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
