import Image from "next/image";

const NikeAppBanner = () => {
    return (
      <section className="w-[1440] h-[58] bg-slate-100 text-white pb-1 pt-1 py-8 px-4 md:px-8 flex justify-center items-center">
        <div className="max-w-7xl   flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-black text-2xl md:text-3xl font-bold flex justify-center items-center">Hello Nike App</h1>
            <p className="text-black mt-2">
              Download the app to access everything Nike.{""}
              <a href="#" className="text-black underline hover:text-white">Get Your Great</a>
            </p>
          </div>
          
          {/* App Download Images
          <div className="flex space-x-4">
            {/* Add the app store and play store images in the public folder */}
            {/* <Image
              src="/app-store.png"
              alt="App Store"
              className="h-12 cursor-pointer"
            />
            <Image
              src="/play-store.png"
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
          </div>  */}
        </div>
      </section>
    );
  };
  
  export default NikeAppBanner;
  