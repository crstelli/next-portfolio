"use client";

import { motion } from "motion/react";

interface Props {
  children: string;
  vpMargin?: number;
}

function Title({ children, vpMargin = 0 }: Props) {
  const animation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },

    animate: vpMargin !== 0 ? {} : { opacity: 1, y: 0 },
    viewport: vpMargin === 0 ? {} : { margin: `-${vpMargin}px`, once: true },
  };

  return (
    <motion.h2 {...animation} className="text-center text-xl sm:text-2xl md:text-3xl uppercase">
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
