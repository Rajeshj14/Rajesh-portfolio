// 'use client';
// import React from 'react';
// import { Globe, Database, Camera, FileText, Code2, BarChart3, Brain, Image } from 'lucide-react';
// import InterestsBar from './InterestsBar';

// const AboutSection = () => {
//   const interests = [
//     {
//       title: 'Software Development',
//       icon: <Globe className="w-6 h-6" />,
//       color: 'text-orange-400',
//       bgColor: 'bg-orange-400/10'
//     },
//     {
//       title: 'Machine Learning',
//       icon: <Database className="w-6 h-6" />,
//       color: 'text-blue-400',
//       bgColor: 'bg-blue-400/10'
//     },
//     {
//       title: 'Computer Vision',
//       icon: <Camera className="w-6 h-6" />,
//       color: 'text-pink-400',
//       bgColor: 'bg-pink-400/10'
//     },
//     {
//       title: 'Natural Language Processing',
//       icon: <FileText className="w-6 h-6" />,
//       color: 'text-green-400',
//       bgColor: 'bg-green-400/10'
//     },
//     {
//       title: 'Software Engineering',
//       icon: <Code2 className="w-6 h-6" />,
//       color: 'text-green-400',
//       bgColor: 'bg-green-400/10'
//     },
//     {
//       title: 'Visualization',
//       icon: <BarChart3 className="w-6 h-6" />,
//       color: 'text-red-400',
//       bgColor: 'bg-red-400/10'
//     },
//     {
//       title: 'Algorithms',
//       icon: <Brain className="w-6 h-6" />,
//       color: 'text-blue-400',
//       bgColor: 'bg-blue-400/10'
//     },
//     {
//       title: 'Image Processing',
//       icon: <Image className="w-6 h-6" />,
//       color: 'text-yellow-400',
//       bgColor: 'bg-yellow-400/10'
//     }
//   ];

//   const handleScroll = () => {
//     // const targetElement = document.getElementById('contact1');
//     // targetElement?.scrollIntoView({ behavior: 'smooth' });
//     const targetElement =document.getElementById('contact1')
//     targetElement?.scrollIntoView({behavior:'smooth'})
//   };

//   return (
//     <div id='about' className="min-h-screen bg-slate-900 text-white p-8 relative">
//       <h1
//         className="absolute top-8 left-1/2 transform -translate-x-1/2 select-none z-0 uppercase"
//         style={{
//           WebkitTextStrokeWidth: '1px',
//           WebkitTextStrokeColor: '#fff',
//           fontSize: '7vw',
//           color: 'transparent',
//           margin: 0,
//           fontWeight: 600,
//           lineHeight: 1,
//           opacity: 0.1,
//           letterSpacing: '0.8rem',
//         }}
//       >
//         ABOUT ME
//       </h1>
//       {/* Title */}
//       <div className="relative z-10 text-center mb-5 mt-23 ">
//         <div className="flex justify-center items-center gap-4">
//           <div className="w-12 h-1 bg-red-500" />
//           <h2 className="text-3xl md:text-4xl font-bold text-white">ABOUT ME</h2>
//           <div className="w-12 h-1 bg-red-500" />
//         </div>
//       </div>
//       <div className="max-w-6xl mx-auto">
//         {/* About Section */}

//         <div className="mb-16">
//           <div className="flex items-center mb-8">
//             <h2 className="text-2xl font-bold tracking-wider text-gray-300 mr-4">INTRO MYSELF</h2>
//             <div className="h-px bg-gray-600 flex-1"></div>
//           </div>
//           <div className="grid md:grid-cols-2 gap-2 items-start">
//             {/* Profile Image */}
//             <div className="flex justify-center md:justify-start">
//               <div className="w-120 h-120 rounded-lg overflow-hidden shadow-2xl">
//                 <img
//                   src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Bio and Contact Info */}
//             <div className="space-y-6">
//               <p className="text-gray-300 leading-relaxed text-lg">
//                 Focused and enthusiastic developer with a keen interest in software development and artificial
//                 intelligence. By comprehensive exposure to the underlying concepts and applying them vividly
//                 to various projects, my love for these domains came into being. I am a passionate individual
//                 who thrives to build and apply algorithms to solve real-world industry problems.
//               </p>

//               <div className="grid md:grid-cols-2 gap-4 text-sm">
//                 <div className="flex items-center space-x-3">
//                   <span className="text-red-400">▶</span>
//                   <span className="text-gray-400">Name:</span>
//                   <span className="text-white">Rajesh Kumar.J</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className="text-red-400">▶</span>
//                   <span className="text-gray-400">DOB:</span>
//                   <span className="text-white">14-03-2001</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className="text-red-400">▶</span>
//                   <span className="text-gray-400">Pincode:</span>
//                   <span className="text-white">629166</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className="text-red-400">▶</span>
//                   <span className="text-gray-400">City:</span>
//                   <span className="text-white">Kanyakumari,Nagercoil</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className="text-red-400">▶</span>
//                   <span className="text-gray-400">Phone:</span>
//                   <span className="text-white">+91 890393****</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className="text-red-400">▶</span>
//                   <span className="text-gray-400">Email:</span>
//                   <span className="text-white">checkmycv@gmail.com</span>
//                 </div>
//               </div>
//               <div className="rounded-lg py-3 shadow-lg">
//                 <InterestsBar />
//               </div>
//               <div>
//                 <button
//                   onClick={handleScroll}
//                   className="bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
//                 >
//                  Contact me
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Interests Section */}
//         <div>
//           <div className="flex items-center mb-8">
//             <h2 className="text-2xl font-bold tracking-wider text-gray-300 mr-4">INTERESTS</h2>
//             <div className="h-px bg-gray-600 flex-1"></div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {interests.map((interest, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 
//                          hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 
//                          hover:transform hover:scale-105 cursor-pointer group"
//               >
//                 <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 
//                                ${interest.bgColor} group-hover:scale-110 transition-transform duration-300`}>
//                   <span className={interest.color}>
//                     {interest.icon}
//                   </span>
//                 </div>
//                 <h3 className="text-white font-semibold text-lg leading-tight">
//                   {interest.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// function AboutContent
//   () {

//   return <AboutSection />;
// }

// export default AboutContent
//   ;

'use client';
import React from 'react';
import { Globe, Database, Camera, FileText, Code2, BarChart3, Brain, Image } from 'lucide-react';
import InterestsBar from './InterestsBar';

const AboutSection = () => {
  const interests = [
    {
      title: 'Software Development',
      icon: <Globe className="w-6 h-6" />,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      title: 'Machine Learning',
      icon: <Database className="w-6 h-6" />,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      title: 'Computer Vision',
      icon: <Camera className="w-6 h-6" />,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      title: 'Natural Language Processing',
      icon: <FileText className="w-6 h-6" />,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      title: 'Software Engineering',
      icon: <Code2 className="w-6 h-6" />,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      title: 'Visualization',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      title: 'Algorithms',
      icon: <Brain className="w-6 h-6" />,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      title: 'Image Processing',
      icon: <Image className="w-6 h-6" />,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    }
  ];

  const handleScroll = () => {
    const targetElement = document.getElementById('contact1');
    targetElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='about' className="min-h-screen bg-gray-900 text-white py-12 px-4 md:py-9 lg:py-13 xl:py-15 relative">
      {/* Background Title */}
      <h1
        className="absolute top-8 left-1/2 transform -translate-x-1/2 select-none z-0 uppercase"
        style={{
          WebkitTextStrokeWidth: '1px',
          WebkitTextStrokeColor: '#fff',
          fontSize: 'clamp(0.1rem, 7vw, 5rem)',
          color: 'transparent',
          margin: 0,
          fontWeight: 600,
          lineHeight: 1,
          opacity: 0.1,
          letterSpacing: 'clamp(0.2rem, 0.8rem, 1.2rem)',
        }}
      >
        ABOUT
      </h1>
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="relative z-10 text-center mb-10 sm:mt-10">
          <div className="flex justify-center items-center mt-2 gap-1 md:gap-4">
            <div className="w-6 md:w-9 lg:w-11 xl:w-12 h-1 bg-red-500" />
            <h2 className="text-md  md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">ABOUT ME</h2>
            <div className="w-6 md:w-9 lg:w-11 xl:w-12 h-1 bg-red-500" />
          </div>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wider text-gray-300 mr-4">INTRO MYSELF</h2>
            <div className="h-px bg-gray-600 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-64 h-64 sm:w-140 sm:h-110 rounded-lg overflow-hidden shadow-2xl border-2 border-red-500/30">
                <img
                  src=""
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bio and Contact Info */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                Focused and enthusiastic developer with a keen interest in software development and artificial
                intelligence. By comprehensive exposure to the underlying concepts and applying them vividly
                to various projects, my love for these domains came into being. I am a passionate individual
                who thrives to build and apply algorithms to solve real-world industry problems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">▶</span>
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white">Rajesh Kumar.J</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">▶</span>
                  <span className="text-gray-400">DOB:</span>
                  <span className="text-white">14-03-2001</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">▶</span>
                  <span className="text-gray-400">Pincode:</span>
                  <span className="text-white">629166</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">▶</span>
                  <span className="text-gray-400">City:</span>
                  <span className="text-white">Kanyakumari,Nagercoil</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">▶</span>
                  <span className="text-gray-400">Phone:</span>
                  <span className="text-white">+91 890393****</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">▶</span>
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white">checkmycv@gmail.com</span>
                </div>
              </div>
               <div className="rounded-lg py-3 shadow-lg">
                 <InterestsBar />
               </div>
              <div>
                <button
                  onClick={handleScroll}
                  className="bg-white text-black hover:bg-red-700 hover:text-white cursor-pointer px-6 py-3 rounded-lg font-semibold transition-colors duration-300 w-full sm:w-auto text-sm sm:text-base shadow-lg hover:shadow-red-500/20"
                >
                  Contact me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <div className="flex items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wider text-gray-300 mr-4">INTERESTS</h2>
            <div className="h-px bg-gray-600 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 sm:p-6 
                         hover:bg-gray-800/70 hover:border-red-500/30 transition-all duration-300 
                         hover:transform hover:scale-[1.02] cursor-pointer group"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg mb-3 sm:mb-4 
                               ${interest.bgColor} group-hover:bg-red-500/20 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`${interest.color} group-hover:text-red-400`}>
                    {interest.icon}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg leading-tight">
                  {interest.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;