const {
  User,
  Review,
  Order,
  Product,
  Cart,
  OrderItem,
  Category,
  Discount,
  syncAll,
} = require("./models");

const seedData = async () => {
  try {
    await syncAll({ force: true });

    // 카테고리 데이터 생성
    const categories = await Category.bulkCreate([
      { name: "woman", parent_id: null },
      { name: "man", parent_id: null },
      { name: "acc", parent_id: null },
      { name: "one-piece", parent_id: 1 },
      { name: "full-body", parent_id: 1 },
      { name: "mid-length", parent_id: 2 },
      { name: "square-cut", parent_id: 2 },
      { name: "cap", parent_id: 3 },
      { name: "towel", parent_id: 3 },
      { name: "fins", parent_id: 3 },
    ]);

    // 할인 데이터 생성
    const discounts = await Discount.bulkCreate([
      { name: "Not on Sale", discountPercentage: 0 },
      { name: "Holiday Sale", discountPercentage: 10 },
      { name: "Black Friday", discountPercentage: 20 },
      { name: "Summer Sale", discountPercentage: 20 },
    ]);

    // 사용자 데이터 생성
    const users = await User.bulkCreate([
      {
        name: "홍길동",
        emailId: "hong@example.com",
        phoneNumber: "01012345678",
        password: "123",
      },
      {
        name: "김철수",
        emailId: "kim@example.com",
        phoneNumber: "01087654321",
        password: "123",
      },
      {
        name: "신물개",
        emailId: "sin@example.com",
        phoneNumber: "01087654321",
        password: "123",
      },
      {
        name: "최수종",
        emailId: "choi@example.com",
        phoneNumber: "01087654321",
        password: "123",
      },
    ]);

    // 상품 데이터 생성 (카테고리별 약 5개씩)
    const productData = [];
    //여성 one-piece 16개
    productData.push(
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이1",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 50,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이2",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 1000,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이3",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이4",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 10,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이5",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이6",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이7",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이8",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이9",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이10",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이11",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이12",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이13",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이14",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이15",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "앤서 솔리드 패스트백 탄탄이16",
        description:
          "아시안핏으로 출시된 원피스로 꾸준히 사랑받는 베스트셀러 수영복입니다. 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product1-01.jpg",
          "http://localhost:3000/product-images/product1-01.jpg",
        ],
        salesVolume: 0,
        category_id: 4,
        discount_id: 2,
      }
    );
    //여성 full-body 10개
    productData.push(
      {
        brandName: "ADDIBLE",
        name: "플레이어 반신 브이백 딥와인1",

        description:
          "엘리트 수영선수를 위한 프리미엄 원피스 수영복입니다. 편안한 착용감과 함께 최적의 근육 지지력을 제공합니다.",
        price: 72000,
        discountedPrice: 64800,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product2-01.jpg",
          "http://localhost:3000/product-images/product2-02.jpg",
        ],
        salesVolume: 200,
        category_id: 5,
        discount_id: 2,
      },
      {
        brandName: "ADDIBLE",
        name: "플레이어 반신 브이백 딥와인2",
        description:
          "엘리트 수영선수를 위한 프리미엄 원피스 수영복입니다. 편안한 착용감과 함께 최적의 근육 지지력을 제공합니다.",
        price: 72000,
        discountedPrice: 64800,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product2-01.jpg",
          "http://localhost:3000/product-images/product2-02.jpg",
        ],
        salesVolume: 300,
        category_id: 5,
        discount_id: 2,
      },
      {
        brandName: "ADDIBLE",
        name: "플레이어 반신 브이백 딥와인3",
        description:
          "엘리트 수영선수를 위한 프리미엄 원피스 수영복입니다. 편안한 착용감과 함께 최적의 근육 지지력을 제공합니다.",
        price: 72000,
        discountedPrice: 64800,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product2-01.jpg",
          "http://localhost:3000/product-images/product2-02.jpg",
        ],
        salesVolume: 10,
        category_id: 5,
        discount_id: 2,
      },
      {
        brandName: "ADDIBLE",
        name: "플레이어 반신 브이백 딥와인4",
        description:
          "엘리트 수영선수를 위한 프리미엄 원피스 수영복입니다. 편안한 착용감과 함께 최적의 근육 지지력을 제공합니다.",
        price: 72000,
        discountedPrice: 64800,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product2-01.jpg",
          "http://localhost:3000/product-images/product2-02.jpg",
        ],
        salesVolume: 10,
        category_id: 5,
        discount_id: 2,
      },
      {
        brandName: "ADDIBLE",
        name: "플레이어 반신 브이백 딥와인5",
        description:
          "엘리트 수영선수를 위한 프리미엄 원피스 수영복입니다. 편안한 착용감과 함께 최적의 근육 지지력을 제공합니다.",
        price: 72000,
        discountedPrice: 64800,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product2-01.jpg",
          "http://localhost:3000/product-images/product2-02.jpg",
        ],
        salesVolume: 10,
        category_id: 5,
        discount_id: 2,
      },
      {
        brandName: "ADDIBLE",
        name: "플레이어 반신 브이백 딥와인6",
        description:
          "엘리트 수영선수를 위한 프리미엄 원피스 수영복입니다. 편안한 착용감과 함께 최적의 근육 지지력을 제공합니다.",
        price: 72000,
        discountedPrice: 64800,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product2-01.jpg",
          "http://localhost:3000/product-images/product2-02.jpg",
        ],
        salesVolume: 10,
        category_id: 5,
        discount_id: 2,
      },
      {
        brandName: "ADDIBLE",
        name: "플레이어 반신 브이백 딥와인7",
        description:
          "엘리트 수영선수를 위한 프리미엄 원피스 수영복입니다. 편안한 착용감과 함께 최적의 근육 지지력을 제공합니다.",
        price: 72000,
        discountedPrice: 64800,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product2-01.jpg",
          "http://localhost:3000/product-images/product2-02.jpg",
        ],
        salesVolume: 10,
        category_id: 5,
        discount_id: 2,
      },
      {
        brandName: "ADDIBLE",
        name: "플레이어 반신 브이백 딥와인8",
        description:
          "엘리트 수영선수를 위한 프리미엄 원피스 수영복입니다. 편안한 착용감과 함께 최적의 근육 지지력을 제공합니다.",
        price: 72000,
        discountedPrice: 64800,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product2-01.jpg",
          "http://localhost:3000/product-images/product2-02.jpg",
        ],
        salesVolume: 10,
        category_id: 5,
        discount_id: 2,
      },
      {
        brandName: "ADDIBLE",
        name: "플레이어 반신 브이백 딥와인9",
        description:
          "엘리트 수영선수를 위한 프리미엄 원피스 수영복입니다. 편안한 착용감과 함께 최적의 근육 지지력을 제공합니다.",
        price: 72000,
        discountedPrice: 64800,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product2-01.jpg",
          "http://localhost:3000/product-images/product2-02.jpg",
        ],
        salesVolume: 10,
        category_id: 5,
        discount_id: 2,
      },
      {
        brandName: "ADDIBLE",
        name: "플레이어 반신 브이백 딥와인10",
        description:
          "엘리트 수영선수를 위한 프리미엄 원피스 수영복입니다. 편안한 착용감과 함께 최적의 근육 지지력을 제공합니다.",
        price: 72000,
        discountedPrice: 64800,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product2-01.jpg",
          "http://localhost:3000/product-images/product2-02.jpg",
        ],
        salesVolume: 10,
        category_id: 5,
        discount_id: 2,
      }
    );
    //남성 mid-length 20개
    productData.push(
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부1",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 300,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부2",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 500,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부3",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부4",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부5",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부6",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부7",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부8",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부9",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부10",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부11",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부12",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부13",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부14",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부15",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부16",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부17",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부18",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부19",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "누드레이서 라운딩 4부20",
        description:
          "다이나믹한 수영을 위한 4부 제품입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 99000,
        discountedPrice: 89100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product3-01.jpg",
          "http://localhost:3000/product-images/product3-02.jpg",
        ],
        salesVolume: 10,
        category_id: 6,
        discount_id: 2,
      }
    );
    //남성 square-cut 20개
    productData.push(
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각1",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 400,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각2",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각3",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각4",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각5",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각6",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각7",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각8",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각9",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각10",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각11",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각12",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각13",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각14",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각15",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각16",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각17",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각18",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각19",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "토스드 스우시 스퀘어레그 숏사각20",
        description: "실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 89000,
        discountedPrice: 80100,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product4-01.jpg",
          "http://localhost:3000/product-images/product4-02.jpg",
        ],
        salesVolume: 5,

        category_id: 7,
        discount_id: 2,
      }
    );
    //수모 cap 10개
    productData.push(
      {
        brandName: "NikeSwim",
        name: "스윔 빅 스우시 실리콘수모1",
        description: "나이키 시그니처 스타일의 빅 스우시 실리콘 수모입니다.",
        price: 25000,
        discountedPrice: 22500,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product5-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 10,
        category_id: 8,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "스윔 빅 스우시 실리콘수모2",
        description: "나이키 시그니처 스타일의 빅 스우시 실리콘 수모입니다.",
        price: 25000,
        discountedPrice: 22500,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product5-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],
        salesVolume: 20,
        category_id: 8,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "스윔 빅 스우시 실리콘수모3",
        description: "나이키 시그니처 스타일의 빅 스우시 실리콘 수모입니다.",
        price: 25000,
        discountedPrice: 22500,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product5-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 8,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "스윔 빅 스우시 실리콘수모4",
        description: "나이키 시그니처 스타일의 빅 스우시 실리콘 수모입니다.",
        price: 25000,
        discountedPrice: 22500,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product5-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 8,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "스윔 빅 스우시 실리콘수모5",
        description: "나이키 시그니처 스타일의 빅 스우시 실리콘 수모입니다.",
        price: 25000,
        discountedPrice: 22500,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product5-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 8,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "스윔 빅 스우시 실리콘수모6",
        description: "나이키 시그니처 스타일의 빅 스우시 실리콘 수모입니다.",
        price: 25000,
        discountedPrice: 22500,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product5-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 8,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "스윔 빅 스우시 실리콘수모7",
        description: "나이키 시그니처 스타일의 빅 스우시 실리콘 수모입니다.",
        price: 25000,
        discountedPrice: 22500,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product5-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 8,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "스윔 빅 스우시 실리콘수모8",
        description: "나이키 시그니처 스타일의 빅 스우시 실리콘 수모입니다.",
        price: 25000,
        discountedPrice: 22500,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product5-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 8,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "스윔 빅 스우시 실리콘수모9",
        description: "나이키 시그니처 스타일의 빅 스우시 실리콘 수모입니다.",
        price: 25000,
        discountedPrice: 22500,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product5-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 8,
        discount_id: 2,
      },
      {
        brandName: "NikeSwim",
        name: "스윔 빅 스우시 실리콘수모10",
        description: "나이키 시그니처 스타일의 빅 스우시 실리콘 수모입니다.",
        price: 25000,
        discountedPrice: 22500,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product5-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 8,
        discount_id: 2,
      }
    );
    //타올 towel 12개
    productData.push(
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린1",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],
        salesVolume: 10,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린2",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],
        salesVolume: 20,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린3",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린4",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린5",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린6",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린7",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],
        salesVolume: 10,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린8",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],
        salesVolume: 20,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린9",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린10",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린11",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린12",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 32400,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/product-images/product6-01.jpg",
          "http://localhost:3000/product-images/product5-02.jpg",
        ],

        salesVolume: 0,
        category_id: 9,
        discount_id: 2,
      }
    );
    //오리발 5개
    productData.push(
      {
        brandName: "Mares",
        name: "뉴 클리퍼 오리발1",
        description:
          "부드러운 소재로 발목의 무리를 최소화하며, 편안한 착용감을 제공합니다.",
        price: 54000,
        discountedPrice: 48600,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product7-01.jpg",
          "http://localhost:3000/product-images/product7-02.jpg",
        ],
        salesVolume: 20,

        category_id: 10,
        discount_id: 2,
      },
      {
        brandName: "Mares",
        name: "뉴 클리퍼 오리발2",
        description:
          "부드러운 소재로 발목의 무리를 최소화하며, 편안한 착용감을 제공합니다.",
        price: 54000,
        discountedPrice: 48600,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product7-01.jpg",
          "http://localhost:3000/product-images/product7-02.jpg",
        ],
        salesVolume: 30,

        category_id: 10,
        discount_id: 2,
      },
      {
        brandName: "Mares",
        name: "뉴 클리퍼 오리발3",
        description:
          "부드러운 소재로 발목의 무리를 최소화하며, 편안한 착용감을 제공합니다.",
        price: 54000,
        discountedPrice: 48600,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product7-01.jpg",
          "http://localhost:3000/product-images/product7-02.jpg",
        ],
        salesVolume: 10,

        category_id: 10,
        discount_id: 2,
      },
      {
        brandName: "Mares",
        name: "뉴 클리퍼 오리발4",
        description:
          "부드러운 소재로 발목의 무리를 최소화하며, 편안한 착용감을 제공합니다.",
        price: 54000,
        discountedPrice: 48600,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product7-01.jpg",
          "http://localhost:3000/product-images/product7-02.jpg",
        ],

        salesVolume: 0,
        category_id: 10,
        discount_id: 2,
      },
      {
        brandName: "Mares",
        name: "뉴 클리퍼 오리발5",
        description:
          "부드러운 소재로 발목의 무리를 최소화하며, 편안한 착용감을 제공합니다.",
        price: 54000,
        discountedPrice: 48600,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/product-images/product7-01.jpg",
          "http://localhost:3000/product-images/product7-02.jpg",
        ],
        salesVolume: 5,
        category_id: 10,
        discount_id: 2,
      }
    );

    const products = await Product.bulkCreate(productData);

    // 주문 데이터 생성 (각 사용자당 2개)
    const orders = await Order.bulkCreate([
      {
        receiver: "김철수",
        address: "서울시 강남구 123",
        detailAddress: "1123호",
        phoneNumber: "010-1111-2222",
        totalPrice: 297000,
        orderStatus: "ORDER_COMPLETE",
        user_id: 1,
      },
      {
        receiver: "김지균",
        address: "서울시 서초구 456",
        detailAddress: "101호",
        phoneNumber: "010-1234-1234",
        totalPrice: 441000,
        orderStatus: "SHIPPING",
        user_id: 1,
      },
      {
        receiver: "김철수",
        address: "서울시 용산구 789",
        detailAddress: "802호",
        phoneNumber: "010-1211-2223",
        totalPrice: 356000,
        orderStatus: "PAYMENT_COMPLETE",
        user_id: 2,
      },
      {
        receiver: "김철수",
        address: "서울시 종로구 101",
        detailAddress: "1102호",
        phoneNumber: "010-1111-2224",
        totalPrice: 99000,
        orderStatus: "DELIVERED",
        user_id: 2,
      },
    ]);

    // 주문 항목 데이터 생성
    const orderItems = await OrderItem.bulkCreate([
      { price: 99000, quantity: 1, size: "S", order_id: 1, product_id: 1 },
      { price: 99000, quantity: 2, size: "M", order_id: 1, product_id: 30 },
      { price: 72000, quantity: 2, size: "L", order_id: 2, product_id: 20 },
      { price: 99000, quantity: 3, size: "XL", order_id: 2, product_id: 40 },
      { price: 89000, quantity: 4, size: "M", order_id: 3, product_id: 50 },
      { price: 99000, quantity: 1, size: "S", order_id: 4, product_id: 35 },
    ]);

    // 리뷰 데이터 생성
    const reviews = await Review.bulkCreate([
      {
        content: "훌륭한 품질!",
        imageUrl: null,
        rating: 5,
        product_id: 1,
        user_id: 1,
      },
      {
        content: "만족스러운 구매",
        imageUrl: "http://localhost:3000/review-images/reviews1-01.jpg",
        rating: 4,
        product_id: 3,
        user_id: 2,
      },
      {
        content: "만족스러운 구매",
        imageUrl: null,
        rating: 3,
        product_id: 3,
        user_id: 2,
      },
      {
        content: "그냥 구매..",
        imageUrl: null,
        rating: 2,
        product_id: 2,
        user_id: 2,
      },
      {
        content: "좋아요",
        imageUrl: null,
        rating: 4,
        product_id: 18,
        user_id: 2,
      },
      {
        content:
          "이 수영복은 디자인이 예쁘고 착용감도 편안해서 좋아요. 특히, 엉덩이 라인이 예쁘게 잡혀서 만족스럽습니다. 여름 휴가 때 꼭 입고 싶어요!",
        imageUrl: "http://localhost:3000/review-images/reviews1-01.jpg",
        rating: 4,
        product_id: 20,
        user_id: 2,
      },
      {
        content: "무난템",
        imageUrl: "http://localhost:3000/review-images/reviews1-02.jpg",
        rating: 3,
        product_id: 20,
        user_id: 2,
      },
      {
        content: "별로에요",
        imageUrl: null,
        rating: 1,
        product_id: 20,
        user_id: 2,
      },
      {
        content: "배송이 빨라요",
        imageUrl: null,
        rating: 5,
        product_id: 30,
        user_id: 4,
      },
      {
        content: "배송이 빨라요",
        imageUrl: null,
        rating: 5,
        product_id: 31,
        user_id: 4,
      },
      {
        content: "무난템",
        imageUrl: null,
        rating: 3,
        product_id: 31,
        user_id: 4,
      },
      {
        content: "너무 좋아요!!",
        imageUrl: null,
        rating: 4,
        product_id: 50,
        user_id: 4,
      },
      {
        content: "너무 좋아요!!",
        imageUrl: null,
        rating: 4,
        product_id: 51,
        user_id: 4,
      },
      {
        content: "그냥 저냥...",
        imageUrl: null,
        rating: 2,
        product_id: 51,
        user_id: 4,
      },
      {
        content: "별로에요",
        imageUrl: null,
        rating: 1,
        product_id: 51,
        user_id: 4,
      },
      {
        content: "수친 선물로 샀어요",
        imageUrl: null,
        rating: 5,
        product_id: 70,
        user_id: 3,
      },
      {
        content: "수친 선물로 샀어요",
        imageUrl: null,
        rating: 5,
        product_id: 71,
        user_id: 3,
      },
      {
        content: "수친 선물로 샀어요",
        imageUrl: null,
        rating: 4,
        product_id: 71,
        user_id: 3,
      },
      {
        content: "무난템",
        imageUrl: null,
        rating: 2,
        product_id: 71,
        user_id: 3,
      },
      {
        content: "써본 것 중에 제일 좋아요",
        imageUrl: null,
        rating: 5,
        product_id: 80,
        user_id: 3,
      },
      {
        content: "써본 것 중에 제일 좋아요",
        imageUrl: null,
        rating: 5,
        product_id: 81,
        user_id: 2,
      },
      {
        content: "쓸만해요",
        imageUrl: null,
        rating: 4,
        product_id: 81,
        user_id: 2,
      },
      {
        content: "입문자에게 추천!",
        imageUrl: null,
        rating: 4,
        product_id: 90,
        user_id: 2,
      },
      {
        content: "입문자에게 추천!",
        imageUrl: null,
        rating: 5,
        product_id: 91,
        user_id: 2,
      },
      {
        content: "ㅁㄴ..",
        imageUrl: null,
        rating: 3,
        product_id: 91,
        user_id: 2,
      },
    ]);

    console.log("더미 데이터 생성 완료!");
  } catch (error) {
    console.error("더미 데이터 생성 중 오류 발생:", error);
  }
};

module.exports = seedData;
