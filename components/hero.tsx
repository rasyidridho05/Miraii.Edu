import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="" className="w-screen flex justify-center h-screen md:pt-16">
      <div className="relative container max-w-screen-xl px-4 md:px-8 pt-16 md:pt-0">
        <div className=" text-left text-white z-6 flex flex-col gap-4 pt-16 md:pt-0">
          <div className="lg:text-6xl font-bold leading-none md:text-xl">
            Temukan Keseruan Belajar <br />
            Lewat Bermain
          </div>
          <div className="lg:text-2xl md:text-base text-xs font-normal">
            Terkadang, belajar bisa seru! Selamat datang di dunia kami di mana <br />
            kita menjelajahi ilmu sambil bersenang-senang!
          </div>
          <Link href="/#game">
          <button className="bg-white text-Azure600 rounded-full text-center py-3 px-6 text-xl font-semibold hover:bg-Azure600 hover:text-white hover:outline hover:outline-2 hover:outline-white transition-all duration-300">
            Mulai Game
          </button>
          </Link>
        </div>
        <Image src="/images/additional/ufo.png" width={540} height={540} alt="..loading" className="absolute top-20 right-0 md:right-8 -rotate-12 -z-10"/>
        <Image src="/images/additional/ufo.png" width={720} height={720} alt="..loading" className="absolute top-100 left-0 md:right-8 rotate-12 -z-10"/>
      </div>
    </section>
  );
};

export default Hero;
