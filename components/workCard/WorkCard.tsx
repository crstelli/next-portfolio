import type { ReactNode } from "react";

import { Image } from "./Image";
import { Body } from "./Body";
import { Title } from "./Title";
import { Description } from "./Description";

interface Props {
  children: ReactNode;
}

function WorkCard({ children }: Props) {
  return (
    <div className="max-w-[700px] ml-10 grid grid-cols-[5fr_4fr] border border-neutral-800 rounded-md overflow-hidden">
      {children}
    </div>
  );
}

WorkCard.Image = Image;
WorkCard.Body = Body;
WorkCard.Title = Title;
WorkCard.Description = Description;

export { WorkCard };
