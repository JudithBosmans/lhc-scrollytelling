import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Search() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const fastY2 = useTransform(scrollYProgress, [0.8, 1], ["0%", "-60%"]);

  const zoomMove1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["-120vw", "16vw"]
  );
  const zoomMove2 = useTransform(
    scrollYProgress,
    [0.15, 0.4],
    ["120vw", "16vw"]
  );

  const textOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "-50%"]);

  const text2Opacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const text2Y = useTransform(scrollYProgress, [0.65, 0.75], ["50%", "0%"]);

  return (
    <div className="section parallax6" ref={targetRef}>
      <div className="stickyZoom">
        <motion.div className="parallax6 parallax6Header6">
          <motion.p
            className="parallax6Subtitle6"
            style={{ y: fastY, opacity: textOpacity }}
          >
            6. LHC
          </motion.p>
          <motion.div
            className="parallax6Text6"
            style={{ opacity: textOpacity, y: textY }}
          >
            <motion.p className="text" style={{ y: fastY }}>
              IN <span className="italic"> 2012</span>, RESEARCHERS AT THE{" "}
              <span className="italic"> LHC</span> STARTED SMASHING{" "}
              <span className="italic"> PROTONS</span> TOGETHER AT NEAR{" "}
              <span className="italic"> LIGHT SPEED</span>. THE ENERGY OF THESE
              COLLISIONS CONFIRMED THE EXISTENCE OF THE{" "}
              <span className="italic"> HIGGS BOSON PARTICLE</span>, THE{" "}
              <span className="italic"> KEY</span>PIECE FOR MODERN-DAY{" "}
              <span className="italic"> PHYSICS</span>.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className="parallax6 parallax6Header7">
          <motion.p
            className="parallax6Subtitle6"
            style={{ y: fastY2, opacity: text2Opacity }}
          >
            7. The God Particle
          </motion.p>

          <motion.div
            className="parallax6Text6"
            style={{ opacity: text2Opacity, y: text2Y }}
          >
            <motion.p className="text" style={{ y: fastY2 }}>
              IN <span className="italic"> 2012</span>, RESEARCHERS AT THE{" "}
              <span className="italic"> LHC</span> STARTED SMASHING{" "}
              <span className="italic"> PROTONS</span> TOGETHER AT NEAR{" "}
              <span className="italic"> LIGHT SPEED</span>. THE ENERGY OF THESE
              COLLISIONS CONFIRMED THE EXISTENCE OF THE{" "}
              <span className="italic"> HIGGS BOSON PARTICLE</span>, THE{" "}
              <span className="italic"> KEY</span>PIECE FOR MODERN-DAY{" "}
              <span className="italic"> PHYSICS</span>.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="imageCont6">
          <div className="parallax6Image6">
            <motion.img
              style={{ x: zoomMove1 }}
              src="/images/1_BIG_BANG.png"
              alt="Higgs Field Image"
            />
          </div>
          <div className="parallax6Image6">
            <motion.img
              style={{ x: zoomMove2 }}
              src="/images/1_BIG_BANG.png"
              alt="Higgs Field Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
