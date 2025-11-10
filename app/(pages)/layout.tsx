import { Navbar } from "@/app/(components)/(navbar)/Navbar";

interface Props {
  readonly children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
