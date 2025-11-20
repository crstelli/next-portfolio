import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import Image from "next/image";
import { Calendar, Download, GitHub } from "react-feather";

export default function page() {
  return (
    <>
      <main className="h-full w-full flex flex-col items-center justify-center">
        <div className="w-full h-screen bg-grid absolute top-0 left-0 -z-1"></div>
        <Section className="grid h-screen items-center grid-cols-2">
          <div className="flex flex-col gap-2">
            <span className="uppercase self-start bg-primary text-black px-4 rounded-full">
              Web Developer
            </span>
            <h1 className="text-4xl text-white font-bold">
              Giuseppe Crescitelli
            </h1>
            <p>
              Front-end Developer focalizzato su UX e performance, con
              esperienza in Next.js e Typescript, sviluppo interfacce veloci,
              accessibili e scalabili utilizzando tecnologie moderne.
            </p>
            <div className="flex items-stretch gap-4 mt-4">
              <Button className="flex items-center gap-2">
                <Download />
                Download my CV
              </Button>
              <Button variant="icon">
                <GitHub size={20} />
              </Button>
            </div>
          </div>
          {/* <div className="relative">
          <Image
            src="/hero.svg"
            alt="Illustration of a software engineering writing some code."
            fill
          />
        </div> */}
        </Section>
      </main>
      <Section>
        <Title>My Works</Title>
        <Subtitle>
          Mostro una selezione dei miei progetti più significativi, con
          particolare attenzione a performance, UX e qualità del codice. Ogni
          lavoro è accompagnato da una pagina dedicata con dettagli tecnici,
          scelte progettuali e risultati concreti.
        </Subtitle>
        <div className="grid grid-cols-1 justify-items-center gap-y-10 mt-50 pb-50">
          <div className="aspect-4/5 w-[600px] flex flex-col border border-neutral-700 overflow-hidden rounded-md">
            <div className="w-full aspect-2/1 relative overflow-hidden">
              <Image
                src="/shoppy-website/preview-2.png"
                alt="Preview of the app Shoppy Website"
                className="object-cover object-top rounded-md"
                fill
              />
            </div>
            <div className="p-6 flex flex-col grow">
              <div className="flex items-center justify-between">
                <span className="bg-primary uppercase text-black px-2 rounded-full">
                  Full Stack
                </span>
                <span className="flex items-center gap-2 text-lg text-neutral-500">
                  <Calendar size={20} />
                  2025
                </span>
              </div>
              <h3 className="text-2xl font-semibold mt-4 text-white">
                Shoppy - Website
              </h3>
              <p className="text-neutral-400 mt-2">
                Shoppy is a modern e-commerce platform where users can order a
                variety of digital and physical products, filter them by price
                and status, and track their orders. Fully responsive and built
                with Next.js, TailwindCSS, and TypeScript.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-neutral-900 border text-sm border-neutral-700 px-2 rounded-sm py-1">
                  Next.js
                </span>
                <span className="bg-neutral-900 border text-sm border-neutral-700 px-2 rounded-sm py-1">
                  React
                </span>
                <span className="bg-neutral-900 border text-sm border-neutral-700 px-2 rounded-sm py-1">
                  TailwindCSS
                </span>
                <span className="bg-neutral-900 border text-sm border-neutral-700 px-2 rounded-sm py-1">
                  Typescript
                </span>
                <span className="bg-neutral-900 border text-sm border-neutral-700 px-2 rounded-sm py-1">
                  Supabase
                </span>
                <span className="bg-neutral-900 border text-sm border-neutral-700 px-2 rounded-sm py-1">
                  Vercel
                </span>
              </div>
              <div className="mt-6">
                <h4 className="text-lg text-white">Key Features</h4>
                <ul className="list-inside list-disc text-primary">
                  <li>
                    <span className="text-neutral-400">Responsive Design</span>
                  </li>
                  <li>
                    <span className="text-neutral-400">Responsive Design</span>
                  </li>
                  <li>
                    <span className="text-neutral-400">Responsive Design</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto flex items-center">
                <Button>Progect Page</Button>
                <Button variant="secondary" className="flex items-center gap-2">
                  <GitHub />
                  Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
