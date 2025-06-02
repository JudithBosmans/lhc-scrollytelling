import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Search() {
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
        <div className="parallax4Image4">
          <motion.img
            style={{ x: zoomMove }}
            src="/images/4_SEARCH.png"
            alt="Higgs Field Image"
          />
        </div>
      </div>
    </div>
  );
}
