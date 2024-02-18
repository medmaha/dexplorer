import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
} from "../ui/dropdown-menu";
import Theme from "./theme";

type Props = {
	children: React.ReactNode;
	theme: "light" | "dark";
	toggleTheme: (theme: "light" | "dark") => Promise<void>;
};

export default function SideNav(props: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size={"icon"} variant="outline">
					<Menu />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="max-w-[500px] w-full">
				{props.children}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
