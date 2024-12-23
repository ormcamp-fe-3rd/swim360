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
      { name: "bag", parent_id: 3 },
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
        password: "password123",
      },
      {
        name: "김철수",
        emailId: "kim@example.com",
        phoneNumber: "01087654321",
        password: "password456",
      },
    ]);

    // 상품 데이터 생성 (카테고리별 약 5개씩)
    const productData = [];
    productData.push(
      {
        brandName: "Swave",
        name: "세레니티 크로스에이백 딥그린",
        description:
          "프로페셔널 수영선수를 위한 원피스 수영복입니다. 고급 원단을 사용하여 내구성이 뛰어나며, 유체역학적 설계로 최상의 퍼포먼스를 제공합니다.",
        price: 59000,
        discountedPrice: 59000,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/images/product1-01.jpg",
          "http://localhost:3000/images/product1-01.jpg",
        ],
        salesVolume: 1000,
        category_id: 4,
        discount_id: 1,
      },
      {
        brandName: "ADDIBLE",
        name: "플레이어 반신 브이백 딥와인",
        description:
          "엘리트 수영선수를 위한 프리미엄 원피스 수영복입니다. 편안한 착용감과 함께 최적의 근육 지지력을 제공합니다.",
        price: 72000,
        discountedPrice: 72000,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/images/product2-01.jpg",
          "http://localhost:3000/images/product2-02.jpg",
        ],
        salesVolume: 200,
        category_id: 5,
        discount_id: 1,
      },
      {
        brandName: "HOOG",
        name: "723 오스카 5부 슬림핏 탄탄이 까망오렌지",
        description:
          "다이나믹한 수영을 위한 고성능 원피스입니다. 특수 코팅 처리로 물의 저항을 최소화하였습니다.",
        price: 82000,
        discountedPrice: 82000,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/images/product3-01.jpg",
          "http://localhost:3000/images/product3-02.jpg",
        ],
        salesVolume: 300,
        category_id: 6,
        discount_id: 1,
      },
      {
        brandName: "Barrel",
        name: "맨 코리아 에디션 숏사각 핑크",
        description:
          "클래식한 디자인의 원피스 수영복입니다. 실용성과 편안함을 동시에 제공하며, 내구성이 뛰어납니다.",
        price: 69000,
        discountedPrice: 69000,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/images/product4-01.jpg",
          "http://localhost:3000/images/product4-02.jpg",
        ],
        salesVolume: 400,
        category_id: 7,
        discount_id: 1,
      },
      {
        brandName: "Arena",
        name: "라운드 손가방 베이지",
        description:
          "경기용으로 최적화된 원피스 수영복입니다. FINA 공인 제품으로 공식 대회에서 사용 가능합니다.",
        price: 54000,
        discountedPrice: 54000,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/images/product5-01.jpg",
          "http://localhost:3000/images/product5-02.jpg",
        ],
        salesVolume: 10,
        category_id: 8,
        discount_id: 1,
      },
      {
        brandName: "Speeco",
        name: "마이크로 습식타올 더블 L 그린",
        description:
          "전신 수영복으로 최상의 근육 지지와 압박감을 제공합니다. 고급 소재를 사용하여 내구성과 신축성이 뛰어납니다.",
        price: 36000,
        discountedPrice: 36000,
        size: ["FREE"],
        imageUrl: [
          "http://localhost:3000/images/product6-01.jpg",
          "http://localhost:3000/images/product5-02.jpg",
        ],
        salesVolume: 0,
        category_id: 9,
        discount_id: 2,
      },
      {
        brandName: "DMC",
        name: "엘리트 맥스 숏핀 오리발",
        description:
          "엘리트 수영선수를 위한 전신 수영복입니다. 특수 설계된 패널이 근육을 효과적으로 지지합니다.",
        price: 109000,
        discountedPrice: 109000,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "http://localhost:3000/images/product7-01.jpg",
          "http://localhost:3000/images/product7-02.jpg",
        ],
        salesVolume: 0,
        category_id: 10,
        discount_id: 2,
      },
      {
        brandName: "Mizuno",
        name: "Dynamic Full-body M1",
        description:
          "역동적인 수영을 위한 전신 수영복입니다. 편안한 착용감과 함께 최적의 활동성을 제공합니다.",
        price: 150000,
        discountedPrice: 120000,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "https://example.com/full-body-m1-1.jpg",
          "https://example.com/full-body-m1-2.jpg",
        ],
        salesVolume: 0,
        category_id: 5,
        discount_id: 3,
      },
      {
        brandName: "Arena",
        name: "Classic Full-body A2",
        description:
          "클래식한 디자인의 전신 수영복입니다. 기본에 충실한 디자인으로 실용성이 뛰어납니다.",
        price: 145000,
        discountedPrice: 130500,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "https://example.com/full-body-a2-1.jpg",
          "https://example.com/full-body-a2-2.jpg",
        ],
        salesVolume: 0,
        category_id: 5,
        discount_id: 2,
      },
      {
        brandName: "Speedo",
        name: "Competition Full-body S2",
        description:
          "경기용 전신 수영복으로 최고의 퍼포먼스를 제공합니다. FINA 공인 제품입니다.",
        price: 165000,
        discountedPrice: 148500,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "https://example.com/full-body-s2-1.jpg",
          "https://example.com/full-body-s2-2.jpg",
        ],
        salesVolume: 0,
        category_id: 5,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "Pro Mid-length A1",
        description:
          "프로페셔널 선수용 미들 렝스 수영복입니다. 최적의 유체역학 성능을 제공합니다.",
        price: 100000,
        discountedPrice: 90000,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "https://example.com/mid-length-a1-1.jpg",
          "https://example.com/mid-length-a1-2.jpg",
        ],
        salesVolume: 0,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Speedo",
        name: "Elite Mid-length S1",
        description:
          "엘리트 수영선수를 위한 미들 렝스 수영복입니다. 근육 피로를 줄여주는 압박 설계가 특징입니다.",
        price: 95000,
        discountedPrice: 85500,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "https://example.com/mid-length-s1-1.jpg",
          "https://example.com/mid-length-s1-2.jpg",
        ],
        salesVolume: 0,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Mizuno",
        name: "Dynamic Mid-length M1",
        description:
          "다이나믹한 수영을 위한 5부 수영복입니다. 활동성과 편안함을 동시에 제공합니다.",
        price: 75000,
        discountedPrice: 60000,
        size: ["S", "M", "L", "XL"],
        imageUrl: ["mid-length-m1-1.jpg", "mid-length-m1-2.jpg"],
        salesVolume: 0,
        category_id: 6,
        discount_id: 3,
      },
      {
        brandName: "Arena",
        name: "Classic Mid-length A2",
        description:
          "클래식한 디자인의 5부 수영복입니다. 실용적인 디자인으로 일상적인 수영에 적합합니다.",
        price: 70000,
        discountedPrice: 63000,
        size: ["S", "M", "L", "XL"],
        imageUrl: ["mid-length-a2-1.jpg", "mid-length-a2-2.jpg"],
        salesVolume: 0,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Speedo",
        name: "Competition Mid-length S2",
        description:
          "경기용 5부 수영복으로 최상의 퍼포먼스를 제공합니다. FINA 공인 제품입니다.",
        price: 90000,
        discountedPrice: 81000,
        size: ["S", "M", "L", "XL"],
        imageUrl: ["mid-length-s2-1.jpg", "mid-length-s2-2.jpg"],
        salesVolume: 0,
        category_id: 6,
        discount_id: 2,
      },
      {
        brandName: "Mizuno",
        name: "Dynamic Square-cut M1",
        description:
          "스퀘어 컷 디자인으로 편안함과 스타일을 겸비한 수영복입니다.",
        price: 80000,
        discountedPrice: 72000,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "https://example.com/square-cut-m1-1.jpg",
          "https://example.com/square-cut-m1-2.jpg",
        ],
        salesVolume: 0,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "Classic Square-cut A2",
        description:
          "베이직한 스퀘어 컷 디자인으로 누구나 만족할 만한 품질을 제공합니다.",
        price: 85000,
        discountedPrice: 76500,
        size: ["S", "M", "L", "XL"],
        imageUrl: [
          "https://example.com/square-cut-a2-1.jpg",
          "https://example.com/square-cut-a2-2.jpg",
        ],
        salesVolume: 0,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "Mizuno",
        name: "Dynamic Square-cut M1",
        description:
          "다이나믹한 수영을 위한 사각 수영복입니다. 최적의 피팅감을 제공합니다.",
        price: 70000,
        discountedPrice: 56000,
        size: ["S", "M", "L", "XL"],
        imageUrl: ["square-cut-m1-1.jpg", "square-cut-m1-2.jpg"],
        salesVolume: 0,
        category_id: 7,
        discount_id: 3,
      },
      {
        brandName: "Arena",
        name: "Classic Square-cut A2",
        description:
          "클래식한 디자인의 사각 수영복입니다. 심플하고 실용적인 디자인이 특징입니다.",
        price: 65000,
        discountedPrice: 58500,
        size: ["S", "M", "L", "XL"],
        imageUrl: ["square-cut-a2-1.jpg", "square-cut-a2-2.jpg"],
        salesVolume: 0,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "Speedo",
        name: "Competition Square-cut S2",
        description:
          "경기용 사각 수영복으로 최상의 성능을 제공합니다. FINA 공인 제품입니다.",
        price: 85000,
        discountedPrice: 76500,
        size: ["S", "M", "L", "XL"],
        imageUrl: ["square-cut-s2-1.jpg", "square-cut-s2-2.jpg"],
        salesVolume: 0,
        category_id: 7,
        discount_id: 2,
      },
      {
        brandName: "Arena",
        name: "Swimming Backpack A1",
        description: "넉넉한 수납 공간과 방수 기능을 갖춘 수영 백팩입니다.",
        price: 50000,
        discountedPrice: 45000,
        size: ["One-size"],
        imageUrl: [
          "https://example.com/bag-a1-1.jpg",
          "https://example.com/bag-a1-2.jpg",
        ],
        salesVolume: 0,
        category_id: 8,
        discount_id: 1,
      },
      {
        brandName: "Speedo",
        name: "Gear Bag S1",
        description:
          "스피도만의 기술로 설계된 가볍고 내구성 있는 기어 백입니다.",
        price: 55000,
        discountedPrice: 49500,
        size: ["One-size"],
        imageUrl: [
          "https://example.com/bag-s1-1.jpg",
          "https://example.com/bag-s1-2.jpg",
        ],
        salesVolume: 0,
        category_id: 8,
        discount_id: 1,
      },
      {
        brandName: "Mizuno",
        name: "Dynamic Swim Bag M1",
        description:
          "실용적인 디자인의 수영가방입니다. 필수품을 보관하기 위한 최적의 공간 구성을 제공합니다.",
        price: 55000,
        discountedPrice: 44000,
        size: ["FREE"],
        imageUrl: ["bag-m1-1.jpg", "bag-m1-2.jpg"],
        salesVolume: 0,
        category_id: 8,
        discount_id: 3,
      },
      {
        brandName: "Arena",
        name: "Classic Swim Bag A2",
        description:
          "클래식한 디자인의 수영가방입니다. 심플하면서도 실용적인 구성이 특징입니다.",
        price: 50000,
        discountedPrice: 45000,
        size: ["FREE"],
        imageUrl: ["bag-a2-1.jpg", "bag-a2-2.jpg"],
        salesVolume: 0,
        category_id: 8,
        discount_id: 2,
      },
      {
        brandName: "Speedo",
        name: "Competition Swim Bag S2",
        description:
          "경기용 수영가방으로 대회 참가에 필요한 모든 장비를 수납할 수 있습니다.",
        price: 70000,
        discountedPrice: 63000,
        size: ["FREE"],
        imageUrl: ["bag-s2-1.jpg", "bag-s2-2.jpg"],
        salesVolume: 0,
        category_id: 8,
        discount_id: 2,
      },
      {
        brandName: "Mizuno",
        name: "Quick-dry Towel M1",
        description: "빠르게 마르는 흡수성이 좋은 수건입니다.",
        price: 30000,
        discountedPrice: 27000,
        size: ["One-size"],
        imageUrl: [
          "https://example.com/towel-m1-1.jpg",
          "https://example.com/towel-m1-2.jpg",
        ],
        salesVolume: 0,
        category_id: 9,
        discount_id: 1,
      },
      {
        brandName: "Arena",
        name: "Large Towel A2",
        description: "대형 사이즈의 부드러운 감촉을 자랑하는 타월입니다.",
        price: 35000,
        discountedPrice: 31500,
        size: ["One-size"],
        imageUrl: [
          "https://example.com/towel-a2-1.jpg",
          "https://example.com/towel-a2-2.jpg",
        ],
        salesVolume: 0,
        category_id: 9,
        discount_id: 1,
      },
      {
        brandName: "Arena",
        name: "Pro Fins A1",
        description:
          "프로페셔널 수영자를 위한 고성능 오리발입니다. 유체역학적 설계로 빠른 추진력을 제공합니다.",
        price: 80000,
        discountedPrice: 72000,
        size: ["FREE"],
        imageUrl: ["fins-a1-1.jpg", "fins-a1-2.jpg"],
        salesVolume: 0,
        category_id: 10,
        discount_id: 2,
      },
      {
        brandName: "Speedo",
        name: "Elite Fins S1",
        description:
          "엘리트 수영 선수를 위한 프리미엄 오리발입니다. 발의 피로를 최소화하고 최적의 성능을 제공합니다.",
        price: 85000,
        discountedPrice: 76500,
        size: ["FREE"],
        imageUrl: ["fins-s1-1.jpg", "fins-s1-2.jpg"],
        salesVolume: 0,
        category_id: 10,
        discount_id: 2,
      },
      {
        brandName: "Mizuno",
        name: "Dynamic Fins M1",
        description:
          "다이나믹한 수영 스타일에 적합한 오리발입니다. 경량 설계로 뛰어난 착용감을 제공합니다.",
        price: 75000,
        discountedPrice: 60000,
        size: ["FREE"],
        imageUrl: ["fins-m1-1.jpg", "fins-m1-2.jpg"],
        salesVolume: 0,
        category_id: 10,
        discount_id: 3,
      },
      {
        brandName: "Arena",
        name: "Classic Fins A2",
        description:
          "클래식한 디자인과 실용성을 겸비한 오리발입니다. 초보자와 숙련자 모두에게 적합합니다.",
        price: 70000,
        discountedPrice: 63000,
        size: ["FREE"],
        imageUrl: ["fins-a2-1.jpg", "fins-a2-2.jpg"],
        salesVolume: 0,
        category_id: 10,
        discount_id: 2,
      },
      {
        brandName: "Speedo",
        name: "Competition Fins S2",
        description:
          "경기용 오리발로 최상의 추진력을 제공합니다. 내구성이 뛰어나며 FINA 공인 제품입니다.",
        price: 90000,
        discountedPrice: 81000,
        size: ["FREE"],
        imageUrl: ["fins-s2-1.jpg", "fins-s2-2.jpg"],
        salesVolume: 0,
        category_id: 10,
        discount_id: 2,
      }
    );
    const products = await Product.bulkCreate(productData);

    // 주문 데이터 생성 (각 사용자당 2개)
    const orders = await Order.bulkCreate([
      {
        adress: "서울시 강남구 123",
        price: 30000,
        orderStatus: "ORDER_COMPLETE",
        user_id: 1,
      },
      {
        adress: "서울시 서초구 456",
        price: 45000,
        orderStatus: "SHIPPING",
        user_id: 1,
      },
      {
        adress: "서울시 용산구 789",
        price: 20000,
        orderStatus: "PAYMENT_COMPLETE",
        user_id: 2,
      },
      {
        adress: "서울시 종로구 101",
        price: 55000,
        orderStatus: "DELIVERED",
        user_id: 2,
      },
    ]);

    // 주문 항목 데이터 생성
    const orderItems = await OrderItem.bulkCreate([
      { price: 10000, quantity: 1, size: "S", order_id: 1, product_id: 1 },
      { price: 20000, quantity: 2, size: "M", order_id: 1, product_id: 2 },
      { price: 15000, quantity: 2, size: "L", order_id: 2, product_id: 3 },
      { price: 30000, quantity: 3, size: "XL", order_id: 2, product_id: 4 },
      { price: 20000, quantity: 4, size: "M", order_id: 3, product_id: 5 },
      { price: 55000, quantity: 1, size: "S", order_id: 4, product_id: 6 },
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
        content: "훌륭한 품질2!",
        imageUrl: null,
        rating: 3,
        product_id: 1,
        user_id: 1,
      },
      {
        content: "만족스러운 구매",
        imageUrl: null,
        rating: 4,
        product_id: 2,
        user_id: 2,
      },
    ]);

    console.log("더미 데이터 생성 완료!");
  } catch (error) {
    console.error("더미 데이터 생성 중 오류 발생:", error);
  }
};

module.exports = seedData;
