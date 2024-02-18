"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

type Props = {
	href: string;
	children: React.ReactNode;
};

export default function NavLink(props: Props) {
	const segment = useSelectedLayoutSegment();
	const isActive = () => {
		if (props.href === "/" + (segment || "")) {
			return true;
		}
	};

	return (
		<Link
			className={`transition inline-flex items-center min-w-max gap-[6ch] justify-between w-full px-2 md:p-0 pb-2 md:text-sm hover:text-primary/80 font-medium underline-offset-4 ${
				isActive() ? "underline text-primary hover:text-primary" : ""
			}`}
			href={props.href}
		>
			{props.children}
		</Link>
	);
}
