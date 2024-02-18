import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
	return (
		<>
			<section className="section">
				<h1 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
					Architecture Re-imagined
				</h1>
				<p className="mx-auto max-w-[600px] p-1 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
					We blend form and function to create spaces that inspire.
				</p>
				<div className="grid items-center pt-16 lg:pt-24 text-center">
					{/* <div className="space-y-3">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter">
							Subscribe to Our Newsletter
						</h2>
						<p className="mx-auto max-w-[600px] md:text-base/relaxed text-sm">
							Sign up to receive the latest updates and news about our projects.
							Stay connected with our innovative designs and upcoming events.
						</p>
					</div> */}
					<div className="mx-auto w-full max-w-sm space-y-2 pt-6">
						<form className="flex space-x-2">
							<Input
								className="max-w-lg flex-1"
								placeholder="Enter your email"
								type="email"
							/>
							<Button type="submit">Subscribe</Button>
						</form>
						<p
							className="text-xs text-muted-foreground
                            "
						>
							Join our Newsletter to get notified when we launch. <br />
							<Link className="underline underline-offset-2" href="#">
								Terms & Conditions
							</Link>
						</p>
					</div>
					<div className=""></div>
				</div>
			</section>

			<section className="section rounded-t-xl shadow !border-none bg-accent">
				<div className="max-w-[1200px] text-center lg:text-left mx-auto grid items-center gap-6 lg:gap-y-12 lg:grid-cols-2 lg:gap-12">
					<div className="mx-auto flex w-full items-center justify-around p-4 sm:p-8">
						<Image
							alt="Image"
							className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
							height="310"
							src="/eg-1.jpg"
							width="550"
						/>
					</div>
					<div className="grid gap-4 md:gap-2">
						<h2 className="text-2xl font-bold">
							Modern Aesthetics, Timeless Elegance
						</h2>
						<p
							className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground max-w-[55ch] mx-auto lg:mx-0
                            "
						>
							The perfect fusion of contemporary design and enduring
							sophistication. Creating spaces that inspire creativity and
							innovation. Embracing sustainability in every architectural
							detail. Redefining luxury with unparalleled craftsmanship and
							attention to detail.
						</p>
					</div>
					<div className="grid gap-4 md:gap-2">
						<h2 className="text-2xl font-bold">
							Seamless Integration of Nature and Architecture
						</h2>
						<p
							className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground  max-w-[55ch] mx-auto lg:mx-0
                            "
						>
							Embracing the harmony between the built environment and the
							natural world. Embracing the harmony between the built environment
							and the natural world. Creating spaces that resonate with the
							spirit of the surrounding landscape. Integrating sustainable
							materials to reduce our carbon footprint. Redefining architectural
							boundaries with innovative design solutions.
						</p>
					</div>
					<div className="mx-auto flex w-full items-center justify-around p-4 sm:p-8">
						<Image
							alt="Image"
							className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
							height="310"
							src="/eg-2.webp"
							width="550"
						/>
					</div>
					<div className="grid gap-4 md:gap-2 lg:hidden">
						<h2 className="text-2xl font-bold">
							Captivating Spaces, Inspiring Experiences
						</h2>
						<p
							className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground  max-w-[55ch] mx-auto lg:mx-0
                            "
						>
							Crafting environments that evoke emotion and spark creativity.
							Embracing the harmony between the built environment and the
							natural world. Embracing the harmony between the built environment
							and the natural world. Creating spaces that resonate with the
							spirit of the surrounding landscape. Integrating sustainable
							materials to reduce our carbon footprint. Redefining architectural
							boundaries with innovative design solutions.
						</p>
					</div>
					<div className="mx-auto flex w-full items-center justify-around p-4 sm:p-8">
						<Image
							alt="Image"
							className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
							height="310"
							src="/hero.jpg"
							width="550"
						/>
					</div>
					<div className="grid gap-4 md:gap-2">
						<h2 className="text-2xl font-bold">
							Captivating Spaces, Inspiring Experiences
						</h2>
						<p
							className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground  max-w-[55ch] mx-auto lg:mx-0
                            "
						>
							Crafting environments that evoke emotion and spark creativity.
							Embracing the harmony between the built environment and the
							natural world. Embracing the harmony between the built environment
							and the natural world. Creating spaces that resonate with the
							spirit of the surrounding landscape. Integrating sustainable
							materials to reduce our carbon footprint. Redefining architectural
							boundaries with innovative design solutions.
						</p>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container grid items-center gap-4 px-4 text-center md:px-6">
					<div className="space-y-3">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							More Content Coming Soon
						</h2>
						<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Stay tuned for updates and exciting new features.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
