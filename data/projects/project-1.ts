import type { Project } from "./type";

export const project1: Project = {
  id: 1,
  slug: "shoppy-website",
  stack: "Full Stack",
  date: { year: 2025, month: "November" },
  worked_for: "5 days",
  hosted_on: "Vercel",
  name: "Shoppy Website",
  description:
    "Shoppy is a modern e-commerce platform where users can order a variety of digital and physical products, filter them by price and status, and track their orders.",
  technologies: [
    {
      label: "Next.js",
      image: "/techstack-logos/nextjs.svg",
      content: "",
    },

    {
      label: "React",
      image: "/techstack-logos/react.svg",
      content: "",
    },

    {
      label: "Supabase",
      image: "/techstack-logos/supabase.svg",
      content: "",
    },

    {
      label: "TailwindCSS",
      image: "/techstack-logos/tailwindcss.svg",
      content: "",
    },

    {
      label: "Typescript",
      image: "/techstack-logos/typescript.svg",
      content: "",
    },

    {
      label: "Vercel",
      image: "/techstack-logos/vercel.svg",
      content: "",
    },

    {
      label: "Auth.js",
      image: "/techstack-logos/authjs.png",
      content: "",
    },

    {
      label: "Date Fns",
      image: "/techstack-logos/datefns.png",
      content: "",
    },

    {
      label: "Lucide React",
      image: "/techstack-logos/lucidereact.svg",
      content: "",
    },

    {
      label: "React Hot Toast",
      image: "/techstack-logos/reacthottoast.png",
      content: "",
    },

    {
      label: "React Range",
      image: "",
      content: "",
    },
  ],
  features: ["Responsive Design", "Login with Google", "Order Tracking"],
  github: "https://github.com/crstelli/shoppy-website",
  live_view: "https://shoppy-online-store.vercel.app/",
  images: [
    "/shoppy-website/preview.jpg",
    "/shoppy-website/image-1.png",
    "/shoppy-website/image-2.png",
    "/shoppy-website/image-3.png",
    "/shoppy-website/image-4.png",
    "/shoppy-website/image-5.png",
  ],
};
