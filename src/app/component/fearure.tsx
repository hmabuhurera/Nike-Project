import Image from "next/image";
// components/FlightEssentials.js
const Feature = () => {
    return (
        <div className=" px-5 ">
        {/* Container */}
        <div className="">
          <h2 className="lg:font-bold lg:text-6xl  mb-4 text-2xl font-bold">Featured</h2>
          <div className="w-[1344] h-[700] flex-1 bg-white text-black  flex flex-col items-center">
            <Image
              src= {require("../../../public/nphoto/feature.png")} // Replace with your actual image path
              alt="Jordan Close-up"
              
              className=""
            />
          </div>
        </div>
  
        {/* Footer */}
        <div className="text-center py-8 px-4">
          <h2 className="w-[512] h-[60] text-4xl font-bold uppercase mb-4">
          STEP INTO WHAT FEELS GOOD
          </h2>
          <p className="w-[531] h-[24] text-lg text-black max-w-xl mx-auto mb-6">
          Cause everyone should know the feeling of running in that perfect pair.</p>
          <button className="bg-black text-white rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:bg-gray-500 transition">
            Find Yoyr Shoe
          </button>
        </div>
      </div>
    );
  };
  
  export default Feature;
