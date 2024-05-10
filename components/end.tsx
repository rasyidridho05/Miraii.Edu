import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const End = () => {
  return (
    <section id="" className="relative">
      <div className="relative w-screen">
        <Image
          className="w-full h-full object-fill aspect-video -z-10"
          src="/images/additional/pixel-bg.png"
          width={1440}
          height={1024}
          alt="...loading"
          objectFit="cover"
          priority
        />
        <div className="absolute w-full h-full top-2/3 left-1/4 transform -translate-x-1/4 -translate-y-2/3 bg-gradient-to-b from-transparent to-black z-5 opacity-20" />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-2/3 text-white z-10 flex flex-col gap-4 w-3/5 ">
          <div className="lg:text-6xl font-bold leading-none md:text-xl">
            Saatnya Giliranmu!
          </div>
          <div className="lg:text-2xl md:text-base text-xs font-normal">
            Dengan game edukasi kami, belajar akan terasa lebih menyenangkan dan
            menarik! Temukan dunia baru yang penuh petualangan dan pengetahuan.
            Ayoo, bergabunglah dan temukan keseruannya!
          </div>
          <Link href="/#game">
            <button className="bg-white text-Azure600 rounded-full text-center py-3 px-6 text-xl font-semibold hover:bg-Azure600 hover:text-white hover:outline hover:outline-2 hover:outline-white transition-all duration-300">
              Mulai Game
            </button>
          </Link>
        </div>
      </div>
      <footer className="absolute px-4 w-full bottom-0 left-1/4 transform -translate-x-1/4 z-15 bg-gradient-to-b from-transparent to-black flex justify-center">
        <div className="py-6 text-base text-center text-white flex flex-row items-center gap-2">
          Made with
          <Image
            src="/images/additional/heart.svg"
            alt="..loading"
            width={28}
            height={28}
          />
          by <Link href="https://miraii-studio.vercel.app/" className="hover:opacity-80 transition-all duration-300 font-bold" target="_blank">Miraii Studio</Link> for SMP Lab Undiksha Singaraja Bali
        </div>
      </footer>
    </section>
  );
};

export default End;
