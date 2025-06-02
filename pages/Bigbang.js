import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function BigBang() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const slowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const mediumY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div className="parallax1" ref={targetRef}>
      <motion.div className=" parallax1Header1">
        <motion.p className="parallax1Subtitle1" style={{ y: fastY }}>
          1. the big bang
        </motion.p>
        <div className="parallax1Text1">
          <motion.p className="text" style={{ y: fastY }}>
            About <span className="italic">13.8 billion </span>years ago, the
            universe was a tiny dense fireball that
            <span className="italic"> exploded</span>.
          </motion.p>
          <motion.p className="text" style={{ y: fastY }}>
            Scientists refer to that event as the
            <span className="italic"> big bang</span>. Seconds after the Big
            Bang
            <span className="italic"> particles</span> were
            <span className="italic"> moving</span> at the
            <span className="italic"> speed of light</span>.
          </motion.p>
        </div>
      </motion.div>
      <div className="parallax1Image1">
        <motion.img
          style={{ y: slowY }}
          src="/images/1_BIG_BANG.png"
          alt="Big_Bang_Image"
        />
      </div>
    </div>
  );
}
