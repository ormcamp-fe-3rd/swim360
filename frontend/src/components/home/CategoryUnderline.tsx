export default function CategoryUnderLine({
  isVisible,
}: {
  isVisible: boolean;
}) {
  return (
    <img
      className={`pl-5 pr-6 group-hover:visible group-focus:visible ${isVisible ? "visible" : "invisible"}`}
      src="/images/productlist/underline-menu.png"
    />
  );
}
