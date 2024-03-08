import { NextPage } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Game from "@/components/game";
import Creator from "@/components/creator";

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Game />
        <Creator />
      </main>
      <Footer />
    </>
  );
};

export default Index;
