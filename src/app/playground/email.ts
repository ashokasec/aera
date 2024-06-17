import { EmailContentProps } from "@/components/email/types"

export const email: EmailContentProps[] = [
  {
    "type": "profile",
    "imgSrc": "https://pbs.twimg.com/profile_images/1780429875884740608/52tD1Szh_400x400.jpg",
    "name": "Likhavat"
  },
  {
    "type": "h1",
    "text": "Verify Your Account"
  },
  {
    "type": "paragraph",
    "text": "Hello, thank you for registering with Example Company! To complete your registration, please verify your email address by clicking the link below."
  },
  {
    "type": "button",
    "link": "https://example.com/verify?token=your-verification-token",
    "text": "Verify Your Email"
  },
  {
    "type": "paragraph",
    "text": "If you did not create an account with us, please ignore this email."
  },
  {
    "type": "separator"
  },
  {
    "type": "signature",
    "name": "Team Likhavat",
    "address": "Indrayani Nagar, Pune, Maharashtra, India"
  }
]