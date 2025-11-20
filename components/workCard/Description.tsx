interface Props {
  children: string;
}

function Description({ children }: Props) {
  return <p className="text-neutral-400 mt-1">{children}</p>;
}

export { Description };
