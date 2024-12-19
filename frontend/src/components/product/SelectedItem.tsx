export function Selected({
  selectedSize,
  selectedtotal,
  selectedTotalPrise,
}: {
  selectedSize: number;
  selectedtotal: number;
  selectedTotalPrise: number;
}) {
  return (
    <div className="mb-1 flex h-[50px] w-full min-w-[522px] items-center justify-between bg-[#EDEDED] p-4">
      <p>{selectedSize}</p>
      <div className="flex w-fit items-center justify-between gap-3 rounded-[12px] border-[1px] border-black px-4">
        <button>
          <img className="w-6" src="/public/images/product/icon-minus.png" />
        </button>
        <p className="w-5 text-center"> {selectedtotal} </p>
        <button>
          <img className="w-6" src="/public/images/product/icon-add.png" />
        </button>
      </div>
      <p>{selectedTotalPrise}원</p>
    </div>
  );
}
