"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

type Props = {
	children: React.ReactNode;
};

export default function SideNav(props: Props) {
	const [isOpen, toggleOpen] = useState(false);
	return (
		<>
			<Button
				size={"icon"}
				variant="outline"
				onClick={() => toggleOpen((p) => !p)}
			>
				<Menu />
			</Button>

			{isOpen && (
				<MenuContent
					isOpen={isOpen}
					toggleOpen={(value: boolean) => toggleOpen(value)}
				>
					{props.children}
				</MenuContent>
			)}
		</>
	);
}

type MenuContentProps = {
	children: React.ReactNode;
	isOpen: boolean;
	toggleOpen: (value: boolean) => void;
};

function MenuContent(props: MenuContentProps) {
	return (
		<div
			className={`fixed bg-transparent delay-200 flex justify-end backdrop:bg-card/10 backdrop-blur-[5px] top-[65px] h-[calc(100svh-65px)] right-0 w-full z-100 ${
				props.isOpen
					? "translate-x-0 opacity-100 "
					: "translate-x-[calc(100%+40px)] opacity-0"
			} ease-in-out duration-300`}
			onClick={() => props.toggleOpen(false)}
		>
			<div
				className="p-6 bg-card border-2 shadow-md max-w-[300px] h-max mr-8"
				onClick={(ev) => {
					ev.stopPropagation();
					ev.preventDefault();
					props.toggleOpen(false);
				}}
			>
				{props.children}

				<p className="text-xs text-center pt-4 text-muted-foreground border-t">
					© 2023 Kubay Inc. All rights reserved.
				</p>
			</div>
		</div>
	);
}
