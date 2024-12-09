interface ProductItemProps {
  name: string;
  price: number;
  discountedPrice: number;
  salesVolume: number;
  imgUrl: string;
}

function ProductItem({
  name,
  price,
  discountedPrice,
  salesVolume,
  imgUrl,
}: ProductItemProps) {
  return (
    <div className="my-[10px]">
      <img className="mb-2 h-[400px] object-cover" src={imgUrl} alt={name} />
      <div>
        <div className="mb-3 py-[6.5px] font-semibold">브랜드명</div>
        <div className="mb-3 text-[14px]">{name}</div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-[5px] font-semibold">{discountedPrice}원</div>
            <div className="text-[14px] line-through">{price}원</div>
          </div>
          <div className="font-semibold text-[#ED1818]">{salesVolume}%</div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
