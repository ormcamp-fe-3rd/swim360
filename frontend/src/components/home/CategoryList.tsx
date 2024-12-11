interface Props{
  name: string
}

export default function CategoryList({ name }: Props) {
  return (
    <div className="flex justify-center">
      {name}
    </div>
  );
}
