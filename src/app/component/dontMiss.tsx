import Image from "next/image";
// components/FlightEssentials.js
const FlightEssentials = () => {
    return (
        <div className="px-5">
        {/* Container */}
        <div className="">
          <h2 className="">Don't Miss</h2>
          <div className="w-[1344] h-[700] flex-1 bg-white text-black  flex flex-col items-center">
            <Image
              src= {require("../../../public/nphoto/dontmiss.png")} // Replace with your actual image path
              alt="Jordan Close-up"
              
              className=""
            />
          </div>
        </div>
  
        {/* Footer */}
        <div className="text-center py-8 px-4">
          <h2 className="w-[512] h-[60] text-4xl font-bold uppercase mb-4">
            Flight Essentials
          </h2>
          <p className="w-[531] h-[24] text-lg text-black max-w-xl mx-auto mb-6">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
          <button className="bg-black text-white rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:bg-gray-500 transition">
            Shop
          </button>
        </div>
      </div>
    );
  };
  
  export default FlightEssentials;
  