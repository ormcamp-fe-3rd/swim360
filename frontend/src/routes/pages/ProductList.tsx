import ProductItem from "@/components/product-list/ProductItem";

function ProductList() {
  const productDummyArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];

  return (
    <div className="flex">
      <div className="mr-20 grid w-[1064px] grid-cols-4 gap-[19px]">
        {productDummyArray.map((product, i) => (
          <ProductItem key={i} /> // 데이터 불러오면 [product.id로]
        ))}
      </div>
    </div>
  );
}

export default ProductList;
