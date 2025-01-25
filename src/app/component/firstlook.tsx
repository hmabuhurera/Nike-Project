
// import React from 'react';

// function HeroSection1() {
//   return (
//     <div className="bg-white h-229 w-1008 flex flex-col items-center justify-center">
//       <h1 className="text-black font w-[68] h-[24] mb-4">First Look</h1>
//       <h1 className="text-black font-medium text-4xl h-[60] w-[574] pb-2">NIKE AIR MAX PULSE</h1>
//       <p className="text-black text-lg">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse </p>
//         <p className="text-black text-lg pb-2">-designed to push you past your limits and help you go to the max.</p>
//       <div className="flex pb-4  ">
//         <button className="bg-black text-white font-bold rounded-full  py-2 px-4 mr-4">Notify Me</button>
//         <button className="bg-black text-white font-bold rounded-full py-2 px-4">Shop Air Max</button>
//       </div>
//     </div>
//   );
// }

// export default HeroSection1;


// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { Product } from 'react-icons/cg';
// import { ProductCard } from ''

// export function GearUpShop() {
//   // Filter out the best products (best1, best2, best3) for the Gear Up section
//   const gearUpProducts = products.filter(product => [4,5,6,7].includes(Number(product.id))); // Cast to number


//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Gear Up.</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-semibold">Shop Men&apos;s</h2>
//             <div className="flex space-x-2">
//               <ChevronLeft className="w-6 h-6 cursor-pointer" />
//               <ChevronRight className="w-6 h-6 cursor-pointer" />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {gearUpProducts.filter(product => product.category === 'men').map(product => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </section>
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-semibold">Shop Women&apos;s</h2>
//             <div className="flex space-x-2">
//               <ChevronLeft className="w-6 h-6 cursor-pointer" />
//               <ChevronRight className="w-6 h-6 cursor-pointer" />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {gearUpProducts.filter(product => product.category === 'women').map(product => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }


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