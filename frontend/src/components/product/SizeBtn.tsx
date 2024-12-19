export function SizeButton({ size }: { size: string }) {
  return (
    <>
      <button className="flex h-[40px] w-[60px] items-center justify-center gap-3 rounded-xl border-[1px] border-black hover:bg-black hover:text-white">
        {size}
      </button>
    </>
  );
}
