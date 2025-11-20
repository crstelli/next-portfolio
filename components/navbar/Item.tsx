"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: string;
  customRef?: string;
}

function Item({ children, customRef }: Props) {
  const ref = customRef || `/${children.toLowerCase()}`;
  const pathname = usePathname();

  const isActive = ref === pathname;

  return (
    <li className={`${isActive ? "text-primary" : ""}`}>
      <Link href={ref}>{children}</Link>
    </li>
  );
}

export { Item };
