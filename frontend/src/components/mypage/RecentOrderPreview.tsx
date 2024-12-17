import { OrderData } from "@/types/orders";
import RecentOrders from "./RecentOrders";

interface RecentOrderPreviewProps {
  orders: OrderData[];
}

function RecentOrderPreview({ orders }: RecentOrderPreviewProps) {
  return (
    <div className="relative w-full">
      <div className="sticky flex w-full items-center justify-start py-[14.8px]">
        <div className="mr-[10.36px] text-xl font-semibold tablet:text-2xl">
          최근 주문 내역
        </div>
        <div className="text-sm tablet:text-[17px]">
          6개월 이내 주문만 조회 가능합니다.
        </div>
      </div>
      <div className="hidden w-full grid-flow-col grid-cols-[0.5fr_1fr_0.3fr_0.3fr] border-b border-[#E5E7EB] bg-[#F9FAFB] p-4 text-center text-xl font-semibold text-[#6B7280] tablet:grid tablet:grid-cols-[0.3fr_1fr_0.3fr_0.3fr]">
        <div>주문 정보</div>
        <div>상품 정보</div>
        <div>수량</div>
        <div>가격</div>
      </div>

      <div className="border-b border-[#E5E7EB] font-semibold tablet:max-h-[759px] tablet:overflow-y-scroll [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2">
        <RecentOrders orders={orders} />
      </div>
    </div>
  );
}

export default RecentOrderPreview;
