import { Link } from "react-router-dom";

import { BestProduct } from "@/types/products";

interface Props{
  product: BestProduct
}
function ProductItem({product}: Props) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="grid h-full w-full grid-rows-[2fr_0.5fr]">
        <div className="h-full w-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>
        <div>
          <div className="mb-3 py-[6.5px] font-semibold">
            {product.brandName}
          </div>
          <div className="mb-3 text-[14px]">{product.name}</div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="mr-[5px] font-semibold">
                {product.discountedPrice}원
              </div>
              <div className="text-[14px] line-through">{product.price}원</div>
            </div>
            <div className="font-semibold text-[#ED1818]">
              {/* {product.discountPercentage}% */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
