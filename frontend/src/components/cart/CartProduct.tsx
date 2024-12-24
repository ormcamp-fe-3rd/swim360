import { formatPrice } from "@/utils/formatPrice";
import { Checkbox } from "../ui/checkbox";
import { Cart } from "@/types/cart";

interface CartProductProps {
  id: number;
  brandName: string;
  name: string;
  imageUrl: string[];
  eachPrice: number;

  size: string;
  price: number;
  quantity: number;

  handleSelectedCartUpdate: (
    selectedCartItem: Cart,
    isChecked: boolean,
  ) => void;
}

export default function CartProduct({
  id,
  brandName,
  name,
  imageUrl,
  eachPrice,
  size,
  price,
  quantity,
  handleSelectedCartUpdate,
}: CartProductProps) {
  const cartItem = {
    price: price,
    size: size,
    quantity: quantity,
    user_id: Number(sessionStorage.getItem("id")),
    product_id: id,
  };

  return (
    <div className="flex p-2.5">
      <Checkbox
        className="mt-2.5"
        onCheckedChange={(checked: boolean) =>
          handleSelectedCartUpdate(cartItem, checked)
        }
      />
      <div className="flex w-full items-center justify-between border-b pl-2.5">
        <img src={imageUrl[0]} alt="이미지" className="w-1/6" />
        <div className="w-1/3">
          <p>{brandName}</p>
          <p>{name}</p>
          <p>옵션 : {size}</p>
        </div>
        <div className="w-1/5 text-center">
          <span>{quantity}</span>
        </div>
        <div className="ml-4 w-1/5 flex-col">
          <span className="block text-right text-gray-400 line-through">
            {formatPrice(eachPrice * quantity)}
          </span>
          <span className="block text-right">{formatPrice(price)}</span>
        </div>
      </div>
    </div>
  );
}
