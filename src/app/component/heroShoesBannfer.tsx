import Image from "next/image"
import React from "react"





function HeroSection() {
  return (
    <div className=" mt-2 ">     {/* <div className=" bg-cover bg-center bg-no-repeat h-[700px] flex items-center justify-center relative"> */}

      <Image src="/nphoto/hero.png" alt="Nike Air Max Pulse" width={1300} height={600} className="" />
    </div>
    // </div>
  );
}

export default HeroSection

