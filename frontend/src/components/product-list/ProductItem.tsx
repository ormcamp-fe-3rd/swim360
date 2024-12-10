import { Link } from "react-router-dom";

interface ProductItemProps {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  salesVolume: number;
  imgUrl: string;
}

function ProductItem({
  id,
  name,
  price,
  discountedPrice,
  salesVolume,
  imgUrl,
}: ProductItemProps) {
  return (
    <Link to={`/product/${id}`}>
      <div className="my-[10px]">
        <img className="mb-2 max-h-[400px] object-cover h-full w-full" src={imgUrl} alt={name} />
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
    </Link>
  );
}

export default ProductItem;