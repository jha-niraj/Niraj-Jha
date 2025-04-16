import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Niraj Jha",
	initials: "MR",
	url: "https://github.com/jha-niraj",
	location: "Mumbai, India",
	locationLink: "https://www.google.com/maps/place/sanfrancisco",
	description:
		"Full Stack Developer | Passionate about Building Robust Applications | Front-End and Back-End development | Problem-Solving | Innovative Solutions | Building from Scratch | Helping People",
	summary:
		"I am currently in my sixth semester of B.Tech, focused on growing as a Full Stack Developer by building and scaling my own SaaS businesses. Alongside this, I love sharing insights on web development and emerging technologies. My expertise includes JavaScript, React, Node.js, and cloud platforms like AWS and Vercel. I am passionate about creating scalable, maintainable software and continuously improving my skills to deliver impactful solutions in the tech industry. I am also working on a few open source projects and writing technical articles on my [blog](https://vichar-space.vercel.app).",
	avatarUrl: "/me.jpeg",
	skills: [
		"React.js",
		"Zustand",
		"Next.js",
		"JavaScript/Typescript",
		"Node.js",
		"Postgres",
		"Mongo DB",
		"Prisma",
		"Supabase",
		"Docker",
		"C++",
		"Redis",
		"Problem Solving",
		"Structured thinking",
		"Algorithmic problem-solving"
,	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "https://vichar-space.vercel.app", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "jhaniraj45@gmail.com",
		tel: "+919503517330",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/jha-niraj",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/nirajjha31/",
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/iamnirajjha",
				icon: Icons.x,

				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "jhaniraj45@gmail.com",
				icon: Icons.email,

				navbar: false,
			},
		},
	},

	work: [
		{
			company: "xAGI",
			href: "https://xagi.in",
			badges: [],
			location: "Remote",
			title: "Full Stack Developer Intern",
			logoUrl: "/favicon.ico",
			start: "January 2025",
			end: "Present",
			description: [
							"Integrated user authentication using Clerk to require sign-in before users can write prompts.",
							"Currently building the platform's UI from scratch to enhance user experience.",
							"Developing a dedicated page to showcase all available AI agents with detailed descriptions.",
							"Designing a user-friendly onboarding guide featuring a step-by-step card-based interface to provide a quick overview of the website's functionality."
			  			],
		},
		{
			company: "Pratibha Innovations",
			badges: [],
			href: "https://pratibhainnovations.com",
			location: "Remote",
			title: "Software Developer Engineer Intern",
			logoUrl: "/spunk.svg",
			start: "June 2024",
			end: "August 2024",
			description: [
							"Engineered a revolutionary Job Listing platform from the ground up, resulting in a 40% reduction in job search time for users.",
							"Implemented advanced filtering, search capabilities, and intuitive navigation across job pages, listings, and creation interfaces.",
							"Integrated a cutting-edge real-time chat application using Pusher, elevating user engagement by 60%, with support for text, image, and document sharing.",
							"Developed a comprehensive Admin Dashboard providing real-time analytics, streamlined mentor request processing, and granular control over user management, leading to a 50% increase in operational efficiency."
			  			],
		}
	],
	education: [
		{
			school: "lovely Professional University",
			href: "https://www.lpu.in",
			degree: "Bachelor of Technology",
			logoUrl: "",
			start: "2022",
			end: "2026",
		},
		{
			school: "Kathmandu Model Higher Secondary School",
			href: "#",
			degree: "10+2",
			logoUrl: "",
			start: "2019",
			end: "2022",
		}
	],
	projects: [
		{
			title: "The Coder'z",
			href: "https://thecoderz.tech/",
			dates: "Sep 2024 - Present",
			active: true,
			description:
				"An E-Learning platform which focus on providing quality education to students with practical projects, pathways, open source and a glimpse of an AI tools to empower them.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
				"Acertinity UI",
				"Next Auth",
				"AWS S3",
			],
			links: [
				{
					type: "Website",
					href: "https://thecoderz.tech/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/jha-niraj/the-coderz",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/thecoderz.png",
			video: "",
		},
		{
			title: "Vichar Space",
			href: "https://vichar-space.vercel.app/",
			dates: "January 2024 - Present",
			active: true,
			description:
				"An open-source blog platform built with React JS, TailwindCSS, Postgres SQL, Hono-Cloudflare. It is a platform for developers to share their thoughts and ideas with the world.",
			technologies: [
				"React.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Magic UI",
				"Acertinity UI"
			],
			links: [
				{
					type: "Website",
					href: "https://vichar-space.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/jha-niraj/Vichar-Space",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/vichar-space.png",
			video: "",
		},
		{
			title: "Paytm Clone",
			href: "https://paytm-client.vercel.app/",
			dates: "April 2023 - September 2023",
			active: true,
			description:
				"A functional clone of Paytm that replicates essential features for peer-to-peer money transfers. This project showcases a streamlined UI which allow users to send and receive money effortlessly.",
			technologies: [
				"React.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
			],
			links: [
				{
					type: "Website",
					href: "https://paytm-client.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/jha-niraj/Paytm-Clone",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/paytm-clone.png",
			video: "",
		},
		{
			title: "Book Haven",
			href: "https://book-haven-zeta.vercel.app/",
			dates: "June 2024 - July 2024",
			active: true,
			description: "An intuitive platform for book enthusiasts to explore and manage their favorite reads. Book Haven allows users to search for their favorite books, mark them as favorites, and access them conveniently on a personalized dashboard. With plans to introduce additional features, Book Haven aims to create a seamless and engaging experience for book lovers.",
			technologies: [
				"React.js",
				"JavaScript",
				"Mongo DB",
				"TailwindCSS",
				"Shadcn UI",
				"Vercel"
			],
			links: [
				{
					type: "Website",
					href: "https://book-haven-zeta.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/jha-niraj/Book-Haven",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/book-haven.png",
			video: "",
		},
		{
			title: "Image Pipeline",
			href: "https://image-pipeline-eight.vercel.app/",
			dates: "April 2023 - March 2024",
			active: true,
			description: "A versatile tool for image editing and annotation. Users can upload images, draw on them using a canvas, and generate masks based on their annotations. This project is particularly useful for scenarios like adding signatures or highlighting specific areas on an image.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
				"React-Canvas-Draw"
			],
			links: [
				{
					type: "Website",
					href: "https://image-pipeline-eight.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/jha-niraj/Image-Pipeline",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/imagepipeline.png",
			video: "",
		},
		{
			title: "Student Management",
			href: "https://instrinctive-studio.vercel.app/",
			dates: "December 2024 - December 2024",
			active: true,
			description: "A comprehensive solution for managing student data with real-time updates. This system allows seamless addition, deletion, and modification of student details while also tracking daily attendance. Designed for efficiency and reliability, it simplifies administrative tasks for educational institutions.",
			technologies: [
				"Next.js",
				"Typescript",
				"Supabase",
				"Prisma",
				"Zustand",
				"TailwindCSS",
				"Shadcn UI",
				"Acertinity UI",
				"Framer-Motion",
			],
			links: [
				{
					type: "Website",
					href: "https://instrinctive-studio.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/jha-niraj/Instrinctive-Studio",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/studentmanagement.png",
			video: "",
		},
		{
			title: "Text Utility",
			href: "https://textmagic-gray.vercel.app/",
			dates: "January 2024 - Feburary 2024",
			active: true,
			description: "A versatile text manipulation tool offering functionalities like converting text between uppercase and lowercase, extracting text from images, and more. Built with extensibility in mind, this project is set to include additional features to enhance text handling in the future.",
			technologies: [
				"React.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
				"Stripe",
				"Cloudflare Workers",
			],
			links: [
				{
					type: "Website",
					href: "https://textmagic-gray.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/jha-niraj/Text-Utility",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/text-utility.png",
			video: "",
		},
		{
			title: "Todo App",
			href: "https://automatic.chat",
			dates: "April 2023 - March 2024",
			active: true,
			description: "A modern and feature-rich task management application. This app allows users to organize their tasks effectively, with capabilities like task categorization, reminders, and a sleek, responsive design to boost productivity.",
			technologies: [
				"React.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
			],
			links: [
				{
					type: "Website",
					href: "https://todo-app-coral-nu-21.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/jha-niraj/Todo-App",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/todoapp.png",
			video: "",
		},
	],
	// hackathons: [
	// 	{
	// 		title: "Hack Western 5",
	// 		dates: "November 23rd - 25th, 2018",
	// 		location: "London, Ontario",
	// 		description:
	// 			"Developed a mobile application which delivered bedtime stories to children using augmented reality.",
	// 		image:
	// 			"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
	// 		mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
	// 		links: [],
	// 	}
	// ],
} as const;
