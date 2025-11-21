import Image from "next/image";
import { Calendar, GitHub } from "react-feather";
import { Button } from "../Button";

function WorkCard() {
  // return <div>Work Card</div>;

  return (
    <div className="grid grid-cols-1 justify-items-center gap-y-10">
      <div className="w-[500px] grid grid-rows-[auto_1fr] border border-neutral-700 overflow-hidden rounded-md">
        <div className="w-full aspect-2/1 relative overflow-hidden">
          <Image
            src="/shoppy-website/preview-2.png"
            alt="Preview of the app Shoppy Website"
            className="object-cover object-top rounded-md"
            fill
          />
        </div>
        <div className="p-4 flex flex-col grow">
          <div className="flex items-center justify-between">
            <span className="bg-primary text-sm py-0.5 uppercase text-black px-2 rounded-full">
              Full Stack
            </span>
            <span className="flex items-center gap-2 bg-neutral-950 border border-neutral-900 text-neutral-400 px-2 rounded-md py-1">
              <Calendar size={20} />
              2025
            </span>
          </div>
          <h3 className="text-2xl font-semibold mt-2 text-white">
            Shoppy - Website
          </h3>
          <p className="text-neutral-400 text-sm mt-2">
            Shoppy is a modern e-commerce platform where users can order a
            variety of digital and physical products, filter them by price and
            status, and track their orders.
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
            <span className="bg-neutral-900 border text-sm border-neutral-700 px-2 rounded-sm py-1">
              Auth.js
            </span>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-medium text-white">Key Features</h4>
            <ul className="ml-6 font-light list-disc text-primary">
              <li>
                <span className="text-neutral-400">Responsive Design</span>
              </li>
              <li>
                <span className="text-neutral-400">Login with Google</span>
              </li>
              <li>
                <span className="text-neutral-400">Order Tracking</span>
              </li>
            </ul>
          </div>
          <div className="mt-10 flex items-center">
            <Button>Progect Page</Button>
            <Button variant="secondary" className="flex items-center gap-2">
              <GitHub />
              Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="grid grid-cols-1 justify-items-center gap-y-10">
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
            variety of digital and physical products, filter them by price and
            status, and track their orders. Fully responsive and built with
            Next.js, TailwindCSS, and TypeScript.
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
    </div> */
}

export { WorkCard };
