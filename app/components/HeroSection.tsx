import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                {`Hello I'm Tanner`}
            </h1>
            <p className="text-white text-lg lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit neque accusantium minus beatae nesciunt cupiditate veritatis repudiandae. Illo id expedita pariatur, blanditiis soluta nam ducimus, voluptatem officiis illum, dolorum voluptas.
            </p>
        </div>
        <div className="col-span-5">
            <Image
                src="/images/hero.jpg"
                alt="hero image"
                width={300}
                height={300}
            />
        </div>
    </section>
  );
};

export default HeroSection;