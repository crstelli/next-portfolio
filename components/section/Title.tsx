"use client";

import { motion } from "motion/react";

interface Props {
  children: string;
}

function Title({ children }: Props) {
  return (
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ margin: "-200px", once: true }}
      className="text-center text-xl sm:text-2xl md:text-3xl uppercase"
    >
      <Separator />
      {children}
      <Separator />
    </motion.h2>
  );
}

function Separator() {
  return <span className="text-primary px-2 md:px-4">-</span>;
}

export { Title };
