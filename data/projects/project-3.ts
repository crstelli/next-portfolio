import type { Project } from "./type";

export const project3: Project = {
  id: 3,
  slug: "lumina-tech",
  stack: "Frontend",
  date: { year: 2025, month: "November" },
  worked_for: "3 days",
  hosted_on: "Vercel",
  name: "Lumina Tech",
  description:
    "LuminaTech is a fully static, design-focused website built with Next.js and TailwindCSS, showcasing a fictional tech company through clean layouts, modern UI, and smooth responsive components.",
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
      label: "Embla Carousel",
      image: "/techstack-logos/emblacarousel.svg",
      content: "",
    },

    {
      label: "Lucide React",
      image: "/techstack-logos/lucidereact.svg",
      content: "",
    },
  ],
  features: ["Responsive Design", "Modern Carousel", "Google Maps Integration"],
  github: "https://github.com/crstelli/lumina-tech",
  live_view: "https://lumina-tech.netlify.app/",
  images: [
    "/lumina-tech/preview.png",
    "/lumina-tech/image-1.png",
    "/lumina-tech/image-2.png",
    "/lumina-tech/image-3.png",
    "/lumina-tech/image-4.png",
    "/lumina-tech/image-5.png",
  ],
};
