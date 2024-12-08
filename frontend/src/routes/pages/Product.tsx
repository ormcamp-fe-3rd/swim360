import Photos from "@/components/product/PhotoSection";
import DetailsSection from "@/components/product/detailsSection";
import DetailsTab from "@/components/product/detailsTabSection";
import ReviewsTab from "@/components/product/reviewsTab";

function Product() {
  return (
    <div>
    <div className="flex w-[1064px] items-start mx-auto gap-5">
      <Photos/>
      <DetailsSection/>
    </div>
    <DetailsTab/>
    <ReviewsTab/>
    </div>
  );
}
export default Product;
