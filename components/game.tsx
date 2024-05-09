import React from "react";
import { projects } from "@/data/game";
import { GameType } from "@/type/game";
import Project from "./card/project";
import Image from "next/image";

const Game = () => {
  return (
    <section id="game" className="relative flex justify-center">
      <div className="container max-w-screen-xl px-4 py-6">
        <div className="flex flex-col justify-center">
          <h1 className="font-semibold text-4xl text-center">Game Kami</h1>
          <p className="text-center text-xl font-light text-gray-100 leading-8">
            Dengan game edukasi kami, belajar akan terasa lebih menyenangkan dan
            menarik! Temukan dunia baru yang penuh petualangan, tantangan, dan
            pengetahuan yang menarik di setiap sudut.
          </p>
        </div>
        <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-8">
          {projects.map((e: GameType, i: number) => (
            <Project key={i} {...e} />
          ))}
        </div>
      </div>
      <Image src="/images/additional/cloud.png" alt="..loading" width={360} height={360} className="absolute -z-10 -top-40 -right-40"/>
      <Image src="/images/additional/cloud.png" alt="..loading" width={480} height={480} className="absolute -z-10 bottom-60 -left-60"/>
      <Image src="/images/additional/cloud.png" alt="..loading" width={540} height={540} className="absolute -z-10 -bottom-20 -right-60"/>
    </section>
  );
};

export default Game;
