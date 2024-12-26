import { formatPrice } from "@/utils/formatPrice";
import { Checkbox } from "../ui/checkbox";
import { SelectedOrderItem } from "@/types/orders";
import { Cart } from "@/types/cart";

interface CartProductProps {
  productId: number;
  brandName: string;
  description: string;
  name: string;
  imageUrl: string;
  eachPrice: number;

  cartId: Cart["id"];
  size: string;
  price: number;
  quantity: number;

  handleSelectedCartUpdate: (
    selectedCartItem: SelectedOrderItem,
    isChecked: boolean,
    selectedCartId: Cart["id"],
  ) => void;

  isChecked: boolean;
}

export default function CartProduct({
  productId,
  brandName,
  name,
  imageUrl,
  description,
  eachPrice,
  cartId,
  size,
  price,
  quantity,
  handleSelectedCartUpdate,
  isChecked,
}: CartProductProps) {
  const cartItem = {
    productId: productId,
    name: name,
    description: description,
    price: price,
    imageUrl: imageUrl,
    size: size,
    quantity: quantity,
    totalPrice: price,
  };

  return (
    <div className="flex p-2.5">
      <Checkbox
        className="mt-2.5"
        checked={isChecked}
        onCheckedChange={(checked: boolean) =>
          handleSelectedCartUpdate(cartItem, checked, cartId)
        }
      />
      <div className="flex w-full items-center justify-between border-b pl-2.5">
        <img src={imageUrl} alt="이미지" className="w-1/6" />
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
