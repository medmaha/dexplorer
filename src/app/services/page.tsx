import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Our Services | Kubay Architech",
	description:
		"Architecture Re-imagined, We build your dream home in the Gambia",
	keywords: [
		"Good",
		"Quality",
		"Our Services",
		"Contact",
		"Products",
		"Architecture Services",
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
					Our Services
				</h1>
				<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-8 border-b w-max mx-auto px-4">
					Providing exceptional architectural services for your next project.
				</p>
			</div>

			<section className="section space-y-4 md:space-y-6 lg:space-y-8 !border-0">
				<Card>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 md:gap-8">
							<div className="mx-auto flex w-full items-center justify-center p-4">
								<Image
									alt="Services"
									className="aspect-[4/3] overflow-hidden rounded-lg object-contain object-center"
									height="200"
									src="/placeholder.svg"
									width="300"
								/>
							</div>
							<div className="space-y-2  md:col-span-2">
								<h3 className="text-2xl font-bold tracking-tighter">
									Modern Architecture
								</h3>
								<p className="text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
									Innovative designs that redefine modern living.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 md:gap-8">
							<div className="mx-auto flex w-full items-center justify-center p-4">
								<Image
									alt="Services"
									className="aspect-[4/3] overflow-hidden rounded-lg object-contain object-center"
									height="200"
									src="/placeholder.svg"
									width="300"
								/>
							</div>
							<div className="space-y-2 md:col-span-2">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold tracking-tighter">
										Sustainable Design
									</h3>
									<p className="text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
										Environmentally friendly architecture that harmonizes with
										nature.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 md:gap-8">
							<div className="mx-auto flex w-full items-center justify-center p-4">
								<Image
									alt="Services"
									className="aspect-[4/3] overflow-hidden rounded-lg object-contain object-center"
									height="200"
									src="/placeholder.svg"
									width="300"
								/>
							</div>
							<div className="space-y-2 md:col-span-2">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold tracking-tighter">
										Urban Planning
									</h3>
									<p className="text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
										Creating vibrant and livable communities through thoughtful
										urban design.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 md:gap-8">
							<div className="mx-auto flex w-full items-center justify-center p-4">
								<Image
									alt="Services"
									className="aspect-[4/3] overflow-hidden rounded-lg object-contain object-center"
									height="200"
									src="/placeholder.svg"
									width="300"
								/>
							</div>
							<div className="space-y-2 md:col-span-2">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold tracking-tighter">
										Heritage Conservation
									</h3>
									<p className="text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
										Preserving the architectural legacy of the past for future
										generations.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 md:gap-8">
							<div className="mx-auto flex w-full items-center justify-center p-4">
								<Image
									alt="Services"
									className="aspect-[4/3] overflow-hidden rounded-lg object-contain object-center"
									height="200"
									src="/placeholder.svg"
									width="300"
								/>
							</div>
							<div className="space-y-2 md:col-span-2">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold tracking-tighter">
										Interior Design
									</h3>
									<p className="text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
										Crafting beautiful and functional spaces that inspire and
										delight.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 md:gap-8">
							<div className="mx-auto flex w-full items-center justify-center p-4">
								<Image
									alt="Services"
									className="aspect-[4/3] overflow-hidden rounded-lg object-contain object-center"
									height="200"
									src="/placeholder.svg"
									width="300"
								/>
							</div>
							<div className="space-y-2 md:col-span-2">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold tracking-tighter">
										Landscape Architecture
									</h3>
									<p className="text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
										Designing outdoor environments that enhance the natural
										beauty of the surroundings.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>
			<section className="w-full py-12 md:py-24">
				<div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Ready to elevate your project?
						</h2>
						<p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Let our team of experts bring your vision to life with innovative
							architectural solutions.
						</p>
					</div>
					<Link href="/contact">
						<Button>Contact Us</Button>
					</Link>
				</div>
			</section>
		</>
	);
}
