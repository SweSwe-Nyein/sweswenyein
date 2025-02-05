import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeButton = () => {
	return (
		<Link
			href="https://drive.google.com/drive/folders/1uIHFIzoblSkR-wHmHoSCVYhA2PnRPdrG?usp=drive_link"
			target="_blank"
		>
			<button
				type="button"
				className=" font-medium text-center px-3 py-2 flex gap-1 justify-center rounded transition ease-in-out delay-150 bg-[#870898] hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300"
			>
				<span className="lg:block text-white">Get My Resume</span>
			</button>
		</Link>
	);
};

export default ResumeButton;
