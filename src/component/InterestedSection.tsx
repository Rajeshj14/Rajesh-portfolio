import React from "react";

const InterestedSection = () => {

    const handleScrolled = () =>{
      const myNameIs = document.getElementById("hireme")
      myNameIs?.scrollIntoView({behavior:'smooth'})
    }

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed text-white py-32"
      style={{ backgroundImage: "url('/hiremeimage.jpg')" }}
    >
      {/* Fully white overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-55 z-10" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Interested in working with me?
        </h2>
        <button onClick={handleScrolled} className="bg-red-500 text-white hover:bg-red-600 text-black font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105">
          Hire Me!
        </button>
        {/* <button className="bg-red-500 text-white text-lg font-semibold px-6 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 cursor-pointer">
          Hire Me
        </button> */}
      </div>
    </section>
  );
};

export default InterestedSection;