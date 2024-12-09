import ProductItem from "@/components/product-list/ProductItem";

function ProductItemList() {
  const productDummyArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-[19px] tablet:grid-cols-3 desktop:grid-cols-5">
      {productDummyArray.map((product, i) => (
        <ProductItem key={i} /> // 데이터 불러오면 [product.id로]
      ))}
    </div>
  );
}

export default ProductItemList;
