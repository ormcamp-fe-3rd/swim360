import { formatPrice } from "@/utils/formatPrice";
import { Checkbox } from "../ui/checkbox";

interface CartProductProps {
  selectedSize: string;
  imageUrl: string[];
  brandName: string;
  name: string;
  price: number;
  quantity: number;
  discountedPrice: number;
}

export default function CartProduct({
  imageUrl,
  brandName,
  name,
  selectedSize,
  price,
  quantity,
  discountedPrice,
}: CartProductProps) {
  return (
    <div className="flex p-2.5">
      <Checkbox className="mt-2.5" />
      <div className="flex w-full items-center justify-between border-b pl-2.5">
        <img src={imageUrl[0]} alt="이미지" className="w-1/6" />
        <div className="w-1/3">
          <p>{brandName}</p>
          <p>{name}</p>
          <p>옵션 : {selectedSize}</p>
        </div>
        <div className="w-1/5 text-center">
          <span>{quantity}</span>
        </div>
        <div className="ml-4 w-1/5 flex-col">
          <span className="block text-right text-gray-400 line-through">
            {formatPrice(price * quantity)}
          </span>
          <span className="block text-right">
            {formatPrice(discountedPrice * quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
