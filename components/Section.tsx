import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: React.ComponentProps<"div">["className"];
  id?: string;
}

function Section({ children, className, id }: Props) {
  return (
    <section
      id={id}
      className={`w-full max-w-[1200px] mx-auto px-6 pt-25 pb-5 max-sm:py-35 ${className}`}
    >
      {children}
    </section>
  );
}

export { Section };
