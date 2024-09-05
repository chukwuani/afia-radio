"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const JoinNewsletterForm = () => {
	return (
		<section
			id="newsletter"
			aria-labelledby="newsletter-heading"
			className="space-y-3">
			<h4 className="text-base font-medium">Subscribe to our newsletter</h4>
			<form className="flex gap-2">
				<Input
					autoComplete="email"
					type="email"
					placeholder="m@example.com"
					className="flex-1"
					required
				/>
				<Button
					className="bg-brand hover:bg-brand/90 text-white font-medium"
					type="submit">
					Subscribe
				</Button>
			</form>
		</section>
	);
};
export default JoinNewsletterForm;
