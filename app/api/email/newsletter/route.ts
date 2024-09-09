import db from "@/lib/prismadb";
import { emailSchema } from "@/lib/validation";
import { z } from "zod";

export async function POST(req: Request) {
	const input = emailSchema.parse(await req.json());
	try {
		const notification = await db.notification.findFirst({
			where: {
				email: input.email,
				subscriptions: {
					has: "NEWSLETTER",
				},
			},
		});

		if (notification) {
			return new Response("You are already subscribed to the newsletter.", {
				status: 409,
			});
		}

		await db.notification.create({
			data: {
				email: input.email,
				subscriptions: ["NEWSLETTER"],
			},
		});

		return new Response(null, { status: 200 });
	} catch (error) {
		console.error(error);

		if (error instanceof z.ZodError) {
			return new Response(error.message, { status: 422 });
		}

		if (error instanceof Error) {
			return new Response(error.message, { status: 500 });
		}

		return new Response("Something went wrong", { status: 500 });
	}
}
