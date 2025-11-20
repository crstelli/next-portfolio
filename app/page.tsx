import { Button } from "@/components/Button";
import { Download, GitHub } from "react-feather";

export default function page() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-full h-full bg-grid absolute top-0 left-0 -z-1"></div>
      <div className="grid grid-cols-2 w-full max-w-[1150px]">
        <div className="flex flex-col gap-2">
          <span className="uppercase self-start bg-primary text-black px-4 rounded-full">
            Web Developer
          </span>
          <h1 className="text-4xl text-white font-bold">
            Giuseppe Crescitelli
          </h1>
          <p>
            Front-end Developer focalizzato su UX e performance, con esperienza
            in Next.js e Typescript, sviluppo interfacce veloci, accessibili e
            scalabili utilizzando tecnologie moderne.
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
      </div>
    </main>
  );
}
