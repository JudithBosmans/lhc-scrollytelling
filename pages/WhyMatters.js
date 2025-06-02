import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function WhyMatters() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const zoomMove = useTransform(
    scrollYProgress,
    [0.35, 0.6],
    ["0px", "-115vw"]
  );

  const slowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const mediumY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div className="section parallax3" ref={targetRef}>
      <div className="stickyZoom">
        <motion.div className="parallax3 parallax3Header3">
          <motion.p className="parallax3Subtitle3" style={{ y: fastY }}>
            3. why this matters
          </motion.p>
          <div className="parallax3Text3">
            <motion.p className="text" style={{ y: fastY }}>
              Without <span className="italic"> mass</span>, particles would
              never form atoms, molecules, stars or even
              <span className="italic"> life</span>!
            </motion.p>
            <motion.p className="text" style={{ y: fastY }}>
              The Higgs Boson explains how
              <span className="italic"> structure</span> in the
              <span className="italic"> universe</span> is possible.
            </motion.p>
          </div>
        </motion.div>
        <div className="parallax3Image3">
          <motion.img
            style={{ x: zoomMove }}
            src="/images/3_WHY_MATTER.png"
            alt="Higgs Field Image"
          />
        </div>
      </div>
    </div>
  );
}
