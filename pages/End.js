import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function End() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const slowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const mediumY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    // <div className="parallax8" ref={targetRef}>
    //   <motion.div>
    //     <button className="button">Go back up</button>
    //   </motion.div>
    // </div>
  );
}
