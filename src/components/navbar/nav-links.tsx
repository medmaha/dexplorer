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
			className={`transition px-2 text-sm hover:text-primary/80 font-medium underline-offset-4 ${
				isActive() ? "underline text-primary hover:text-primary" : ""
			}`}
			href={props.href}
		>
			{props.children}
		</Link>
	);
}
