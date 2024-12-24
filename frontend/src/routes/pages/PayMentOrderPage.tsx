import { useState } from "react";
import { useLocation } from "react-router-dom";

import MeansPayment from "@/components/paymentorder/MeansPayment";
import OrderProductList from "@/components/paymentorder/OrderProductList";
import PossessionPoint from "@/components/paymentorder/PossessionPoint";
import ShippingInformation from "@/components/paymentorder/ShippingInformation";
import TotalPrice from "@/components/paymentorder/TotalPrice";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { OrderFormData } from "@/types/orders";

// const totalProductPrice = 120000;
// const point = 5000;
// const shippingFee = 3000;
// const totalPayment = totalProductPrice - point + shippingFee;

function PayMentOrderPage() {
  const [formData, setFormData] = useState<OrderFormData>({
    receiver: "",
    phoneNumber: "",
    address: "",
    detailAddress: "",
  });

  const location = useLocation();
  const state = location.state;

  const selectedProductInfo = {
    product_id: state.product_id,
    name: state.name,
    imageUrl: "https://via.placeholder.com/150",
    description: state.description,
    price: state.discountedPrice,
    selectedItems: [
      {
        size: "M",
        quantity: 2,
        totalPrice: 2 * state.discountedPrice, //TODO:Details에서 selectedItmes 데이터 받아오도록 (totalPrice도도)
      },
      {
        size: "L",
        quantity: 3,
        totalPrice: 3 * state.discountedPrice,
      },
    ],
    totalQuantity: state.totalQuantity,
    totalPrice: state.totalPrice,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, ...{ [name]: value } }));
  };

  return (
    <div className="mx-auto w-[90%] max-w-[1440px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-gray-500">
              장바구니
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="font-bold text-gray-950">
              주문/결제
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500">결제완료</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid min-w-[475px] flex-wrap gap-0 middle:flex">
        <form action="#" className="mb-10 middle:w-2/3">
          <ShippingInformation handleInputChange={handleInputChange} />
          <OrderProductList {...selectedProductInfo} />
          <PossessionPoint />
          <MeansPayment />
        </form>
        <TotalPrice
          totalPrice={selectedProductInfo.totalPrice}
          point={0}
          formData={{ ...formData }}
          products={[]}
        />
      </div>
    </div>
  );
}

export default PayMentOrderPage;
