"use client";
import { motion, useScroll } from "motion/react";

import BigBang from "../../pages/Bigbang";
import HiggsField from "../../pages/HiggsField";
import WhyMatters from "../../pages/WhyMatters";
import Search from "../../pages/Search";
import Discovery from "../../pages/Discovery";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 5,
          left: 3,
          right: 3,
          height: 5,
          originX: 0,
          backgroundColor: "black",
        }}
      />
      <div>
        <header className="titleHeader">
          <h1>The God Particle</h1>
          <h2>
            By <span className="italic">Judith Bosmans</span>, <br />
            based on <span className="italic">Suzie Sheehy’s</span> text
          </h2>
        </header>
      </div>
      <BigBang />
      <HiggsField />
      <WhyMatters />
      <Search />
      <Discovery />
    </div>
  );
}
