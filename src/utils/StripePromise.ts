import { loadStripe } from '@stripe/stripe-js'

const publicKey: any = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
export const stripePromise = loadStripe(publicKey)
