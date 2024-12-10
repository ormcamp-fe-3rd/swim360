import Photos from "@/components/product/Photos";
import DetailsSection from "@/components/product/Details";
import DetailsTab from "@/components/product/DetailsTab";
import ReviewsTab from "@/components/product/reviewsTab";
import QnasTab from "@/components/product/QnasTab";
import ExchangeTab from "@/components/product/exchangeTab";

function Product() {
  return (
    <div>
    <div className="flex w-[1064px] items-start mx-auto gap-5">
      <Photos/>
      <DetailsSection/>
    </div>
    <DetailsTab/>
    <ReviewsTab/>
    <QnasTab/>
    <ExchangeTab/>
    </div>
  );
}
export default Product;
