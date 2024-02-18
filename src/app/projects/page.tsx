import { Button } from "@/components/ui/button";
import {
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	Card,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Projects | Kubay Architech",
	description:
		"Architecture Re-imagined, We build your dream home in the Gambia",
	keywords: [
		"Good",
		"Quality",
		"Our Projects",
		"Contact",
		"Products",
		"Projects Architecture",
		"Kubay Architech",
		"Building",
		"Contracts",
		"The Gambia",
		"Africa",
	],
};

export default function Page() {
	return (
		<>
			<div className="container pt-12 lg:pt-24 text-center">
				<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl pb-6">
					Our Projects
				</h1>
				<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-8 border-b w-max mx-auto px-4">
					Check out our latest architectural projects.
				</p>
			</div>
			<section className="section">
				<div className="grid gap-4 md:gap-8 md:grid-cols-3">
					<Card>
						<div className="flex flex-col items-stretch gap-2">
							<Image
								alt="Project 1"
								className="rounded-t-lg object-cover"
								height="250"
								src="/placeholder.svg"
								style={{
									aspectRatio: "400/250",
									objectFit: "cover",
								}}
								width="450"
							/>
							<CardContent className="flex-1 flex flex-col gap-2">
								<CardTitle>Modern Residence</CardTitle>
								<CardDescription>
									Stunning contemporary home with open floor plan and
									floor-to-ceiling windows.
								</CardDescription>
							</CardContent>
						</div>
						<CardFooter>
							<Link className="" href="#">
								<Button variant={"outline"}>View Details</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card>
						<div className="flex flex-col items-stretch gap-2">
							<Image
								alt="Project 2"
								className="rounded-t-lg object-cover"
								height="250"
								src="/placeholder.svg"
								style={{
									aspectRatio: "400/250",
									objectFit: "cover",
								}}
								width="450"
							/>
							<CardContent className="flex-1 flex flex-col gap-2">
								<CardTitle>Urban Office Building</CardTitle>
								<CardDescription>
									Sleek and functional commercial space designed for modern
									businesses.
								</CardDescription>
							</CardContent>
						</div>
						<CardFooter>
							<Button variant={"outline"}>View Details</Button>
						</CardFooter>
					</Card>
					<Card>
						<div className="flex flex-col items-stretch gap-2">
							<Image
								alt="Project 3"
								className="rounded-t-lg object-cover"
								height="250"
								src="/placeholder.svg"
								style={{
									aspectRatio: "400/250",
									objectFit: "cover",
								}}
								width="450"
							/>
							<CardContent className="flex-1 flex flex-col gap-2">
								<CardTitle>Coastal Retreat</CardTitle>
								<CardDescription>
									Tranquil seaside escape featuring a harmonious blend of nature
									and architecture.
								</CardDescription>
							</CardContent>
						</div>
						<CardFooter>
							<Button variant={"outline"}>View Details</Button>
						</CardFooter>
					</Card>
				</div>
			</section>
		</>
	);
}
