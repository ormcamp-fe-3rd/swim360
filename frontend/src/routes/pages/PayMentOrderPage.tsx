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

function PayMentOrderPage() {
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
          <OrderProductList />
          <PossessionPoint />
          <MeansPayment />
        </form>
        <TotalPrice />
      </div>
    </div>
  );
}

export default PayMentOrderPage;
