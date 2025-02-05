export const navLinks = [
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const technologies = [
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Front-End Developer",
		company_name: "LR Tech",
		date: "September 2023 -  Present",
		points: [
			"I am responsible for implementing Frontend, optimizing performance, and ensuring cross-browser compatibility",
			"With NuxtJs, Vuetify, and Pinia state management, I build interactive and efficient web applications."
		],
	},
	{
		title: "Web Developer",
		company_name: "Myanmar Online Technology",
		date: "December 2021 - September 2023",
		points: [
			"I was responsible for implementing intuitive websites, optimizing performance, and ensuring cross-browser compatibility",
			"With Vue.js and inertia, I build interactive and efficient web applications, while React.js enables me to create reusable components and maintain a modular codebase.",
			"My proficiency in Laravel allows me to integrate front-end functionality with backend logic"
		],
	},
	{
		title: "Web Development Instructor",
		company_name: "Lat Twae Education",
		date: "February 2023 - September 2024",
		points: [
			"This role is to introduce the kids to the fundamentals of HTML, CSS, and JavaScript in a fun and interactive way."
		],
	},
	{
		title: "Computer Science Content Writer",
		company_name: "Thate Pan Hub Organization",
		date: "October 2021 - January 2023",
		points: [
			"I have created informative articles and courses such as Digital literacy, and Computer Science Unplugged Projects."
		],
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
}[] = [
	{
		name: "Portfolio",
		description: "Built with Three.js, Framer Motion, and GSAP ScrollTrigger for dynamic visuals and smooth interactions. Backend in progress with Prisma and MongoDB.",
		tags: [
			{
				name: "nextjs",
				color: "orange-text-gradient",
			},
			{
				name: "threejs",
				color: "blue-text-gradient",
			},
			{
				name: "framer-motion",
				color: "pink-text-gradient",
			},
			{
				name: "gsap",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/portfolio.png",
		deploy_link: "#",
	},
	{
		name: "L-Chat",
		description:
			"L-Chat, developed by L-Tech Company, is an AI-driven problem-solving system that processes user-uploaded files. I built the frontend using Nuxt, Vuetify, and Pinia for a seamless user experience and efficient state management.",
		tags: [
			{
				name: "nuxt",
				color: "orange-text-gradient",
			},
			{
				name: "vuetify",
				color: "pink-text-gradient",
			},
			{
				name: "pinia",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/l-chat.png",
		deploy_link: "https://l-chat.net",
	},
	{
		name: "L-One",
		description:
			"L-ONE is a communication management system that visualizes response statuses across email, LINE, and chat, with AI-generated replies. I collaborate on UI/UX design and develop the frontend using Nuxt.js, Vuetify, and Pinia.",
		tags: [
			{
				name: "nuxt",
				color: "orange-text-gradient",
			},
			{
				name: "vuetify",
				color: "pink-text-gradient",
			},
			{
				name: "pinia",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/l-one.png",
		deploy_link: "https://l-one-app.com/",
	},
	{
		name: "UPG Paint & Coating",
		description:
			"Developed a user-friendly department and member management system for UPG Paint and Coating, integrating with a Laravel backend. I used Next.js, Tailwind CSS, MUI, Redux Toolkit, and CASL for frontend implementation and styling.",
		tags: [
			{
				name: "nextjs",
				color: "orange-text-gradient",
			},
			{
				name: "redux-toolkit",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "MUI",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/upg.png",
		deploy_link: "#",
	},
	{
		name: "ShweShops",
		description:
			"Built a real-time chat system using Vue.js for a dynamic UI, Laravel WebSockets for instant messaging, MongoDB for data storage, and Firebase for notifications.",
		tags: [
			{
				name: "laravel",
				color: "orange-text-gradient",
			},
			{
				name: "vue",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/shweshops.png",
		deploy_link: "https://shweshops.com",
	},
];

export { technologies, experiences, projects };
