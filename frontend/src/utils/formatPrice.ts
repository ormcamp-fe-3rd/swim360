type FormatPriceOptions = {
  currency?: string; // 통화 표시 (예: '₩')
  decimal?: number; // 소수점 자릿수
  fallback?: string; // 에러시 반환할 기본값
};

export const formatPrice = (
  price: number | string | null | undefined,
  options: FormatPriceOptions = {},
): string => {
  const { currency = "", decimal = 0, fallback = "0" } = options;

  try {
    // null, undefined 체크
    if (price == null) return fallback;

    // 숫자로 변환
    const numPrice = Number(price);

    // 유효한 숫자가 아닌 경우
    if (isNaN(numPrice)) return fallback;

    // 천단위 콤마와 소수점 처리
    const formatted = numPrice.toLocaleString("ko-KR", {
      minimumFractionDigits: decimal,
      maximumFractionDigits: decimal,
    });

    return currency ? `${currency}${formatted}` : formatted;
  } catch (error) {
    console.error("Price formatting error:", error);
    return fallback;
  }
};
