import { formatPrice } from "@/utils/formatPrice";
import { Checkbox } from "../ui/checkbox";
import { SelectedOrderItem } from "@/types/orders";

interface CartProductProps {
  id: number;
  brandName: string;
  description: string;
  name: string;
  imageUrl: string;
  eachPrice: number;

  size: string;
  price: number;
  quantity: number;

  handleSelectedCartUpdate: (
    selectedCartItem: SelectedOrderItem,
    isChecked: boolean,
  ) => void;
}

export default function CartProduct({
  id,
  brandName,
  name,
  imageUrl,
  description,
  eachPrice,
  size,
  price,
  quantity,
  handleSelectedCartUpdate,
}: CartProductProps) {
  //cart는 체크 안한 cartId만 지우면됨

  const cartItem = {
    productId: id,
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
        onCheckedChange={(checked: boolean) =>
          handleSelectedCartUpdate(cartItem, checked)
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
