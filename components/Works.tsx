"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";
import { projects } from "@/app/constants";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	deploy_link,
}: ProjectCardProps) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-[#ed69ff0f] p-5 rounded sm:w-[380px] w-full"
			>
				<div className="relative w-full">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-2/4 object-cover rounded"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						{source_code_link && <Link
							href={source_code_link}
							target="_blank"
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/github.webp"
								width={24}
								height={24}
								alt="source-code"
								className="object-contain"
							/>
						</Link>}
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px] flex content-center">{name}
						{
							deploy_link != '' && (
								<a href={deploy_link} target="_blank" className="flex content-center ms-3">
									<Image
										src="/link.png"
										width={15}
										height={15}
										alt="source-code"
										className="object-contain"
									/>
								</a>
							)
						}
					</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">My work</p>
				<h2 className="sectionHeadText">Projects</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					My projects showcase my skills through real-world projects, each with brief descriptions and links to code repositories and live demos. They highlight my problem-solving abilities, tech expertise, and project management skills.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7 justify-between">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "projects");
