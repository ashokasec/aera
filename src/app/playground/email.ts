import { EmailContentProps } from "@/components/email/types"

export const email: EmailContentProps[] = [
  {
    "type": "profile",
    "imgSrc": "https://example.com/profile.jpg",
    "name": "Jane Doe"
  },
  {
    "type": "h1",
    "text": "Summer Fashion Trends 2024"
  },
  {
    "type": "paragraph",
    "text": "Dear fashion enthusiasts, discover the hottest trends of the season! From vibrant colors to chic accessories, our latest collection is here to elevate your style."
  },
  {
    "type": "h2",
    "text": "Must-Have Items"
  },
  {
    "type": "paragraph",
    "text": "Explore our new arrivals including beachwear essentials and statement pieces that will make heads turn."
  },
  {
    "type": "paragraph",
    "text": "Don't miss out on our limited-time offers and discounts exclusively available to our subscribers."
  },
  {
    "type": "h3",
    "text": "Customer Reviews"
  },
  {
    "type": "button",
    "link": "https://example.com/shop",
    "text": "Shop Now"
  },
  {
    "type": "link",
    "link": "https://example.com/blog",
    "text": "Read more on our blog"
  },
  {
    "type": "separator"
  },
  {
    "type": "signature",
    "name": "Emma Smith",
    "role": "Fashion Director",
    "address": "456 Fashion Ave, City, Country"
  }
]

  