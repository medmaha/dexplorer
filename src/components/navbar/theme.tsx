"use client";
import { Moon } from "lucide-react";
import React, { useEffect, useOptimistic } from "react";
import { Switch } from "../ui/switch";

type Props = {
	theme: "light" | "dark";
	toggleTheme: (theme: "light" | "dark") => Promise<void>;
};

export default function Theme(props: Props) {
	const [theme, setTheme] = useOptimistic(props.theme);

	async function handleSubmit(formData: FormData) {
		const newTheme = theme === "dark" ? "light" : "dark";
		try {
			setTheme(newTheme);
			await props.toggleTheme(newTheme);
		} catch (error) {}
	}

	useEffect(() => {
		if (theme === "dark") {
			document.querySelector("html")?.classList.add("dark");
			document.querySelector("html")?.classList.remove("light");
		} else {
			document.querySelector("html")?.classList.add("light");
			document.querySelector("html")?.classList.remove("dark");
		}
	}, [theme]);

	return (
		<form
			title={theme === "dark" ? "Switch To Light Mode" : "Switch TO Dark Mode"}
			action={handleSubmit}
			className="p-2 py-1 border flex items-center gap-2 rounded-xl transition hover:bg-accent bg-card"
		>
			<Moon />
			<Switch type="submit" defaultChecked={theme === "dark"} />
		</form>
	);
}
