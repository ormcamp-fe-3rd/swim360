function ProductItem() {
  return (
    <div className="my-[10px]">
      <div className="mb-2 h-[400px] bg-[#D9D9D9]"></div>
      <div>
        <div className="mb-3 py-[6.5px] font-semibold">브랜드명</div>
        <div className="mb-3 text-[14px]">제품명</div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-[5px] font-semibold">10,000</div>
            <div className="text-[14px]">00,000</div>
          </div>
          <div className="font-semibold text-[#ED1818]">00%</div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
