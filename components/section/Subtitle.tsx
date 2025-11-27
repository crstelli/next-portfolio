"use client";

import { motion } from "motion/react";

interface Props {
  children: string;
  vpMargin?: number;
}

function Subtitle({ children, vpMargin = 0 }: Props) {
  const animation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },

    animate: vpMargin !== 0 ? {} : { opacity: 1, y: 0 },
    viewport: vpMargin === 0 ? {} : { margin: `-${vpMargin}px`, once: true },
  };

  return (
    <motion.p {...animation} className="text-center max-sm:text-sm mt-6 italic max-w-[800px] text-neutral-500 mx-auto">
      {children}
    </motion.p>
  );
}

export { Subtitle };
