import type { ReactNode } from "react";

import { Globe } from "react-feather";
import { Button } from "../Button";

interface Props {
  children: ReactNode;
  link: string;

  invert?: boolean;
}

function Body({ children, link }: Props) {
  return (
    <div className="bg-neutral-950 p-4 flex flex-col gap-2">
      {children}
      <Button
        href={{ ref: link, type: "Link" }}
        className="max-lg:mt-4 mt-auto self-start"
        icon={Globe}
      >
        Explore
      </Button>
    </div>
  );
}

export { Body };
