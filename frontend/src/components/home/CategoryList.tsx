interface Props{
  name: string
}

export default function CategoryList({ name }: Props) {
  return (
    <a href="/productlist" className="flex justify-center">
      {name}
    </a>
  );
}
