interface Props {
  children: string;
  tag: string;
}

function Title({ children, tag }: Props) {
  return (
    <div className="flex items-center justify-between">
      <h4 className="text-lg text-white">{children}</h4>
      <span className="bg-primary uppercase text-black px-2 rounded-full">
        {tag}
      </span>
    </div>
  );
}

export { Title };
