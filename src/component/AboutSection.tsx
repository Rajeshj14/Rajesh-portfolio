// 'use client';

// import React from 'react';
// import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

// const cards = [
//   {
//     title: 'Front-end',
//     description: 'Lorem ipsum dolor sit amet, consectetur',
//     projects: '190 PROJECTS',
//     rotateOnHover: true,
//     textColor: 'text-[#3A0CA3]',
//     iconBg: 'bg-white',
//   },
//   {
//     title: 'Back-end',
//     description: 'Lorem ipsum dolor sit amet, consectetur',
//     projects: '228 PROJECTS',
//     rotateOnHover: true,
//     textColor: 'text-[#FF6B6B]',
//     iconBg: 'bg-[#FF6B6B]',
//   },
//   {
//     title: 'Web architecture',
//     description: 'Lorem ipsum dolor sit amet, consectetur',
//     projects: '105 PROJECTS',
//     rotateOnHover: true,
//     textColor: 'text-[#3A0CA3]',
//     iconBg: 'bg-white',
//   },
// ];

// export default function WhyHireSection() {

//   const handlePush = () => {
//     const targetPushScroll = document.getElementById('letstalk');
//     targetPushScroll?.scrollIntoView({ behavior: 'smooth' })

//   }

//   return (
//     <section className="bg-[#0a1e2c] py-16 px-4 text-white relative">
//       {/* Background Text */}
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
//       <div className="flex flex-col  md:flex-row justify-between items-start max-w-7xl mx-20 my-10 px-8 py-20 gap-10">
//         {/* Left Section */}
//         <div className="max-w-xl space-y-6">
//           <p className="text-white text-xl mb-1">About M<span className="text-red-500">e</span></p>
//           <h2 className="text-5xl font-bold leading-tight">
//             Why you <span className="text-red-500">hire me</span> for your{' '}
//             <span className="text-red-500">next project</span>.?
//           </h2>
//           <p className="text-gray-500 leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
//             sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
//             pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolorem.
//           </p>
//           <button onClick={handlePush} className="bg-red-500 text-white hover:bg-red-600 text-black font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105">
//             Hire Me!
//           </button>
//         </div>

//         {/* Right Section - Cards */}
//         <div className="flex flex-col gap-6 w-full md:w-[430px]">
//           {cards.map((card, index) => {
//             const isBackEnd = card.title === 'Back-end';
//             const isFrontEnd = card.title === 'Front-end';
//             const isWebArchitecture = card.title === 'Web architecture';

//             return (
//               <div
//                 key={index}
//                 className="group flex items-center justify-between p-6 rounded-2xl shadow-md bg-white transition-transform duration-300 hover:-rotate-3 hover:shadow-2xl hover:scale-105"
//               >
//                 <div className="flex items-start gap-4">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2721/2721291.png"
//                     alt="icon"
//                     className="w-20 h-20 object-cover"
//                   />
//                   <div>
//                     <h3
//                       className={`text-xl font-semibold transition-colors duration-300 ${isBackEnd || isFrontEnd || isWebArchitecture
//                           ? 'text-gray-800 group-hover:text-[#FF6B6B]'
//                           : card.textColor
//                         }`}
//                     >
//                       {card.title}
//                     </h3>
//                     <p className="text-gray-500 text-sm">{card.description}</p>
//                     <p className="text-xs tracking-wider text-gray-400 mt-2">{card.projects}</p>
//                   </div>
//                 </div>
//                 <div
//                   className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${(isBackEnd || isFrontEnd || isWebArchitecture)
//                       ? 'bg-white group-hover:bg-[#FF6B6B]'
//                       : card.iconBg
//                     }`}
//                 >
//                   <FaArrowUpRightFromSquare
//                     className={`text-sm transition-colors duration-300 ${isBackEnd || isFrontEnd || isWebArchitecture
//                         ? 'text-[#3A0CA3] group-hover:text-white'
//                         : card.iconBg === 'bg-white'
//                           ? 'text-[#3A0CA3]'
//                           : 'text-white'
//                       }`}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>




//       </div>
//     </section>
//   );
// }


'use client';

import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const cards = [
  {
    title: 'Front-end',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    projects: '190 PROJECTS',
    rotateOnHover: true,
    textColor: 'text-[#3A0CA3]',
    iconBg: 'bg-white',
  },
  {
    title: 'Back-end',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    projects: '228 PROJECTS',
    rotateOnHover: true,
    textColor: 'text-[#FF6B6B]',
    iconBg: 'bg-[#FF6B6B]',
  },
  {
    title: 'Web architecture',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    projects: '105 PROJECTS',
    rotateOnHover: true,
    textColor: 'text-[#3A0CA3]',
    iconBg: 'bg-white',
  },
];

export default function WhyHireSection() {
  const handlePush = () => {
    const targetPushScroll = document.getElementById('letstalk');
    targetPushScroll?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='about' className="bg-[#0a1e2c] py-16 px-4 text-white relative">
      {/* Background Text */}
      <h1
        className="absolute top-8 left-1/2 transform -translate-x-1/2 select-none z-0 uppercase"
        style={{
          WebkitTextStrokeWidth: '1px',
          WebkitTextStrokeColor: '#fff',
          fontSize: '10vw',
          color: 'transparent',
          margin: 0,
          fontWeight: 600,
          lineHeight: 1,
          opacity: 0.05,
          letterSpacing: '0.8rem',
        }}
      >
        ABOUT ME
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto px-4 md:px-8 py-10 gap-10 z-10 relative">
        {/* Left Section */}
        <div className="max-w-xl space-y-6">
          <p className="text-white text-xl mb-1">
            About M<span className="text-red-500">e</span>
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Why you <span className="text-red-500">hire me</span> for your{' '}
            <span className="text-red-500">next project</span>.?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
            vel,Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit, dolorem.
          </p>
          <button
            onClick={handlePush}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105"
          >
            Hire Me!
          </button>
        </div>

        {/* Right Section - Cards */}
        <div className="flex flex-col gap-6 w-full md:max-w-sm">
          {cards.map((card, index) => {
            const isBackEnd = card.title === 'Back-end';
            const isFrontEnd = card.title === 'Front-end';
            const isWebArchitecture = card.title === 'Web architecture';

            return (
              <div
                key={index}
                className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl shadow-md bg-white transition-transform duration-300 hover:-rotate-3 hover:shadow-2xl hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2721/2721291.png"
                    alt="icon"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                  />
                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                        isBackEnd || isFrontEnd || isWebArchitecture
                          ? 'text-gray-800 group-hover:text-[#FF6B6B]'
                          : card.textColor
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{card.description}</p>
                    <p className="text-xs tracking-wider text-gray-400 mt-2">
                      {card.projects}
                    </p>
                  </div>
                </div>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isBackEnd || isFrontEnd || isWebArchitecture
                      ? 'bg-white group-hover:bg-[#FF6B6B]'
                      : card.iconBg
                  }`}
                >
                  <FaArrowUpRightFromSquare
                    className={`text-sm transition-colors duration-300 ${
                      isBackEnd || isFrontEnd || isWebArchitecture
                        ? 'text-[#3A0CA3] group-hover:text-white'
                        : card.iconBg === 'bg-white'
                        ? 'text-[#3A0CA3]'
                        : 'text-white'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
