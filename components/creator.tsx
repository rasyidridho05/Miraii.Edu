import React from "react";
import { CreatorType } from "@/type/creator";
import { creators } from "@/data/creator";
import Profile from "./card/profile";
import Image from "next/image";

const Creator = () => {
  return (
    <section id="creator" className="relative flex justify-center h-screen items-center">
      <Image
        src="/images/additional/plane.png"
        alt=""
        height={360}
        width={360}
        className="absolute top-0 -left-10 -rotate-12 -z-10"
      />
      <div className="container max-w-screen-xl px-4 py-6">
        <h1 className="font-semibold text-4xl text-center">The Creator</h1>
        <p className="text-center text-xl font-light text-gray-100 leading-8">
          Temui orang-orang kreatif dibalik keseruan ini.
        </p>
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
