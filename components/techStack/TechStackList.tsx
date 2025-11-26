import type { TechStackItem } from "@/data/techstack";

import { Card } from "./Card";
import { Provider } from "./Provider";
import { Button } from "../Button";
import { Link2 } from "react-feather";

interface Props {
  stack: TechStackItem[];
}

function TechStackList({ stack }: Props) {
  return (
    <Provider>
      {stack.map((ts) => (
        <Card key={ts.label} image={ts.image} label={ts.label} content={ts.content} />
      ))}
      <Button href={{ ref: "/#techstack", type: "Link" }} variant="secondary" className="bg-neutral-900" icon={Link2}>
        See my Tech Stack
      </Button>
    </Provider>
  );
}

export { TechStackList };
