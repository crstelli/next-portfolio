import Link from "next/link";

interface Props {
  children: string;
}

function Item({ children }: Props) {
  const ref = `/${children.toLowerCase()}`;

  return <Link href={ref}>{children}</Link>;
}

export { Item };
