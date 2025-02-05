"use client";
import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../utils/motion";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[140px] md:top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-10">
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#870898] " />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className="heroHeadText text-white">
						Hi, I&apos;m <span className="text-[#870898] ">Swe</span>
					</h1>
					<p className="heroSubText">
						A Frontend Engineer
					</p>
					<div className="mt-12">
						<motion.p
							variants={fadeIn("", "", 0.1, 1)}
							className="hidden md:block mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
						>
							I am a Frontend Engineer living in Thailand, specializing in modern JavaScript frameworks. At LR Tech in Japan, I build scalable web applications with Nuxt.js, Vue.js, and React.js. With a strong foundation in frontend and backend development, I deliver high-quality solutions while staying updated on emerging technologies. Passionate about tech education, I teach computer science to children and create technical content, combining expertise with knowledge-sharing.
						</motion.p>
						<motion.p
							variants={fadeIn("", "", 0.1, 1)}
							className="block md:hidden mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
						>
							I am a Frontend Engineer living in Thailand, specializing in modern JavaScript frameworks. With a strong foundation in frontend and backend development, I deliver high-quality solutions while staying updated on emerging technologies.
						</motion.p>
					</div>
					<div className="mt-8">
						<div className="flex gap-6 mt-2">
							<a href="https://github.com/SweSwe-Nyein" className="social-icon">
								<img src="/github.svg" alt="github" className="w-5 h-5" />
							</a>
							<a href="https://www.facebook.com/sweswenyein20" className="social-icon">
								<img src="/facebook.svg" alt="twitter" className="w-5 h-5" />
							</a>
							<a href="https://www.instagram.com/sweswe.be/?hl=en" className="social-icon">
								<img src="/instagram.svg" alt="instagram" className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-[70px] md:bottom-[32px] w-full flex justify-center items-center">
				<a href="#work">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
