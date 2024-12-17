import { Product } from "@/types/products";

import { Checkbox } from "../ui/checkbox";


interface Props{
  product: Product
}


export default function CartProduct({product}: Props){
  return (<>
  <div className="flex p-2.5">
    <Checkbox className="mt-2.5"/>
    <div className="flex justify-between border-b items-center pl-2.5 w-full">
      <img src={product.imageUrl} alt="이미지" className="w-1/6" />
      <div className="w-1/3">
        <p>{product.brandName}</p> 
        <p>{product.name}</p>
        <p>
          옵션 : {product.size}
        </p>
      </div>
      <div className="w-1/5 text-center">
        <span>1</span>
      </div>
      <div className="ml-4 w-1/5 flex-col">
        <span className="block text-right text-gray-400">{product.price}</span>
        <span className="block text-right">{product.discountedPrice}</span>
      </div>
    </div>
  </div>
  </>
  );
}