import Stripe from "stripe";

const secret = process.env.STRIPE_SECRET_KEY;

if (!secret) {
  throw new Error("STRIPE_SECRET_KEY is missing from environment variables.");
}

export const stripe = new Stripe(secret, {
  apiVersion: "2024-06-20"
});
