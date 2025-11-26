"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface ContextProps {
  open: string;
  handleClick: (value: string) => void;
}

const TechStackContext = createContext<null | ContextProps>(null);

function Provider({ children }: Props) {
  const [open, setOpen] = useState("");

  const handleClick = (value: string) => (value === open ? setOpen("") : setOpen(value));

  return <TechStackContext.Provider value={{ open, handleClick }}>{children}</TechStackContext.Provider>;
}

function useTechStack() {
  const context = useContext(TechStackContext);

  if (!context) throw new Error("You cannot access TechContext outside his provider.");
  return context;
}

export { Provider, useTechStack };
