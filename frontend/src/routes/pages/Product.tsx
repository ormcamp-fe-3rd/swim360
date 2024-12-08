import Photos from "@/components/product/PhotoSection";
import DetailsSection from "@/components/product/detailsSection";
import DetailsTab from "@/components/product/detailsTabSection";
import ReviewsTab from "@/components/product/reviewsTab";
import QnasTab from "@/components/product/faqsTab";

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
    </div>
  );
}
export default Product;
