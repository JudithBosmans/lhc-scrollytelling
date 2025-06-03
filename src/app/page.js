"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "motion/react";

import BigBang from "../../pages/Bigbang";
import HiggsField from "../../pages/HiggsField";
import WhyMatters from "../../pages/WhyMatters";
import Search from "../../pages/Search";
import Discovery from "../../pages/Discovery";
import LHC from "../../pages/lhc";
import End from "../../pages/lhc";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const [hasPlayed, setHasPlayed] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      if (!hasPlayed && audioRef.current) {
        audioRef.current.play().catch((e) => {
          console.warn("Playback failed:", e);
        });
        setHasPlayed(true);
        window.removeEventListener("click", handleClick);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [hasPlayed]);

  return (
    <div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleY: scrollYProgress,
          position: "fixed",
          top: 3,
          bottom: 3,
          left: 5,
          width: 5,
          originY: 0,
          backgroundColor: "black",
        }}
      />

      <audio ref={audioRef} src="/audio/BrianMay.mp3" preload="auto" />

      <div className="scrollText">
        <div
          className="scrollItem"
          onClick={() =>
            document
              .getElementById("bigbang")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="scrollNumber">01.</span>
          <span className="scrollLabel">BIG BANG</span>
        </div>
        <div
          className="scrollItem"
          onClick={() =>
            document
              .getElementById("higgs")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="scrollNumber">02.</span>
          <span className="scrollLabel">HIGGS FIELD</span>
        </div>
        <div
          className="scrollItem"
          onClick={() =>
            document
              .getElementById("why")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="scrollNumber">03.</span>
          <span className="scrollLabel">WHY</span>
        </div>
        <div
          className="scrollItem"
          onClick={() =>
            document
              .getElementById("search")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="scrollNumber">04.</span>
          <span className="scrollLabel">SEARCH</span>
        </div>
        <div
          className="scrollItem"
          onClick={() =>
            document
              .getElementById("discovery")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="scrollNumber">05.</span>
          <span className="scrollLabel">DISCOVERY</span>
        </div>
        <div
          className="scrollItem"
          onClick={() =>
            document
              .getElementById("lhc")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="scrollNumber">06.</span>
          <span className="scrollLabel">LHC</span>
        </div>
        <div
          className="scrollItem"
          onClick={() =>
            document
              .getElementById("end")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="scrollNumber">07.</span>
          <span className="scrollLabel">GOD PARTICLE</span>
        </div>
      </div>

      <div>
        <header className="titleHeader">
          <h1>The God Particle</h1>
          <h2>
            By <span className="italic">Judith Bosmans</span>, <br />
            based on <span className="italic">Suzie Sheehy’s</span> text
          </h2>
        </header>
      </div>

      <div id="bigbang">
        <BigBang />
      </div>
      <div id="higgs">
        <HiggsField />
      </div>
      <div id="why">
        <WhyMatters />
      </div>
      <div id="search">
        <Search />
      </div>
      <div id="discovery">
        <Discovery />
      </div>
      <div id="lhc">
        <LHC />
      </div>
    </div>
  );
}
