"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";
import { technologies } from "@/app/constants";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Tech = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize animations after component mounts
    const sections = gsap.utils.toArray("section");
    sections.forEach((section: any, index) => {
      const w = section.querySelector(".wrapper");
      if (w) {
        const [x, xEnd] = index % 2 ? ["130%", (w.scrollWidth * -1)] : [w.scrollWidth * -1, 0];
        gsap.fromTo(w, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 1
          }
        });
      }
    });
  }, []);

  return (
    <main className="relative">
      {/* Content */}
      <div className="demo-wrapper mt-15 md:mt-28">
				<motion.div variants={textVariant()}>
					<p className="styles.sectionSubText text-center">
						Tech Stack
					</p>
					{/* <h2 className="sectionHeadText text-center">Tech Stack</h2> */}
				</motion.div>
        {/* Gallery Section */}
        <section ref={imagesRef} className="demo-gallery">
					<div className="wrapper flex flex-row justify-center gap-10 md:gap-28">
						{technologies.map((technology) => (
							<div className="w-14 h-14 md:w-20 md:h-20 mr-5 md:mr-10" key={technology.name}>
								<img 
                  height="30" 
                  width="30"
                  src={technology.icon}
                  alt={`${technology.name}`}
                  className="w-full h-auto"
                />
								{/* <BallCanvas icon={technology.icon} /> */}
							</div>
						))}
					</div>
        </section>
      </div>
    </main>
  );
}

export default SectionWrapper(Tech, "skills");
