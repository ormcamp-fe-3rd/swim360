import Details from "@/components/product/Details";
import DetailsTab from "@/components/product/DetailsTab";
import ExchangeTab from "@/components/product/exchangeTab";
import Photos from "@/components/product/Photos";
import QnasTab from "@/components/product/QnasTab";
import ReviewsTab from "@/components/product/reviewsTab";
import useCart from "@/hooks/useCart";

import useProduct from "@/hooks/useProduct";

function ProductDetailPage() {
  const { product, reviews } = useProduct();
  const { handleCartUpdate } = useCart();

  const detailsSectionProps = {
    product,
    handleCartUpdate,
  };

  const reviewsTabProps = {
    product,
    reviews,
  };

  if (!product) {
    return <p className="mt-20 flex items-center justify-center">Loading...</p>; // 로딩 상태 처리
  }

  return (
    <div className="flex flex-col justify-center px-4">
      <div className="mx-auto flex w-full max-w-[1064px] flex-wrap items-start justify-center gap-5">
        <Photos
          imageUrl={product.imageUrl}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Details {...detailsSectionProps} />
      </div>
      <DetailsTab productId={product.id} />
      <ReviewsTab {...reviewsTabProps} />
      <QnasTab />
      <ExchangeTab />
    </div>
  );
}
export default ProductDetailPage;
