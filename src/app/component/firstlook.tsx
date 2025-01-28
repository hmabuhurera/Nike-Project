


import React from 'react';

function HeroSection1() {
  return (
    <div className=''>
    <section 
      className="bg-white flex flex-col items-center justify-center 
               p-6 md:p-10 lg:p-20" 
    >
      <h1 className="text-black font-bold text-2xl mb-4
               md:text-4xl lg:text-6xl">
        First Look
      </h1>
      <h1 className="text-black  text-2xl font-bold mb-4
                md:text-6xl lg:text-6xl">
        NIKE AIR MAX PULSE
      </h1>
      <p className="text-black text-lg mb-6 md:text-xl lg:text-2xl grid-flow-row-dense">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse-designed to push you past your limits and help you go to the max.</p>
      <div className="flex space-x-4">
        <button 
          className="bg-black text-white font-bold rounded-full py-2 px-4 
                   md:py-3 md:px-6 lg:py-4 lg:px-8" 
        >
          Notify Me
        </button>
        <button 
          className="bg-black text-white font-bold rounded-full py-2 px-4 
                   md:py-3 md:px-6 lg:py-4 lg:px-8" 
        >
          Shop Air Max
        </button>
      </div>
    </section>
    </div>
  );
}

export default HeroSection1;