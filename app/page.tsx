"use client"

import { useState } from "react";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/libs/util";
import Link from "next/link";

import { Twitter, Github, Linkedin } from "lucide-react"
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
	const words = [
		{
			text: "I'm",
			className: "text-white",
		},
		{
			text: "a",
			className: "text-white",
		},
		{
			text: "Full",
			className: "text-white",
		},
		{
			text: "Stack",
			className: "text-white",
		},
		{
			text: "Developer",
			className: "text-white",
		},
		{
			text: "passionate",
			className: "text-white",
		},
		{
			text: "about",
			className: "text-white",
		},
		{
			text: "making",
			className: "text-white",
		},
		{
			text: "robust",
			className: "text-white",
		},
		{
			text: "applications",
			className: "text-white",
		},
	];

	return (
		<div className="h-screen bg-neutral-900 flex flex-col relative w-full">
			<Navbar />
			<div className="mt-48 flex flex-col items-center justify-center gap-10">
				<div className="flex flex-col gap-2">
					<div className="max-w-lg mx-auto flex flex-col md:flex-row items-center justify-center gap-2">
						<AnimatedText text="Niraj" />
						<AnimatedText text="Jha" />
					</div>
					<div className="mx-auto flex flex-col items-center justify-center gap-3 w-[90%]">
						<TypewriterEffect words={words} />
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<div className="flex w-full items-center justify-center gap-3">
						<Link href="/projects">
							<button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
								<span className="absolute inset-0 overflow-hidden rounded-full">
									<span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
								</span>
								<div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
									<span>{`View my projects`}</span>
								</div>
								<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
							</button>
						</Link>
						<Link href="/contact">
							<button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
								<span className="absolute inset-0 overflow-hidden rounded-full">
									<span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
								</span>
								<div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
									<span>{`Contact me`}</span>
								</div>
								<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
							</button>
						</Link>
					</div>
					<div className="flex w-full items-center justify-center gap-7">
						<a href="https://github.com/jha-niraj" target="_blank" rel="noopener noreferrer">
							<FiGithub className="text-white cursor-pointer"  size={28} />
						</a>
						<Link href="https://github.com/jha-niraj">
							<FaLinkedin className="text-white" size={28} />
						</Link>
						<Link href="https://github.com/jha-niraj">
							<FaXTwitter className="text-white" size={28} />
						</Link>
						<Link href="https://github.com/jha-niraj">
							<FaInstagram className="text-white" size={28} />
						</Link>
					</div>
				</div>
			</div>
			<ShootingStars />
			<StarsBackground />
		</div>
	);
}

const AnimatedText = ({ text }: { text: string }) => {
	return (
		<div className="overflow-hidden">
			<div className="whitespace-nowrap scroll text-6xl sm:text-9xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient-x">
				{
					text
				}
			</div>
		</div>
	);
};

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			className={cn("fixed bottom-10 inset-x-0 max-w-xl mx-auto z-50", className)}
		>
			<Menu setActive={setActive}>
				<Link href="/">
					<MenuItem setActive={setActive} active={active} item="Home" />
				</Link>
				<Link href="/about">
					<MenuItem setActive={setActive} active={active} item="About" />
				</Link>
				<Link href="/projects">
					<MenuItem setActive={setActive} active={active} item="Projects" />
				</Link>
				<Link href="/contact">
					<MenuItem setActive={setActive} active={active} item="Contact" />
				</Link>
			</Menu>
		</div>
	);
}