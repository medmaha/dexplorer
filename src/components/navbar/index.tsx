import Link from "next/link";
import React, { ReactNode } from "react";
import NavLink from "./nav-links";
import Theme from "./theme";
import { cookies } from "next/headers";
import SideNav from "./sidenav";
import {
	Building2,
	FileQuestion,
	Home,
	MailQuestion,
	Workflow,
} from "lucide-react";

type Props = {
	theme: "light" | "dark";
};

export default function Navbar({ theme }: Props) {
	async function toggleTheme(theme: "light" | "dark") {
		"use server";
		cookies().set("theme", theme);
	}

	return (
		<header className="sticky top-0 shadow bg-transparent backdrop:bg-card/10 backdrop-blur-[5px]">
			<nav className="flex justify-center items-center min-h-[60px] gap-4 sm:gap-6 container ">
				<Link
					className="flex items-center font-extrabold italic text-primary"
					href="/"
				>
					<MountainIcon className="h-6 w-6 rotate-45" />
					<span className="pt-1">Kubay</span>
				</Link>

				<div className="hidden md:block ml-auto">
					<NavLinks />
				</div>

				<div className="ml-auto flex items-center gap-6">
					<Theme theme={theme} toggleTheme={toggleTheme} />

					<div className="md:hidden">
						<SideNav>
							<NavLinks />
						</SideNav>
					</div>
				</div>
			</nav>
		</header>
	);
}

function NavLinks() {
	return (
		<div className="flex-col space-y-6 md:space-y-0 p-4 md:p-0 flex md:flex-row md:items-center md:gap-4 lg:gap-6">
			<NavLink href="/">
				<span>Home</span>
				<Home className="md:hidden" />
			</NavLink>
			<NavLink href="/projects">
				<span>Projects</span>
				<Workflow className="md:hidden" />
			</NavLink>
			<NavLink href="/services">
				<span>Services</span>
				<Building2 className="md:hidden" />
			</NavLink>
			<NavLink href="/contact">
				<span>Contact</span>
				<MailQuestion className="md:hidden" />
			</NavLink>
			<NavLink href="/about">
				<span>About Us</span>
				<FileQuestion className="md:hidden" />
			</NavLink>
		</div>
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
