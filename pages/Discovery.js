import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Discovery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const slowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const mediumY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div className="parallax5" ref={targetRef}>
      <motion.div className=" parallax5Header5">
        <motion.p className="parallax5Subtitle5" style={{ y: fastY }}>
          5. Discovery
        </motion.p>
        <div className="parallax5Text5">
          <motion.p className="text text5" style={{ y: mediumY }}>
            To be able to <span className="italic"> recreate</span> these
            <span className="italic"> conditions</span>, more than{" "}
            <span className="italic">10.000 scientists</span>, from over{" "}
            <span className="italic">100 countries</span>, built a machine that
            <span className="italic"> mimics</span> the Big Bang conditions.
          </motion.p>
          <motion.p className="text" style={{ y: slowY }}>
            One of the <span className="italic"> key scientists</span> was the
            Belgian physhicist <span className="italic"> François Englert</span>
            who published a way to explain the{" "}
            <span className="italic"> mass of elementary particles</span>. Peter
            Higgs published a <span className="italic"> similar</span> paper a
            month after Englerts, which gets{" "}
            <span className="italic"> acredited</span> for finding the Higgs
            Boson particle in 2012.
          </motion.p>
        </div>
      </motion.div>
      <div className="parallax5Imagecont">
        <motion.img
          style={{ y: mediumY }}
          src="/images/5_DISCOVERY/Francois_Enlgert.png"
          alt="Francois Enlgert"
          className="image1"
        />{" "}
        <motion.img
          style={{ y: fastY }}
          src="/images/5_DISCOVERY/Peter_Higgs.png"
          alt="Peter Higgs"
          className="image2"
        />{" "}
        <motion.img
          style={{ y: slowY }}
          src="/images/5_DISCOVERY/Simon_van_der_Meer.png"
          alt="Simon van der Meer"
          className="image3"
        />{" "}
        <motion.img
          style={{ y: slowY }}
          src="/images/5_DISCOVERY/Carlo_Rubbia.png"
          alt="Carlo Rubbia"
          className="image4"
        />{" "}
        <motion.img
          style={{ y: fastY }}
          src="/images/5_DISCOVERY/Fabiola_Gianotti.png"
          alt="Fabiola  Gianotti"
          className="image5"
        />{" "}
        <motion.img
          style={{ y: mediumY }}
          src="/images/5_DISCOVERY/Elisabeth_Schopf.png"
          alt="Elisabeth Schopf"
          className="image6"
        />{" "}
        <motion.img
          style={{ y: slowY }}
          src="/images/5_DISCOVERY/Lyn_Evans.png"
          alt="Lyn Evans"
          className="image7"
        />{" "}
        <motion.img
          style={{ y: slowY }}
          src="/images/5_DISCOVERY/Robert_Brout.png"
          alt="Robert Brout"
          className="image8"
        />
      </div>
    </div>
  );
}
