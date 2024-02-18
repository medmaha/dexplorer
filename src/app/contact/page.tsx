import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Contact Us | Kubay Architect",
	description:
		"Architecture Re-imagined, We build your dream home in the Gambia",
	keywords: [
		"Good",
		"Quality",
		"Contact Us",
		"Contact Architecture",
		"Kubay Architect",
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
					Get in touch
				</h1>
				<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-8 border-b w-max mx-auto px-4">
					Fill out the form below and we&apos;ll get back to you as soon as
					possible.
				</p>
			</div>
			<div className="container pt-16 flex items-center justify-center pb-16">
				<Card className="max-w-[500px]">
					<CardHeader className="pb-2 border-b">
						<CardTitle>
							<h2 className="text-2xl font-semibold">Contact Form</h2>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4 mt-4">
							<div className="space-y-4">
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="first-name">First name</Label>
										<Input
											id="first-name"
											placeholder="Enter your first name"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="last-name">Last name</Label>
										<Input id="last-name" placeholder="Enter your last name" />
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										placeholder="Enter your email"
										type="email"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="subject">Subject</Label>
									<Input id="subject" placeholder="Enter the subject" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										className="min-h-[100px]"
										id="message"
										placeholder="Enter your message"
									/>
								</div>
								<Button>Send message</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
