import { projects } from "@/data/projects";

export async function generateStaticParams() {
  const slugs = projects.map((p) => ({ slug: p.slug }));
  return slugs;
}
