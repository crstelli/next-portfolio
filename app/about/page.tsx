import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";

export default function page() {
  return (
    <main>
      <Section className="mt-20 max-w-screen min-h-screen">
        <Title>About Me</Title>
        <Subtitle>Descrizione in inglese</Subtitle>
      </Section>
    </main>
  );
}
