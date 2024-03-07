import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="">
      <div className="relative w-screen">
        <Image
          className="w-full h-full bg-gradient-to-b from-neutral-400 to-black object-cover aspect-video -z-10"
          src="/images/bg.jpg"
          width={1440}
          height={1024}
          alt="...loading"
          priority
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 flex flex-col gap-4 w-2/5">
          <div className="lg:text-6xl font-bold leading-none md:text-xl font-satoshi">
            awkwk <br />
          </div>
          <div className="lg:text-2xl md:text-base text-xs font-normal font-satoshi">
            Let’s us help you bring your creative idea to life with our
            professional services.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
