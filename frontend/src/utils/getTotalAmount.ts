type Point = {
  date: string;
  name: string;
  amount: number;
}

export function getTotalAmount(points: Point[]): number {
  return points.reduce((total, point) => total + point.amount, 0);
}
