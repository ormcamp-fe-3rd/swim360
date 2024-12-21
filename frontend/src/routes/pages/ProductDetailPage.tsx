import DetailsSection from "@/components/product/Details";
import DetailsTab from "@/components/product/DetailsTab";
import ExchangeTab from "@/components/product/ExchangeTab";
import Photos from "@/components/product/Photos";
import QnasTab from "@/components/product/QnasTab";
import ReviewsTab from "@/components/product/ReviewsTab";
import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useproduct";

function ProductDetailPage() {
  const { product } = useProduct();
  const { handleCartUpdate } = useCart();

  const detailsSectionProps = {
    product,
    handleCartUpdate,
  };

  if (!product) {
    return <p>Loading...</p>; // 로딩 상태 처리
  }

  return (
    <div className="flex flex-col justify-center px-4">
      <div className="mx-auto flex w-full max-w-[1064px] flex-wrap items-start justify-center gap-5">
        <Photos />
        <DetailsSection {...detailsSectionProps} />
      </div>
      <DetailsTab />
      <ReviewsTab />
      <QnasTab />
      <ExchangeTab />
    </div>
  );
}
export default ProductDetailPage;
