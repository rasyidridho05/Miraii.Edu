import React from "react";
import { projects } from "@/data/game";
import { GameType } from "@/type/game";
import Project from "./card/project";

const Game = () => {
  return (
    <section id="game" className="flex justify-center">
      <div className="container max-w-screen-xl px-4 py-6">
        <h1 className="font-semibold text-4xl text">Games</h1>
        <p className="">Lorem Ipsum</p>
        <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-8">
          {projects.map((e: GameType, i:number)=>(
            <Project key={i} {...e}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Game;
