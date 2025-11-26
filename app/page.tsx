import type { Metadata } from "next";

import { projects } from "@/data/projects";
import { techstack } from "@/data/techstack";

import { AboutHero } from "@/components/AboutHero";
import { Blob } from "@/components/Blob";
import { Button } from "@/components/Button";
import { ContactInfo } from "@/components/ContactInfo";
import { GridBackground } from "@/components/GridBackground";
import { Hero } from "@/components/Hero";
import { ScrollBottomChevron } from "@/components/ScrollBottomChevron";
import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";

import { TechStackGrid } from "@/components/techStack/TechStackGrid";
import { WorksPreviews } from "@/components/workPreview/WorksPreviews";

import { Send } from "react-feather";

export const metadata: Metadata = {
  title: {
    template: "%s - crescitelli.dev",
    default: "Welcome - crescitelli.dev",
  },

  description:
    "Front-end Developer specializing in Next.js and TypeScript. Explore my projects, tech stack, experience, and background, and get in touch for collaborations.",
};

export default function page() {
  return (
    <>
      <main className="h-full w-full">
        <GridBackground />
        <Blob />
        <ScrollBottomChevron section="works" />

        <Hero />
      </main>
      <Section id="works">
        <Title>My Works</Title>
        <Subtitle>
          I showcase a selection of my most significant projects, with a focus
          on performance, UX, and code quality. Each project includes a
          dedicated page detailing technical aspects, design choices, and
          tangible results.
        </Subtitle>

        <WorksPreviews projects={projects} />
      </Section>
      <Section>
        <Title>Tech Stack</Title>
        <Subtitle>
          The tools I use daily to design and develop robust, high-performance,
          and maintainable interfaces. A selection of technologies I work with
          seamlessly to build scalable and reliable projects.
        </Subtitle>

        <TechStackGrid stack={techstack} />
      </Section>
      <Section>
        <Title>About Me</Title>
        <Subtitle>
          Learn more about me, my skills, and my approach to creating impactful
          digital experiences.
        </Subtitle>

        <AboutHero />
      </Section>
      <Section className="flex flex-col">
        <Title>Contact me</Title>
        <Subtitle>
          Get in touch to discuss projects, collaborations, or opportunities.
        </Subtitle>
        <Button
          href={{ ref: "/contact", type: "Link" }}
          variant="special"
          icon={Send}
          className="self-center mt-15"
          size="lg"
        >
          Get in touch
        </Button>
        <ContactInfo />
      </Section>
    </>
  );
}
