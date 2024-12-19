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

const points = { amount: 1500 };

const totalProductPrice = 120000;
const point = 5000;
const shippingFee = 3000;
const totalPayment = totalProductPrice - point + shippingFee;

function PayMentOrderPage() {
  const location = useLocation();
  const state = location.state;

  const products = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/150",
      name: state.productName,
      description: state.description,
      option: state.size,
      quantity: state.quantity,
      price: state.discountedPrice,
      totalPrice: state.totalPrice,
    },
  ];

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
          <ShippingInformation />
          <OrderProductList
            productName={state.productName}
            size={state.size}
            quantity={state.quantity}
            description={state.description}
            totalPrice={state.totalPrice}
            products={products}
          />
          <PossessionPoint points={points} />
          <MeansPayment />
        </form>
        <TotalPrice
          totalProductPrice={totalProductPrice}
          point={point}
          shippingFee={shippingFee}
          totalPayment={totalPayment}
        />
      </div>
    </div>
  );
}

export default PayMentOrderPage;
