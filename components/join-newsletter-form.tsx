"use client";

import React from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { type EmailSchema, emailSchema } from "@/lib/validation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { cn, unknownError } from "@/lib/utils";
import { Icons } from "./icons";

const JoinNewsletterForm = () => {
	const [loading, setLoading] = React.useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		clearErrors,
	} = useForm<EmailSchema>({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (data: EmailSchema) => {
		setLoading(true);
		try {
			const response = await fetch("/api/email/newsletter", {
				method: "POST",
				body: JSON.stringify({
					email: data.email,
				}),
			});

			if (!response.ok) {
				switch (response.status) {
					case 409:
						toast.error("You're Part of the Family", {
							description: "You are already subscribed to our newsletter.",
						});
						break;
					case 422:
						toast.error("Error", { description: "Invalid input." });
						break;
					default:
						toast.error(unknownError);
				}
				return;
			}

			toast.success("Thank You for Joining Us!", {
				description: "You have been subscribed to our newsletter.",
			});
			reset();
		} catch (err) {
			console.log(err);
			toast.error("Subscription Unsuccessful", { description: unknownError });
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			id="newsletter"
			aria-labelledby="newsletter-heading"
			className="space-y-3">
			<h4 className="text-base font-medium">Subscribe to our newsletter</h4>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex gap-2">
				<Input
					{...register("email")}
					onChange={() => clearErrors("email")}
					autoComplete="email"
					type="email"
					placeholder="m@example.com"
					className={cn("flex-1", errors.email && "ring-2 !ring-destructive ring-offset-2")}
					required
				/>
				<Button
					disabled={loading}
					className="bg-brand hover:bg-brand/90 text-white font-medium relative rounded-full"
					type="submit">
					{loading && (
						<Icons.spinner
							className="absolute mx-auto size-5 animate-spin"
							aria-hidden="true"
						/>
					)}
					<p className={loading ? "opacity-0" : ""}>Subscribe</p>

					<span className="sr-only">Join newsletter</span>
				</Button>
			</form>
		</section>
	);
};
export default JoinNewsletterForm;
