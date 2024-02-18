import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

import { Metadata } from "next";
export const metadata: Metadata = {
	title: "About Us | Kubay Architect",
	description:
		"Architecture Re-imagined, We build your dream home in the Gambia",
	keywords: [
		"Good",
		"Quality",
		"About Architecture",
		"Kubay Architect",
		"Building",
		"Contracts",
		"The Gambia",
		"Africa",
	],
};

export default function Component() {
	return (
		<>
			<div className="container pt-12 lg:pt-24 text-center">
				<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl pb-6">
					<span className="text-muted-foreground pr-12 inline-block">
						About
					</span>
					Kubay Architect
				</h1>
				<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-8 border-b w-max max-w-[60ch] mx-auto px-4">
					We are a team of passionate architects dedicated to creating
					innovative and inspiring spaces. Our design philosophy combines modern
					aesthetics with a focus on functionality, ensuring that each project
					we undertake not only looks beautiful but also meets the practical
					needs of our clients.
				</p>
			</div>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
					<Image
						alt="Image"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
						height="310"
						src="/placeholder.svg"
						width="550"
					/>
					<div className="flex flex-col justify-center space-y-4">
						<ul className="grid gap-6">
							<li>
								<div className="grid gap-1">
									<h3 className="text-lg font-bold">Innovative Designs</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										We are committed to pushing the boundaries of design,
										creating spaces that inspire and captivate.
									</p>
								</div>
							</li>
							<li>
								<div className="grid gap-1">
									<h3 className="text-lg font-bold">Attention to Detail</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Every aspect of our work is carefully considered, from the
										layout to the materials, ensuring a harmonious and elegant
										result.
									</p>
								</div>
							</li>
							<li>
								<div className="grid gap-1">
									<h3 className="text-lg font-bold">Client Collaboration</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										We believe in open communication and collaboration, working
										closely with our clients to bring their vision to life.
									</p>
								</div>
							</li>
							<li>
								<div className="grid gap-1">
									<h3 className="text-lg font-bold">Sustainable Practices</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Environmental responsibility is at the core of our work, and
										we integrate sustainable practices into our designs wherever
										possible.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
				<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Our Expertise
						</h2>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Let your team focus on shipping features instead of managing
							infrastructure with automated CI/CD.
						</p>
					</div>
					<div className="mx-auto grid max-w-4xl items-start gap-6 sm:max-w-2xl md:gap-8 lg:grid-cols-2 lg:max-w-none">
						<div className="grid gap-1">
							<h3 className="text-lg font-bold">Residential Design</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Our team excels in creating homes that are both stylish and
								functional, with a focus on maximizing space and natural light.
							</p>
						</div>
						<div className="grid gap-1">
							<h3 className="text-lg font-bold">Commercial Spaces</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								We understand the unique requirements of commercial
								architecture, designing offices, retail spaces, and hospitality
								venues that make a statement.
							</p>
						</div>
						<div className="grid gap-1">
							<h3 className="text-lg font-bold">Sustainable Design</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Embracing the principles of green building, we integrate
								eco-friendly features into our designs to minimize the
								environmental impact.
							</p>
						</div>
						<div className="grid gap-1">
							<h3 className="text-lg font-bold">Innovative Concepts</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Our team is always exploring new ideas and pushing the
								boundaries of architecture, bringing creativity and originality
								to every project.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid max-w-5xl items-center gap-6 px-4 text-center md:px-6 md:gap-10 lg:grid-cols-3 lg:gap-12">
					<div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
						<Image
							alt="Team Member"
							className="rounded-full aspect-square overflow-hidden object-cover object-center border-2 border-gray-100 dark:border-gray-800"
							height="150"
							src="/placeholder.svg"
							width="150"
						/>
					</div>
					<div className="space-y-2">
						<h3 className="text-xl font-bold">Modou Lamin Danjo</h3>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Lead Architect
						</p>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							With over 20 years of experience in the industry, Mr Lamin Dango
							brings a wealth of knowledge and expertise to every project. Her
							passion for architecture is evident in the innovative designs she
							creates, and her attention to detail ensures that every aspect of
							a building is carefully considered. She is committed to finding
							the perfect balance between form and function, delivering spaces
							that are not only visually stunning but also practical and
							comfortable. Mr Lamin Dango is known for her creative approach to
							design, always looking for new and exciting ideas to incorporate
							into her work. She is dedicated to staying updated on the latest
							trends and technologies in architecture, allowing her to bring
							fresh perspectives to her projects. In addition to her role as a
							lead architect, Mr Lamin Dango is also a mentor, guiding the next
							generation of talent in the firm and inspiring them to push the
							boundaries of design. She believes that great architecture has the
							power to transform lives and communities, and she is committed to
							making a positive impact through her work.
						</p>
					</div>
					<div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
						<Image
							alt="Team Member"
							className="rounded-full aspect-square overflow-hidden object-cover object-center border-2 border-gray-100 dark:border-gray-800"
							height="150"
							src="/placeholder.svg"
							width="150"
						/>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
					<div className="space-y-2 text-center">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Our Projects
						</h2>
						<p className="text-sm text-muted-foreground max-w-[60ch] mx-auto">
							Let your team focus on shipping features instead of managing
							infrastructure with automated CI/CD.
						</p>
					</div>
					<div className="mx-auto grid max-w-4xl items-start gap-6 sm:max-w-2xl md:gap-8 lg:grid-cols-2 lg:max-w-none">
						<Card>
							<CardContent className="p-6 md:p-8">
								<Image
									alt="Project"
									className="aspect-video overflow-hidden rounded-xl object-cover object-center"
									height="225"
									src="/placeholder.svg"
									width="400"
								/>
							</CardContent>
							<CardFooter className="flex flex-col gap-1">
								<h3 className="text-xl font-bold">
									Modern Residence in the City
								</h3>
								<p className="text-sm text-muted-foreground line-clamp-4">
									A sleek and stylish home designed for urban living, with clean
									lines and contemporary touches throughout.
								</p>
							</CardFooter>
						</Card>
						<Card>
							<CardContent className="p-6 md:p-8">
								<Image
									alt="Project"
									className="aspect-video overflow-hidden rounded-xl object-cover object-center"
									height="225"
									src="/placeholder.svg"
									width="400"
								/>
							</CardContent>
							<CardFooter className="flex flex-col gap-1">
								<h3 className="text-xl font-bold">
									Tranquil Retreat by the Lake
								</h3>
								<p className="text-sm text-muted-foreground line-clamp-4">
									This project involved the creation of a serene and picturesque
									getaway, with a focus on blending the architecture seamlessly
									with the natural surroundings.
								</p>
							</CardFooter>
						</Card>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 border-t">
				<div className="container space-y-10 px-4 md:px-6 lg:space-y-16">
					<div className="flex flex-col items-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Contact Us
							</h2>
							<p className="mx-auto text-muted-foreground xl:text-lg/relaxed md:text-base/relaxed text-sm max-w-[40ch]">
								Ready to turn your architectural dreams into reality? Reach out
								to us to start the conversation.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-sm items-start gap-2">
						<form className="grid gap-2">
							<Input
								className="w-full"
								placeholder="Full Name"
								type="text"
								name="full_name"
							/>
							<Input
								className="w-full"
								placeholder="Email Address"
								type="email"
								name="email"
							/>
							<Input
								className="w-full"
								placeholder="Subject"
								type="text"
								name="subject"
							/>
							<Textarea
								className="w-full"
								placeholder="Message"
								name="message"
							/>
							<Button className="w-full mt-4" type="submit">
								Submit
							</Button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
