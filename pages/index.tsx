import { NextPage } from "next";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Game from "@/components/game";
import Creator from "@/components/creator";
import End from "@/components/end";

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Game />
        <Creator />
        <End />
      </main>
    </>
  );
};

export default Index;
