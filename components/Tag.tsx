interface Props {
  children: string;
  className?: React.ComponentProps<"span">["className"];
}

function Tag({ children, className }: Props) {
  return (
    <span
      className={`bg-primary uppercase text-black px-3 rounded-full ${className}`}
    >
      {children}
    </span>
  );
}

export { Tag };
