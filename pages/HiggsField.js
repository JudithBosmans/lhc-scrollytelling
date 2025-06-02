import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function HiggsField() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const zoomScale = useTransform(scrollYProgress, [0.35, 0.9], [1, 15]);
  const zoomMove = useTransform(
    scrollYProgress,
    [0.35, 0.6],
    ["0px", "-400px"]
  );
  const textZoom = useTransform(scrollYProgress, [0.2, 0.6], [0.01, 1]);

  const slowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const mediumY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div className="section parallax2" ref={targetRef}>
      <div className="stickyZoom">
        <motion.div
          className="parallax2 parallax2Header2"
          style={{ scale: textZoom }}
        >
          <motion.p className="parallax2Subtitle2" style={{ y: fastY }}>
            2. higgs field emerges
          </motion.p>
          <div className="parallax2Text2">
            <motion.p className="text" style={{ y: fastY }}>
              An <span className="italic">invisible field </span>gave mass to
              fundamental particles, shaping the
              <span className="italic"> physical universe.</span>
            </motion.p>
            <motion.p className="text" style={{ y: fastY }}>
              The <span className="italic">Higgs Boson Particle</span> is tied
              to this field. As the universe cooled, just a
              <span className="italic"> trillionth of a second</span> after the
              Big Bang,the<span className="italic"> Higgs field</span> took
              form.
            </motion.p>
          </div>
        </motion.div>
        <div className="parallax2Image2">
          <motion.img
            style={{ scale: zoomScale, x: zoomMove, y: slowY }}
            src="/images/2_HIGGS_FIELD.png"
            alt="Higgs Field Image"
          />
        </div>
      </div>
    </div>
  );
}
