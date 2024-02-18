import Link from "next/link";
import React from "react";
import NavLink from "./nav-links";
import Theme from "./theme";
import { cookies } from "next/headers";

type Props = {
	theme: "light" | "dark";
};

export default function Navbar({ theme }: Props) {
	async function toggleTheme(theme: "light" | "dark") {
		"use server";
		cookies().set("theme", theme);
	}

	return (
		<header className="sticky top-0 shadow bg-transparent backdrop:bg-white/10 backdrop-blur-[5px]">
			<nav className="flex justify-center items-center min-h-[60px] gap-4 sm:gap-6 container">
				<Link
					className="flex items-center font-extrabold italic text-primary"
					href="/"
				>
					<MountainIcon className="h-6 w-6 rotate-45" />
					<span className="pt-1">Kubay</span>
				</Link>

				<div className="flex items-center ml-auto gap-2 lg:gap-6">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/projects">Projects</NavLink>
					<NavLink href="/services">Services</NavLink>
					<NavLink href="/contact">Contact</NavLink>
					<NavLink href="/about">About Us</NavLink>
				</div>
				<div className="ml-auto">
					<Theme theme={theme} toggleTheme={toggleTheme} />
				</div>
			</nav>
		</header>
	);
}

function MountainIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}
