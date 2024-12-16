interface point {
  date: string;
  name: string;
  amount: number;
}

const points: point[] = [
  {
    date: "2024.12.20.",
    name: "구매 사용",
    amount: -450,
  },
  {
    date: "2024.07.02.",
    name: "구매 적립",
    amount: +500,
  },
  {
    date: "2024.05.29.",
    name: "구매 사용",
    amount: -750,
  },
  {
    date: "2024.03.11.",
    name: "회원가입 적립",
    amount: +1000,
  },
];

export type { point };
export { points };
