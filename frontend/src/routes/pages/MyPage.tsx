import OrderStatusPreview from "@/components/mypage/OrderStatusPreview";
import RecentOrderPreview from "@/components/mypage/RecentOrderPreview";
import UserInfoPreview from "@/components/mypage/UserInfoPreview";
import UserPointAndReviewPreview from "@/components/mypage/UserPointAndReviewPreview";

function MyPage() {
  const userDummyData = {
    user: {
      name: "먕먕",
    },
    reviewCount: 3,
    orderStatsCount: {
      ORDER_COMPLETE: 12,
      PAYMENT_COMPLETE: 22,
      PREPARING: 12,
      SHIPPING: 15,
      DELIVERED: 11,
    },
    orders: [
      {
        id: 2020301023102,
        createdAt: "2024-12-10T10:30:15.000Z",
        price: 70000,
        orderItems: [
          {
            id: 0,
            name: "best 강습용 여자 수영복",
            size: "M",
            imageUrl: "/public/images/mypage/sample-1.png",
            quantity: 2,
            discountedPrice: 30000,
          },
          {
            id: 1,
            name: "best 강습용 남자 수영복",
            size: "XL",
            imageUrl: "/public/images/mypage/sample-3.png",
            quantity: 1,
            discountedPrice: 30000,
          },
          {
            id: 2,
            name: "best 강습용 어린이 수영복",
            size: "S",
            imageUrl: "/public/images/mypage/sample-2.png",
            quantity: 1,
            discountedPrice: 10000,
          },
        ],
      },
      {
        id: 20203033333,
        createdAt: "2024-12-09T10:30:15.000Z",
        price: 50000,
        orderItems: [
          {
            id: 0,
            name: "best 강습용 여자 수영복2",
            size: "M",
            imageUrl: "/public/images/mypage/sample-1.png",
            quantity: 2,
            discountedPrice: 30000,
          },
          {
            id: 1,
            name: "best 강습용 남자 수영복2",
            size: "XL",
            imageUrl: "/public/images/mypage/sample-3.png",
            quantity: 1,
            discountedPrice: 30000,
          },
          {
            id: 2,
            name: "best 강습용 어린이 수영복2",
            size: "S",
            imageUrl: "/public/images/mypage/sample-2.png",
            quantity: 1,
            discountedPrice: 10000,
          },
        ],
      },
      {
        id: 20203,
        createdAt: "2024-12-09T10:30:15.000Z",
        price: 80000,
        orderItems: [
          {
            id: 0,
            name: "best 강습용 여자 수영복3",
            size: "M",
            imageUrl: "/public/images/mypage/sample-1.png",
            quantity: 2,
            discountedPrice: 30000,
          },
          {
            id: 1,
            name: "best 강습용 남자 수영복3",
            size: "XL",
            imageUrl: "/public/images/mypage/sample-3.png",
            quantity: 1,
            discountedPrice: 30000,
          },
          {
            id: 2,
            name: "best 강습용 어린이 수영복3",
            size: "S",
            imageUrl: "/public/images/mypage/sample-2.png",
            quantity: 1,
            discountedPrice: 10000,
          },
        ],
      },
    ],
  };

  return (
    <div className="px-7 tablet:px-[82px]">
      <div className="mb-[41px] grid grid-cols-1 gap-[41px] tablet:mb-[69px] tablet:grid-cols-2">
        <UserInfoPreview name={userDummyData.user.name} />
        <UserPointAndReviewPreview reviewCount={userDummyData.reviewCount} />
      </div>
      <OrderStatusPreview deliveryStateCounts={userDummyData.orderStatsCount} />
      <RecentOrderPreview orders={userDummyData.orders} />
    </div>
  );
}

export default MyPage;
