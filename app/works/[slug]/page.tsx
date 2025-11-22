import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { projects } from "@/data/projects";

import { Image } from "@/components/works/Image";

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
        <div className="grid grid-cols-3 gap-2 mt-15">
          {project.images.map((img) => (
            <Image
              src={img}
              alt={`Showcase image of ${project.name}.`}
              key={img}
            />
          ))}
        </div>
      </Section>
      <Section className="grid grid-cols-[2fr_1fr] gap-8">
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-medium ml-3 text-white">
            Project Overview
          </h3>
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            veritatis corrupti sit iure nihil molestias pariatur odit aliquid
            nam a ullam, tenetur, illum explicabo ducimus illo velit alias et
            dolorem. Repellendus reprehenderit in sed autem vero, accusantium
            excepturi. Alias, iste.
          </p>
          <h3 className="text-xl font-medium ml-3 mt-8 text-white">
            Dettagli tecnici
          </h3>
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            veritatis corrupti sit iure nihil molestias pariatur odit aliquid
            nam a ullam, tenetur, illum explicabo ducimus illo velit alias et
            dolorem. Repellendus reprehenderit in sed autem vero, accusantium
            excepturi. Alias, iste.
          </p>

          <h3 className="text-xl font-medium ml-3 mt-8 text-white">
            Challenges
          </h3>
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            veritatis corrupti sit iure nihil molestias pariatur odit aliquid
            nam a ullam, tenetur, illum explicabo ducimus illo velit alias et
            dolorem. Repellendus reprehenderit in sed autem vero, accusantium
            excepturi. Alias, iste.
          </p>

          <h3 className="text-xl font-medium ml-3 mt-8 text-white">
            Key Features
          </h3>
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            veritatis corrupti sit iure nihil molestias pariatur odit aliquid
            nam a ullam, tenetur, illum explicabo ducimus illo velit alias et
            dolorem. Repellendus reprehenderit in sed autem vero, accusantium
            excepturi. Alias, iste.
          </p>

          <h3 className="text-xl font-medium ml-3 mt-8 text-white">
            Future Improvements
          </h3>
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            veritatis corrupti sit iure nihil molestias pariatur odit aliquid
            nam a ullam, tenetur, illum explicabo ducimus illo velit alias et
            dolorem. Repellendus reprehenderit in sed autem vero, accusantium
            excepturi. Alias, iste.
          </p>

          <h3 className="text-xl font-medium ml-3 mt-8 text-white">
            Lessons Learned
          </h3>
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            veritatis corrupti sit iure nihil molestias pariatur odit aliquid
            nam a ullam, tenetur, illum explicabo ducimus illo velit alias et
            dolorem. Repellendus reprehenderit in sed autem vero, accusantium
            excepturi. Alias, iste.
          </p>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 rounded-md p-4"></div>
      </Section>
    </main>
  );
}
