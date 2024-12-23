import { useEffect, useState } from "react";

import { getBestProducts } from "@/services/product";
import { ProductItemData } from "@/types/products";

import ProductItem from "../product-list/ProductItem";
import { CarouselBestPick } from "./CarouselBestpick";

export default function BestPick() {
  const [bestProducts, setBestProducts] = useState<ProductItemData[]>([]);

  useEffect(() => {
    async function fetchBestProducts() {
      const products = await getBestProducts();
      setBestProducts(products);
    }

    fetchBestProducts();
  }, []);

  return (
    <section className="flex h-full w-full flex-col items-center px-10 desktop:h-[845px] desktop:w-[1440px]">
      <div className="text-center text-[26px] font-semibold">BEST PICK</div>
      <div className="mt-10 flex h-full w-full flex-col gap-4 tablet:flex-row desktop:max-w-[1440px]">
        <div className="w-full lg:w-1/2">
          <CarouselBestPick products={bestProducts} />
        </div>
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-4 lg:w-1/2">
          {bestProducts.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
