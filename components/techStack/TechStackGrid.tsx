"use client";

import type { TechStackItem } from "@/data/techstack";
import { motion, stagger } from "motion/react";

import { Card } from "./Card";
import { Provider } from "./Provider";

interface Props {
  stack: TechStackItem[];
}

const AnimatedCard = motion.create(Card);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.1),
    },
  },
};
const children = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function TechStackGrid({ stack }: Props) {
  return (
    <Provider>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ margin: "100px", once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr] justify-center gap-4 mt-10"
      >
        {stack.map((ts) => (
          <AnimatedCard variants={children} key={ts.label} image={ts.image} label={ts.label} content={ts.content} />
        ))}
      </motion.div>
    </Provider>
  );
}

export { TechStackGrid };
