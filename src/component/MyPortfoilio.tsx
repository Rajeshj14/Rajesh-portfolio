// import React from 'react';

// export default function PortfolioCards() {
//   return (
//     <section id="blog" className="bg-[#00162A] py-16 px-4 text-white relative">
//       {/* Header */}
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
//         PORTFOLIO
//       </h1>
//       <div className="relative z-10 text-center mb-8 mt-12">
//         <div className="flex justify-center items-center gap-4">
//           <div className="w-12 h-1 bg-red-500" />
//           <h2 className="text-3xl md:text-4xl font-bold text-white">MY PORTFOLIO</h2>
//           <div className="w-12 h-1 bg-red-500" />
//         </div>
//       </div>
//       <div className="grid grid-cols-3 gap-8 p-8  min-h-screen mx-13 items-center justify-center">
//         {/* First Card - INGRAMA Business Cards */}
//         <div className="group  rounded-2xl shadow-lg w-80 h-96 relative overflow-hidden cursor-pointer">
//           {/* Background image - always visible */}
//           <div className="absolute inset-0 bg-cover bg-center rounded-2xl z-10"
//             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")' }}>
//           </div>
//         </div>

//         {/* Fourth Card - Creative Design */}
//         <div className="group bg-white rounded-2xl shadow-lg w-80 h-96 relative overflow-hidden cursor-pointer">
//           {/* Background image - always visible */}
//           <div className="absolute inset-0 bg-cover bg-center rounded-2xl z-10"
//             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")' }}>
//           </div>

//           {/* Dark overlay on hover */}
//           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-2xl"></div>

//           {/* Hover text - only visible on hover */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//             <h2 className="text-white text-3xl font-bold">CREATIVE DESIGN</h2>
//           </div>

//           {/* Arrow button */}
//           <div className="absolute top-6 right-6 z-20">
//             <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
//               <span className="text-white text-sm">→</span>
//             </div>
//           </div>

//           {/* Card content - visible by default, hidden on hover */}
//           <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
//             <div className="space-y-2">
//               <h3 className="text-white font-semibold text-lg">Creative Design</h3>
//               <p className="text-white/80 text-sm">Visual Arts</p>
//             </div>
//           </div>
//         </div>

//         {/* Fifth Card - Web Development */}
//         <div className="group bg-white rounded-2xl shadow-lg w-80 h-96 relative overflow-hidden cursor-pointer">
//           {/* Background image - always visible */}
//           <div className="absolute inset-0 bg-cover bg-center rounded-2xl z-10"
//             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")' }}>
//           </div>

//           {/* Dark overlay on hover */}
//           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-2xl"></div>

//           {/* Hover text - only visible on hover */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//             <h2 className="text-white text-3xl font-bold">WEB DEVELOPMENT</h2>
//           </div>

//           {/* Arrow button */}
//           <div className="absolute top-6 right-6 z-20">
//             <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
//               <span className="text-white text-sm">→</span>
//             </div>
//           </div>

//           {/* Card content - visible by default, hidden on hover */}
//           <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
//             <div className="space-y-2">
//               <h3 className="text-white font-semibold text-lg">Web Development</h3>
//               <p className="text-white/80 text-sm">Full Stack</p>
//             </div>
//           </div>
//         </div>

//         {/* Sixth Card - Mobile App */}
//         <div className="group bg-white rounded-2xl shadow-lg w-80 h-96 relative overflow-hidden cursor-pointer">
//           {/* Background image - always visible */}
//           <div className="absolute inset-0 bg-cover bg-center rounded-2xl z-10"
//             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")' }}>
//           </div>

//           {/* Dark overlay on hover */}
//           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-2xl"></div>

//           {/* Hover text - only visible on hover */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//             <h2 className="text-white text-3xl font-bold">MOBILE APP</h2>
//           </div>

//           {/* Arrow button */}
//           <div className="absolute top-6 right-6 z-20">
//             <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
//               <span className="text-white text-sm">→</span>
//             </div>
//           </div>

//           {/* Card content - visible by default, hidden on hover */}
//           <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
//             <div className="space-y-2">
//               <h3 className="text-white font-semibold text-lg">Mobile App</h3>
//               <p className="text-white/80 text-sm">iOS & Android</p>
//             </div>
//           </div>

//           {/* Dark overlay on hover */}
//           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-2xl"></div>

//           {/* Hover text - only visible on hover */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//             <h2 className="text-white text-3xl font-bold">INGRAMA</h2>
//           </div>

//           {/* Arrow button */}
//           <div className="absolute top-6 right-6 z-20">
//             <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
//               <span className="text-white text-sm">→</span>
//             </div>
//           </div>

//           {/* Card content - visible by default, hidden on hover */}
//           <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
//             <div className="space-y-2">
//               <h3 className="text-white font-semibold text-lg">Business Cards</h3>
//               <p className="text-white/80 text-sm">Brand Identity</p>
//             </div>
//           </div>
//         </div>

//         {/* Second Card - Workspace */}
//         <div className="group bg-white rounded-2xl shadow-lg w-80 h-96 relative overflow-hidden cursor-pointer">
//           {/* Background image - always visible */}
//           <div className="absolute inset-0 bg-cover bg-center rounded-2xl z-10"
//             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")' }}>
//           </div>

//           {/* Dark overlay on hover */}
//           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-2xl"></div>

//           {/* Hover text - only visible on hover */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//             <h2 className="text-white text-3xl font-bold">WORKSPACE</h2>
//           </div>

//           {/* Arrow button */}
//           <div className="absolute top-6 right-6 z-20">
//             <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
//               <span className="text-white text-sm">→</span>
//             </div>
//           </div>

//           {/* Card content - visible by default, hidden on hover */}
//           <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
//             <div className="space-y-2">
//               <h3 className="text-white font-semibold text-lg">Workspace</h3>
//               <p className="text-white/80 text-sm">Interior Design</p>
//             </div>
//           </div>
//         </div>

//         {/* Third Card - Sixth Project */}
//         <div className="group bg-white rounded-2xl shadow-lg w-80 h-96 relative overflow-hidden cursor-pointer">
//           {/* Background image - always visible */}
//           <div className="absolute inset-0 bg-cover bg-center rounded-2xl z-10"
//             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80")' }}>
//           </div>

//           {/* Dark overlay on hover */}
//           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-2xl"></div>

//           {/* Hover text - only visible on hover */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//             <h2 className="text-white text-3xl font-bold">SIXTH PROJECT</h2>
//           </div>

//           {/* Arrow button */}
//           <div className="absolute top-6 right-6 z-20">
//             <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
//               <span className="text-white text-sm">→</span>
//             </div>
//           </div>

//           {/* Card content - visible by default, hidden on hover */}
//           <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
//             <div className="space-y-2">
//               <h3 className="text-white font-semibold text-lg">Sixth Project</h3>
//               <p className="text-white/80 text-sm">SEO & Marketing</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';

export default function PortfolioCards() {
  return (
    <section id="portfolio" className="bg-[#00162A] py-8 md:py-16 px-4 text-white relative">
      {/* Background Text */}
      <h1
        className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 select-none z-0 uppercase"
        style={{
          WebkitTextStrokeWidth: '1px',
          WebkitTextStrokeColor: '#fff',
          fontSize: 'clamp(2rem, 7vw, 5rem)',
          color: 'transparent',
          margin: 0,
          fontWeight: 600,
          lineHeight: 1,
          opacity: 0.1,
          letterSpacing: '0.8rem',
        }}
      >
        PORTFOLIO
      </h1>
      
      {/* Header */}
      <div className="relative z-10 text-center mb-8 mt-12 md:mt-16">
        <div className="flex justify-center items-center gap-2 md:gap-4">
          <div className="w-8 md:w-12 h-1 bg-red-500" />
          <h2 className="text-2xl md:text-4xl font-bold text-white">MY PORTFOLIO</h2>
          <div className="w-8 md:w-12 h-1 bg-red-500" />
        </div>
      </div>
      
      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 min-h-screen items-center justify-center">
        {/* Portfolio Card Component - Reusable for all cards */}
        {[
          {
            id: 1,
            title: "INGRAMA",
            subtitle: "Business Cards",
            category: "Brand Identity",
            image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          },
          {
            id: 2,
            title: "WORKSPACE",
            subtitle: "Workspace",
            category: "Interior Design",
            image: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          },
          {
            id: 3,
            title: "SIXTH PROJECT",
            subtitle: "Sixth Project",
            category: "SEO & Marketing",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
          },
          {
            id: 4,
            title: "CREATIVE DESIGN",
            subtitle: "Creative Design",
            category: "Visual Arts",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          },
          {
            id: 5,
            title: "WEB DEVELOPMENT",
            subtitle: "Web Development",
            category: "Full Stack",
            image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          },
          {
            id: 6,
            title: "MOBILE APP",
            subtitle: "Mobile App",
            category: "iOS & Android",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          }
        ].map((item) => (
          <PortfolioCard 
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

// Reusable Portfolio Card Component
type PortfolioCardProps = {
  title: string;
  subtitle: string;
  category: string;
  image: string;
};

function PortfolioCard({ title, subtitle, category, image }: PortfolioCardProps) {
  return (
    <div className="group rounded-xl md:rounded-2xl shadow-lg w-full h-64 sm:h-72 md:h-80 lg:h-96 relative overflow-hidden cursor-pointer mx-auto">
      {/* Background image - always visible */}
      <div 
        className="absolute inset-0 bg-cover bg-center rounded-xl md:rounded-2xl z-10 transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl md:rounded-2xl"></div>

      {/* Hover text - only visible on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 px-4">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center">{title}</h2>
      </div>

      {/* Arrow button */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-red-400 rounded-full flex items-center justify-center">
          <span className="text-white text-xs sm:text-sm">→</span>
        </div>
      </div>

      {/* Card content - visible by default, hidden on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl">{subtitle}</h3>
          <p className="text-white/80 text-xs sm:text-sm">{category}</p>
        </div>
      </div>
    </div>
  );
}