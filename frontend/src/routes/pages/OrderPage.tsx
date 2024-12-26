import { useState } from "react";
import { useLocation } from "react-router-dom";

import MeansPayment from "@/components/order/MeansPayment";
import OrderProductList from "@/components/order/OrderProductList";
import PossessionPoint from "@/components/order/PossessionPoint";
import ShippingInformation from "@/components/order/ShippingInformation";
import TotalPrice from "@/components/order/TotalPrice";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { OrderFormData } from "@/types/orders";

function OrderPage() {
  const [formData, setFormData] = useState<OrderFormData>({
    receiver: "",
    phoneNumber: "",
    address: "",
    detailAddress: "",
  });
  const [meansPaymentData, setMeansPaymentData] = useState({
    depositorName: "",
    selectedOption: "none",
    businessNumber: "",
    phoneNumber: "",
  });

  const location = useLocation();
  const selectedProductInfo = location.state;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, ...{ [name]: value } }));
  };
  const handleMeansPaymentChange = (name: string, value: string) => {
    setMeansPaymentData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mx-auto w-[90%] max-w-[1440px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/cart" className="text-gray-500">
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
          <MeansPayment handleInputChange={handleMeansPaymentChange} />
        </form>
        <TotalPrice
          selectedCartIds={selectedProductInfo.selectedCartIds}
          totalPrice={selectedProductInfo.totalPrice}
          point={0}
          formData={{ ...formData }}
          products={selectedProductInfo.selectedItems}
          meansPaymentData={meansPaymentData}
        />
      </div>
    </div>
  );
}

export default OrderPage;
