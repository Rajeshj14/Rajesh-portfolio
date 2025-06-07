'use client'

import React, { useState } from 'react';
import PopupModal from './PopupModal';

export default function ProjectComponent() {

  const [isOpenForm, setOpenForm] = useState(false);


  const hireMeForm =() => {
    setOpenForm(!isOpenForm)
  }

  return (
    <div 
      id='hireme'
      className="relative w-full h-80 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #00162A 0%, #0a1e2c 100%)'
      }}
    >
      {/* Decorative background elements */}
      <div  className="absolute top-8 left-1/4 w-2 h-2 bg-orange-500 rounded-full opacity-80"></div>
      <div className="absolute top-16 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70"></div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-12 right-1/4 text-blue-400 opacity-60 text-xs font-mono transform rotate-12">
        010<br/>101<br/>011
      </div>
      
      {/* Main content */}
      <div className="text-center z-10 ">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">project</span>?
        </h1>
        <div>
        <button onClick={()=> setOpenForm(true)} className="bg-red-500 text-white hover:bg-red-600 text-black font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105">
          Let's Talk
        </button>
        <PopupModal isOpen ={isOpenForm} onClose={() => setOpenForm(false)}/>
        </div>
      </div>
      
      {/* Copyright notice */}
      <div className="absolute bottom-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Rajesh Kumar. All rights reserved
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-1/6 w-16 h-16 border border-purple-400 border-opacity-20 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/6 w-12 h-12 border border-blue-400 border-opacity-20 rounded-full"></div>
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
    </div>
  );
}