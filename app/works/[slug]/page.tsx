import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>404 - Project Not Found</div>;

  return (
    <main className="mt-20 min-h-screen max-w-screen">
      <Section>
        <Title>{project.name}</Title>
        <Subtitle>{project.description}</Subtitle>
      </Section>
    </main>
  );
}
