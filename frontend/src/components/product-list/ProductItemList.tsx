import ProductItem from "@/components/product-list/ProductItem";

function ProductItemList() {
  const productDummyArray = [
    {
      id: 0,
      brandName: "barrel",
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 1,
      brandName: "barrel",
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 2,
      brandName: "barrel",
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 3,
      brandName: "barrel",
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 4,
      brandName: "barrel",
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 5,
      brandName: "barrel",
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-1.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 6,
      brandName: "barrel",
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-2.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
    {
      id: 7,
      brandName: "barrel",
      name: "여성 수영복 1",
      imgUrl: "/public/images/productlist/sample-2.png",
      price: 10000,
      discountedPrice: 5000,
      salesVolume: 50,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-[19px] tablet:grid-cols-4">
      {productDummyArray.map((product) => (
        <div key={product.id} className="max-h-[500px]">
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  );
}

export default ProductItemList;
