import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                {`Hello I'm Tanner`}
            </h1>
            <p className="text-white text-lg lg:text-xl mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit neque accusantium minus beatae nesciunt cupiditate veritatis repudiandae. Illo id expedita pariatur, blanditiis soluta nam ducimus, voluptatem officiis illum, dolorum voluptas.
            </p>
            <div>
                <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
                    Hire Me
                    </button>
                <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                    Download Resume
                </button>
           </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-gray-900 w-[400px] h-[400px] relative">
                <Image
                    src="/images/hero-images.png"
                    alt="hero image"
                    className="absolute transform  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                    width={300}
                    height={300}
                />
            </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;