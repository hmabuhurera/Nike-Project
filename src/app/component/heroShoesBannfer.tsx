import Image from "next/image"
import React from "react"





function HeroSection() {
  return (
    <div className=" mt-2 ">     {/* <div className=" bg-cover bg-center bg-no-repeat h-[700px] flex items-center justify-center relative"> */}

      <Image src={require("../../../public/nphoto/hero.png")} alt="Nike Air Max Pulse" className="" />
    </div>
    // </div>
  );
}

export default HeroSection

// import React from 'react';
// import Image from 'next/image';

// function HeroSection() {
//   return (
//     <div className="relative">
//       <div 
//         className="bg-cover bg-center bg-no-repeat h-[700px] md:h-screen flex items-center justify-center"
//         style={{ 
//           backgroundImage: `url(${require("../../../public/nphoto/hero.png")})` 
//         }}
//       >
//         {/* 
//           Since you're already using background-image, 
//           the Image component is redundant. 
//           You can remove it. 
//         */}
        
          // <Image 
          //   src={require("../../../public/nphoto/hero.png")} 
          //   alt="Nike Air Max Pulse" 
          //   className="absolute top-1/2 left-1/2 bottom-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2" 
          // /> 
       
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

// import React from 'react';
// import Image from 'next/image';
// function HeroSection() {
//   return (
//     <div className="relative">
//       <div 
//         className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center" 
//         // style={{ 
//         //   backgroundImage: `url(${require("../../../public/nphoto/hero.png")})` 
//         // }}
//       /> 
//                 <Image 
//             src={require("../../../public/nphoto/hero.png")} 
//             alt="Nike Air Max Pulse" 
//             className="absolute top-1/2 left-1/2 bottom-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2" 
//           /> 
       

//     </div>
//   );
// }

// export default HeroSection;