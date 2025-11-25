import type { TechStackItem } from "@/data/techstack";
import { Provider } from "./Provider";
import { Card } from "./Card";

interface Props {
  stack: TechStackItem[];
}

function TechStackList({ stack }: Props) {
  return (
    <Provider>
      {stack.map((ts) => (
        <Card
          key={ts.label}
          image={ts.image}
          label={ts.label}
          content={ts.content}
        />
      ))}
    </Provider>
  );
}

export { TechStackList };
