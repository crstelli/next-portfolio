import Link from "next/link";

import { TextLogo } from "@/app/(components)/TextLogo";
import { Item } from "./Item";

function Navbar() {
  return (
    <nav className="flex justify-between w-full max-w-[1200px] mx-auto items-center">
      <Link href="/">
        <TextLogo />
      </Link>
      <ul className="flex gap-2">
        <Item>Study</Item>
        <Item>Works</Item>
        <Item>About</Item>
        <Item>Contact</Item>
      </ul>
    </nav>
  );
}

export { Navbar };
