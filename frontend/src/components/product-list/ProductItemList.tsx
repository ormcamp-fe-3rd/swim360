import ProductItem from "@/components/product-list/ProductItem";

function ProductItemList() {
  const productDummyArray = [
    {
      id: 0,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 1,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 2,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 3,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 4,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 5,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 6,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 7,
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-[19px] tablet:grid-cols-3 desktop:grid-cols-4">
      {productDummyArray.map((product, i) => (
        <ProductItem key={product.id} {...product} /> // 데이터 불러오면 [product.id로]
      ))}
    </div>
  );
}

export default ProductItemList;
