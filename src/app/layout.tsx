import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Kubay Architect",
	description:
		"Architecture Re-imagined, We build your dream home in the Gambia",
	keywords: [
		"Good",
		"Quality",
		"Our Projects",
		"Contact",
		"Products",
		"Architecture Services",
		"Projects Architecture",
		"Kubay Architect",
		"Building",
		"Contracts",
		"The Gambia",
		"Africa",
	],
};

type Theme = "light" | "dark";

export default function RootLayout({ children }: any) {
	const theme: Theme = (cookies().get("theme")?.value as any) || "light";
	return (
		<html lang="en" className={`${theme}`}>
			<body className={inter.className}>
				<Navbar theme={theme} />
				<main className="min-h-[calc(100svh-60px)]">
					<Suspense fallback="Loading...">{children}</Suspense>
				</main>
				<Footer theme={theme} />
			</body>
		</html>
	);
}
