import { z } from "zod";


const envSchema = z.object({
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: z.string(),
    STRIPE_SECRET_KEY: z.string(),
    NEXT_URL: z.string().url(),
})


export const env = envSchema.parse(process.env)