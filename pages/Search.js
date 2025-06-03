import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Search() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const slowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const mediumY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const zoomMove1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["-120vw", "10vw"]
  );
  const zoomMove2 = useTransform(
    scrollYProgress,
    [0.15, 0.4],
    ["-130vw", "0vw"]
  );
  const zoomMove3 = useTransform(
    scrollYProgress,
    [0.2, 0.45],
    ["-140vw", "-30vw"]
  );
  const zoomMove4 = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    ["-150vw", "-40vw"]
  );

  return (
    <div className="section parallax4" ref={targetRef}>
      <div className="stickyZoom">
        <motion.div className="parallax4 parallax4Header4">
          <motion.p className="parallax4Subtitle4" style={{ y: fastY }}>
            4. the search for the higgs boson
          </motion.p>
          <div className="parallax4Text4">
            <motion.p className="text" style={{ y: fastY }}>
              The Higgs boson is <span className="italic"> unstable</span>,
              which means it <span className="italic"> doesn’t exist</span>
              naturally <span className="italic"> for long</span>.
            </motion.p>
            <motion.p className="text" style={{ y: fastY }}>
              To find it, scientists had to recreate
              <span className="italic"> extreme conditions</span>,similar to
              those just after the <span className="italic"> Big Bang</span>.
            </motion.p>
          </div>
        </motion.div>
        <div className="imageCont4">
          <div className="parallax4Image4">
            <motion.img
              style={{ x: zoomMove1 }}
              src="/images/4_SEARCH/1.png"
              alt="Higgs Field Image"
            />
          </div>
          <div className="parallax4Image41">
            <motion.img
              style={{ x: zoomMove2 }}
              src="/images/4_SEARCH/2.png"
              alt="Higgs Field Image"
            />
          </div>
          <div className="parallax4Image42">
            <motion.img
              style={{ x: zoomMove3 }}
              src="/images/4_SEARCH/3.png"
              alt="Higgs Field Image"
            />
          </div>
          <div className="parallax4Image43">
            <motion.img
              style={{ x: zoomMove4 }}
              src="/images/4_SEARCH/4.png"
              alt="Higgs Field Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
