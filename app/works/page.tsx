import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import { WorkCard } from "@/components/workCard/WorkCard";
import Image from "next/image";
import { Calendar, GitHub } from "react-feather";

export default function page() {
  return (
    <main className="max-w-screen h-screen mt-20">
      <Section>
        <Title>Explore My Works</Title>
        <div className="mt-15 grid grid-cols-2">
          <WorkCard />
          <WorkCard />
        </div>
      </Section>
    </main>
  );
}
