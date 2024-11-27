"use client"

import Link from "next/link";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);

	return (
		<div
			className={cn("fixed bottom-10 inset-x-0 max-w-xl mx-auto z-50", className)}
		>
			<Menu setActive={setActive}>
				<Link href="/">
					<MenuItem setActive={setActive} active={active} item="Home" />
				</Link>
				<Link href="/aboutme">
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