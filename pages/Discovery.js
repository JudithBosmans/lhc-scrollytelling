"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Discovery() {
  const targetRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const slowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const mediumY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const people = [
    {
      src: "/images/5_DISCOVERY/Francois_Enlgert.png",
      alt: "François Englert",
      expl: "Co-proposed the Brout–Englert–Higgs mechanism explaining how particles acquire mass, laying theoretical groundwork for the Higgs boson discovery.",
      y: mediumY,
      key: "englert",
      className: "image1",
    },
    {
      src: "/images/5_DISCOVERY/Peter_Higgs.png",
      alt: "Peter Higgs",
      expl: "Independently proposed the existence of the Higgs boson, a particle later confirmed at the LHC and central to the Standard Model.",
      y: fastY,
      key: "higgs",
      className: "image2",
    },
    {
      src: "/images/5_DISCOVERY/Simon_van_der_Meer.png",
      alt: "Simon van der Meer",
      expl: "Developed stochastic cooling, a crucial technique that enabled proton-antiproton collisions, earning him a Nobel Prize and paving the way for collider technology.",
      y: slowY,
      key: "meer",
      className: "image3",
    },
    {
      src: "/images/5_DISCOVERY/Carlo_Rubbia.png",
      alt: "Carlo Rubbia",
      expl: "Led the UA1 experiment at CERN that discovered the W and Z bosons, proving the electroweak theory and shaping LHC-era physics.",
      y: slowY,
      key: "rubbia",
      className: "image4",
    },
    {
      src: "/images/5_DISCOVERY/Fabiola_Gianotti.png",
      alt: "Fabiola Gianotti",
      expl: "Served as spokesperson for the ATLAS experiment during the Higgs boson discovery and is now CERN’s first female Director-General.",
      y: fastY,
      key: "gianotti",
      className: "image5",
    },
    {
      src: "/images/5_DISCOVERY/Elisabeth_Schopf.png",
      alt: "Elisabeth Schopf",
      expl: "Contributed to the development of radiation detectors essential for particle tracking and measurement in high-energy experiments.",
      y: mediumY,
      key: "schopf",
      className: "image6",
    },
    {
      src: "/images/5_DISCOVERY/Lyn_Evans.png",
      alt: "Lyn Evans",
      expl: "Directed the construction of the LHC as Project Leader, overseeing its design, engineering, and successful launch.",
      y: slowY,
      key: "evans",
      className: "image7",
    },
    {
      src: "/images/5_DISCOVERY/Robert_Brout.png",
      alt: "Robert Brout",
      expl: "Collaborated with Englert to propose the mechanism by which particles gain mass, forming the theoretical basis for the Higgs boson.",
      y: slowY,
      key: "brout",
      className: "image8",
    },
  ];

  return (
    <div className="parallax5" ref={targetRef}>
      <motion.div
        className="parallax5Header5"
        style={{
          opacity: hovered ? 0.2 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <motion.p className="parallax5Subtitle5" style={{ y: fastY }}>
          5. Discovery
        </motion.p>
        <div className="parallax5Text5">
          <motion.p className="text text5" style={{ y: mediumY }}>
            To be able to <span className="italic">recreate</span> these
            <span className="italic"> conditions</span>, more than{" "}
            <span className="italic">10.000 scientists</span>, from over{" "}
            <span className="italic">100 countries</span>, built a machine that
            <span className="italic"> mimics</span> the Big Bang conditions.
          </motion.p>
          <motion.p className="text" style={{ y: slowY }}>
            One of the <span className="italic"> key scientists</span> was the
            Belgian physicist <span className="italic"> François Englert</span>,
            who published a way to explain the{" "}
            <span className="italic"> mass of elementary particles</span>. Peter
            Higgs published a <span className="italic"> similar</span> paper a
            month later, which gets <span className="italic">accredited</span>{" "}
            for finding the Higgs Boson particle in 2012.
          </motion.p>
        </div>
      </motion.div>

      <div className="parallax5Imagecont">
        {people.map((person) => (
          <div
            key={person.key}
            className={`scientist ${person.className}`}
            onMouseEnter={() => setHovered(person.key)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.img
              className={person.className}
              src={person.src}
              alt={person.alt}
              style={{
                y: person.y,
                opacity: hovered && hovered !== person.key ? 0.2 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
            {hovered === person.key && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <p className="label"> {person.alt}</p>
                <p className="text textSmall">{person.expl}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
