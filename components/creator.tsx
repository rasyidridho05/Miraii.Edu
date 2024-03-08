import React from "react";
import { CreatorType } from "@/type/creator";
import { creators } from "@/data/creator";
import Profile from "./card/profile";

const Creator = () => {
  return (
    <section id="creator" className="flex justify-center">
      <div className="container max-w-screen-xl px-4 py-6">
        <h1 className="font-semibold text-4xl">Creator</h1>
        <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-8">
          {creators.map((e: CreatorType, i: number) => (
            <Profile key={i} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creator;
