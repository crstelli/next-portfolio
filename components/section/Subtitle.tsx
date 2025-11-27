"use client";

import { motion } from "motion/react";

interface Props {
  children: string;
}

function Subtitle({ children }: Props) {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ margin: "-200px", once: true }}
      className="text-center max-sm:text-sm mt-6 italic max-w-[800px] text-neutral-500 mx-auto"
    >
      {children}
    </motion.p>
  );
}

export { Subtitle };
