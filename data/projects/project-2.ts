import type { Project } from "./type";

export const project2: Project = {
  slug: "shoppy-dashboard",
  stack: "Full Stack",
  date: { year: 2025, month: "October" },
  worked_for: "8 days",
  hosted_on: "Netlify",
  name: "Shoppy Dashboard",
  description:
    "Shoppy Dashboard is a modern admin dashboard for Shoppy Website owners to manage products, orders, and sales metrics efficiently.",
  technologies: [
    "React",
    "Vite",
    "TailwindCSS",
    "Supabase",
    "Tanstack Query",
    "React Router",
    "Netlify",
    "date-fns",
    "lucide-react",
    "react-hot-toast",
    "recharts",
  ],
  features: ["Responsive Design", "Login with Google", "Order Tracking"],
  github: "https://github.com/crstelli/shoppy-dashboard",
  live_view: "https://db-shoppy.netlify.app/",
  images: [
    "/shoppy-dashboard/preview.png",
    "/shoppy-dashboard/image-1.png",
    "/shoppy-dashboard/image-2.png",
    "/shoppy-dashboard/image-3.png",
    "/shoppy-dashboard/image-4.png",
    "/shoppy-dashboard/image-5.png",
  ],

  overview: "overview",
  technical_decisions: "technical_decisions",
  challenges: "challenges",
  key_features: [{ title: "title1", content: "content" }],
  future_improvements: [{ title: "title2", content: "content" }],
  lessons: "",
};
