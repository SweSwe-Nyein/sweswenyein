"use client";
import { slideIn } from "@/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_19d08rz",
				"template_dt4yh6p",
				{
					from_name: form.name,
					to_name: "Swe Swe Nyein",
					from_email: form.email,
					to_email: "sweswe4720@gmail.com",
					message: form.message,
				},
				"UIY0dV1BEuBgdOMKr",
			)
			.then(() => {
				setLoading(false);
				alert(
					"A humble thanks for reaching me out. I will respond to you as soon as possible.",
				);
				setForm({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch((error) => {
				setLoading(false);
				alert("Sorry!! Something went wrong!!");
			});
	};

	return (
		<div className="xl:mt-12 flex justify-center overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[1] md:flex-[0.75] p-0 md:p-8 rounded-2xl"
			>
				<p className="heroSubText text-center">Get in Touch</p>
				<h3 className="heroHeadText text-center">Contact</h3>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8 w-full"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Whats's your name?"
							className="w-full bg-[#ed69ff0f] py-4 px-6 placeholder:text-secondary text-white rounded outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Whats's your email?"
							className="w-full bg-[#ed69ff0f] py-4 px-6 placeholder:text-secondary text-white rounded outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Message</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="w-full bg-[#ed69ff0f] py-4 px-6 placeholder:text-secondary text-white rounded outline-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-[#ed69ff0f] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{loading ? "Sending..." : "Sent"}
					</button>
				</form>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
