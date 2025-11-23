import { Item } from "./Item";

function Navbar() {
  return (
    <nav className="flex sticky top-0 border border-neutral-900 rounded-b-md backdrop-blur-sm px-4 z-1 self-center py-5 items-center text-lg justify-between w-full max-w-[1300px]">
      <span>Logo</span>
      <ul className="flex items-center gap-4">
        <Item customRef="/">Home</Item>
        <Item>Works</Item>
        <Item>About</Item>
        <Item>Contact</Item>
      </ul>
    </nav>
  );
}

export { Navbar };
