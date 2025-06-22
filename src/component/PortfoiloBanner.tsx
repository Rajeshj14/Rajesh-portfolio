'use client'

import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaRegHandPointDown, FaBars, FaTimes } from 'react-icons/fa';
import Typewrite from "typewriter-effect"

export default function ZemoProfile() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopOpen, setisPopOPen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeSection, setActiveSection] = useState('home');

  const toggleOpen = () => {
    setisPopOPen(!isPopOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'service', 'portfolio', 'blog', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleScroll = () => {
    const targetElement = document.getElementById('contact1');
    targetElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="min-h-screen bg-slate-900 flex flex-col relative overflow-hidden">
      {/* Navbar */}
      <nav className={`w-full py-3 sm:py-4 z-50 transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-slate-900 shadow-lg' : 'absolute top-0 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="text-xl sm:text-2xl font-bold text-red-500">▲</div>
            <span className="text-lg sm:text-2xl font-bold text-white">
              Rajes<span className="text-red-500">h</span>
              <span className="text-white"> Kuma<span className="text-red-500">r</span></span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex gap-4 xl:gap-8 text-sm font-medium text-gray-400">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'service', label: 'Service' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'blog', label: 'Blog' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <li
                key={id}
                className={`cursor-pointer text-base xl:text-lg transition-colors ${activeSection === id ? 'text-red-500' : 'hover:text-white'
                  }`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button & Hire Me Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Hire Me Button */}
            <button
              onClick={toggleOpen}
              className="bg-red-500 text-white hover:bg-red-600 font-semibold py-2 sm:py-3 px-3 sm:px-6 rounded-lg shadow-md transition duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Hire Me
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white hover:text-red-500 transition-colors p-2"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-700 shadow-lg">
            <ul className="flex flex-col py-4 px-4 space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'service', label: 'Service' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <li
                  key={id}
                  className={`cursor-pointer text-lg py-2 px-4 rounded transition-colors ${activeSection === id ? 'text-red-500 bg-slate-800' : 'text-gray-400 hover:text-white hover:bg-slate-800'
                    }`}
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hire Me Popup */}
      {isPopOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={toggleOpen}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-1"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-800">Hire Me</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm sm:text-base`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm sm:text-base`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Projects Details
                </label>
                <textarea
                  rows={4}
                  required
                  className={`mt-1 block w-full px-3 py-2 border ${errors.project ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm sm:text-base`}
                ></textarea>
                {errors.project && <p className="mt-1 text-sm text-red-600">{errors.project}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Budget Range
                </label>
                <select
                  required
                  className={`mt-1 block w-full px-3 py-2 border ${errors.budget ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm sm:text-base`}
                >
                  <option value="">Select budget range</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k+">$25,000+</option>
                </select>
                {errors.budget && <p className="mt-1 text-sm text-red-600">{errors.budget}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-16 relative pt-16 sm:pt-20 lg:pt-16 pb-8 lg:pb-0">
        {/* Background dots pattern */}
        <div className="absolute inset-0 opacity-10 sm:opacity-20 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${10 + (i % 6) * 15}%`,
                top: `${10 + Math.floor(i / 6) * 18}%`,
                animation: `twinkle ${2 + (i % 3)}s infinite`
              }}
            />
          ))}
        </div>

        {/* Left Content Section */}
        <div className="flex-1 max-w-full lg:max-w-xl z-10 relative order-2 lg:order-1 text-center lg:text-left mt-8 lg:mt-0">
          {/* Vertical RAJESH text - hidden on mobile and tablet */}
          <div className="hidden xl:block absolute -left-8 top-1/1 -translate-y-1/2 text-white text-6xl 2xl:text-8xl font-extrabold opacity-20 z-0"
            style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)', letterSpacing: '0.3em' }}>
            RAJESH
          </div>

          {/* Animated Wave background - simplified for mobile */}
          <div className="hidden lg:block absolute -left-16 top-0 w-full h-full">
            <svg width="600" height="600" viewBox="0 0 600 600" className="absolute -top-20">
              <path
                d="M0,0 Q300,100 400,300 Q350,500 200,600 L0,600 Z"
                fill="rgba(15, 23, 42, 0.8)"
                stroke="rgba(239, 68, 68, 0.3)"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="text-white relative z-10 px-4 lg:px-0 lg:ml-15">
            <p className="text-base sm:text-lg mb-4 font-light">Hi There, I'm</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-tight">
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Rajesh</span>{' '}
              <span className="text-white">Kumar</span>
            </h1>

            {/* Red underline */}
            <div className="w-24 sm:w-32 h-1 bg-red-500 mb-6 sm:mb-8 mx-auto lg:mx-0"></div>
            <div className='flex'>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 sm:mb-8 text-gray-300">
                I'm a{' '}
                <span className="inline-block">
                  <Typewrite
                    options={{
                      strings: [
                        "Software Developer.",
                        "React Developer.",
                        "Python Developer."
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30
                    }}
                  />
                </span>
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 sm:mb-12 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
              The namics of how users interact with interactive elements
              within a user interface flow chart based on container
              proportion.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScroll}
                className="bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Me
              </button>

              <a
                href="./Rajesh-Resume.pdf"
                target="_blank"
                download="RK_CV.pdf"
                className="bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
              >
                Download CV <FaRegHandPointDown />
              </a>
            </div>
          </div>
        </div>

        {/* Right Profile Section */}
        <div className="flex-1 flex justify-center items-center relative order-1 lg:order-2 mb-8 lg:mb-0">
          {/* Animated Wave background - simplified for mobile */}
          <div className="hidden lg:block absolute right-0 top-0 w-full h-full overflow-hidden">
            <svg width="700" height="600" viewBox="0 0 700 600" className="absolute -top-10 right-0">
              <path
                d="M0,400 Q100,450 200,440 T400,460 Q500,450 700,440 L700,600 L0,600 Z"
                fill="rgba(239, 68, 68, 0.1)"
                stroke="rgba(239, 68, 68, 0.4)"
                strokeWidth="3"
              >
                <animate
                  attributeName="d"
                  values="M0,400 Q100,450 200,440 T400,460 Q500,450 700,440 L700,600 L0,600 Z;
                          M0,420 Q100,430 200,460 T400,440 Q500,470 700,420 L700,600 L0,600 Z;
                          M0,400 Q100,450 200,440 T400,460 Q500,450 700,440 L700,600 L0,600 Z"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          {/* Decorative dots - simplified for mobile */}
          <div className="absolute z-20 hidden sm:block">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full opacity-40"
                style={{
                  left: `${-60 + (i % 5) * 25}px`,
                  top: `${-90 + Math.floor(i / 5) * 30}px`,
                }}
              />
            ))}
          </div>

          {/* Profile Image Container */}
          <div className="relative z-30">
            {/* Responsive sizing for borders */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[32rem] xl:h-[32rem] rounded-full border-4 sm:border-6 lg:border-8 border-red-500 flex items-center justify-center relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-[28rem] xl:h-[28rem] rounded-full border-2 sm:border-3 lg:border-4 border-white flex items-center justify-center overflow-hidden">
                <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-[24rem] xl:h-[24rem] rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-red-500 to-slate-600 flex items-center justify-center text-white text-4xl sm:text-6xl lg:text-8xl font-bold">
                    RK
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons - responsive positioning */}
          <div className="absolute right-[-52px] sm:right-4 lg:right-1 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 sm:space-y-4 lg:space-y-6 z-40 ">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <div
                key={index}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-500 text-white transition-all cursor-pointer shadow-lg"
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black hover:text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border wave animation - simplified for mobile */}
      <div className="absolute bottom-0 left-0 w-full h-4 sm:h-6 lg:h-8 z-50">
        <svg width="100%" height="100%" viewBox="0 0 1200 32" className="absolute bottom-0" preserveAspectRatio="none">
          <path
            d="M0,16 Q150,8 300,14 T600,12 Q750,18 900,10 T1200,16"
            fill="none"
            stroke="rgba(239, 68, 68, 0.8)"
            strokeWidth="2"
          >
            <animate
              attributeName="d"
              values="M0,16 Q150,8 300,14 T600,12 Q750,18 900,10 T1200,16;
                      M0,12 Q150,22 300,8 T600,20 Q750,6 900,18 T1200,12;
                      M0,16 Q150,8 300,14 T600,12 Q750,18 900,10 T1200,16"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        
        /* Custom responsive utilities */
        @media (max-width: 640px) {
          .w-126 { width: 16rem; }
          .h-126 { height: 16rem; }
          .w-100 { width: 14rem; }
          .h-100 { height: 14rem; }
          .w-92 { width: 12rem; }
          .h-92 { height: 12rem; }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .w-126 { width: 20rem; }
          .h-126 { height: 20rem; }
          .w-100 { width: 18rem; }
          .h-100 { height: 18rem; }
          .w-92 { width: 16rem; }
          .h-92 { height: 16rem; }
        }
        
        @media (min-width: 1025px) {
          .w-126 { width: 32rem; }
          .h-126 { height: 32rem; }
          .w-100 { width: 28rem; }
          .h-100 { height: 28rem; }
          .w-92 { width: 24rem; }
          .h-92 { height: 24rem; }
        }
      `}</style>
    </div>
  );
}