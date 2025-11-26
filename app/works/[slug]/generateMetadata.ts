import { links } from "@/data/links";
import { projects } from "@/data/projects";

import type { ParamsProps } from "./page";

export async function generateMetadata({ params }: ParamsProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
      description: "This project does not exist.",
    };
  }

  return {
    title: `${project.name}`,
    description: project.description,
    metadataBase: new URL(links.portfolio),
    openGraph: {
      title: project.name,
      description: project.description,
      images: [...project.images],
    },
  };
}
