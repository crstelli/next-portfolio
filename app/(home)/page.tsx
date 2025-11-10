import { Navbar } from "@/app/(components)/(navbar)/Navbar";

export default function page() {
  return (
    <div className="h-screen w-full bg-radial from-gray-500 to-gray-700 text-gray-100 p-10">
      <Navbar />
      <main className="flex flex-col w-[90%] max-w-[1000px]"></main>
    </div>
  );
}
