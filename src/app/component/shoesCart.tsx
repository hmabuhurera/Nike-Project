// "use client";

// import { useRouter } from "next/router";
// import { useRef } from "react";
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

// export default function ShoeCart() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
  

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   const products = [
//     {
//       id: 1,
//       name: "Nike Air Max Pulse",
//       category: "Women's Shoes",
//       price: "₹ 13,995",
//       image: "/nphoto/shoes1.png",
//     },
//     {
//       id: 2,
//       name: "Nike Air Max 97 SE",
//       category: "Men's Shoes",
//       price: "₹ 16,995",
//       image: "/nphoto/shoes1.png",
//     },
//     {
//       id: 3,
//       name: "Nike Air Max 270",
//       category: "Women's Shoes",
//       price: "₹ 12,995",
//       image: "/nphoto/shoes2.png",
//     },
//     {
//       id: 4,
//       name: "Nike Air Max Flyknit",
//       category: "Men's Shoes",
//       price: "₹ 14,995",
//       image: "/nphoto/shoes2.png",
//     },
//   ];

//   return (
//     <div className="min-h-screen[100px] bg-white">
//       <h1 className=" text-2xl font-bold text-gray-800 text-start mb-8 ml-5">
//         Best of Air Max
//       </h1>

//       <div className="relative ">
//         {/* Shop + Buttons at Top */}
//         <div className="absolute top-[-65px] t-0 right-0  flex items-center justify-between px-6 z-10">
          
//           <div className="flex  space-x-2 ">
//           <p className="font-medium text-gray-800 pt-2 ">Shop</p>
//             {/* Left Button */}
//             <button
//               onClick={scrollLeft}
//               className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300 focus:outline-none"
//             >
//               <MdOutlineKeyboardArrowLeft size={24} />
//             </button>
//             {/* Right Button */}
//             <button
//               onClick={scrollRight}
//               className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300 focus:outline-none"
//             >
//               <MdOutlineKeyboardArrowRight size={24} />
//             </button>
//           </div>
//         </div>

//         {/* Product Scroll Container */}
//         <div
//           ref={scrollContainerRef}
//           className="mt-8 flex space-x-6 overflow-x-scroll px-6 scrollbar-hide" // ADDED scrollbar-hide CLASS
//         >
//           {products.map((product) => (
//             <div
//               key={product.id}
            
//               className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 min-w-[300px]"
//             >
//               {/* Product Image */}
//               <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full object-contain"
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm text-gray-500">{product.category}</p>
//                 <div className="mt-2 text-lg font-bold text-gray-900">
//                   {product.price}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"

import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import Image from 'next/image'
import { client } from '../../../sanity/lib/client'
import { four } from '../../../sanity/lib/queries'
import { urlFor } from '../../../sanity/lib/image'

const ShoesCart = () => {
  
 const [product , setProduct] = useState<Product[]>([])

 useEffect(()=>{
  async function fetchproduct() {
    const fetchedProduct : Product[] = await client.fetch(four)
    setProduct(fetchedProduct)
  }
  fetchproduct()
 },[])


  return (
    <div className="max-w-6 mx-auto px-4">
        
      {product.map((product) => (
        <div key={product._id}
         className='grid grid-flow-col-1 sm:grid-flow-col-2 md:grid-flow-col-3 lg:grid-flow-col-4'
        >
          
          <h1 className='text-lg font-semibold mt-4'> {product.productName} </h1>
        className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'
            {product.image && (
            <Image
            src={urlFor(product.image).url()}
            alt="image"
            width={200}
            height={200} />
          )}
        
           <p className='text-gray-100 mt-2'> {product.price}</p>
          
        </div>


        
      )

      )}


    </div>
  );
};

export default ShoesCart;