import { Link } from "react-router-dom";

import { ProductItemData } from "@/types/products";
import { formatPrice } from "@/utils/formatPrice";

function ProductItem({
  id,
  name,
  brandName,
  imageUrl,
  price,
  discountedPrice,
  Discount,
}: ProductItemData) {
  return (
    <Link to={`/product/${id}`}>
      <div className="grid h-full w-full grid-rows-[3fr_0.5fr]">
        <div className="group relative h-full w-full">
          <img
            className="absolute h-full w-full object-cover opacity-100 group-hover:opacity-0"
            src={imageUrl[0]}
            alt={name}
          />
          <img
            className="absolute h-full w-full object-cover opacity-0 group-hover:opacity-100"
            src={imageUrl[1]}
            alt={name}
          />
        </div>
        <div>
          <div className="mb-3 py-[6.5px] font-semibold">{brandName}</div>
          <div className="mb-3 text-[14px]">{name}</div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="mr-[5px] font-semibold">
                {formatPrice(discountedPrice)}원
              </div>
              <div className="text-[14px] line-through">
                {formatPrice(price)}원
              </div>
            </div>
            <div className="font-semibold text-[#ED1818]">
              {Discount.discountPercentage}%
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
