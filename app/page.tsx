import { Blob } from "@/components/Blob";
import { Button } from "@/components/Button";
import { ContactInfo } from "@/components/ContactInfo";
import { GridBackground } from "@/components/GridBackground";
import { Hero } from "@/components/Hero";
import { ScrollBottomChevron } from "@/components/ScrollBottomChevron";
import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { WorksPreviews } from "@/components/workPreview/WorksPreviews";
import { projects } from "@/data/projects";
import { techstack } from "@/data/techstack";
import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, MousePointer, User } from "react-feather";
import { TechStackGrid } from "@/components/techStack/TechStackGrid";
import AboutContent from "@/data/about_intro.mdx";
import { AboutHero } from "@/components/AboutHero";

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
        <Link
          href={"/contact"}
          className="self-center hover:scale-120 duration-150 mt-15"
        >
          <button className="glowing-border bg-primary text-black hover:bg-neutral-950 hover:text-primary px-5 py-2.5 uppercase flex items-center gap-3 cursor-pointer text-xl">
            <MousePointer />
            Get in touch
          </button>
        </Link>
        <ContactInfo />
      </Section>
    </>
  );
}
