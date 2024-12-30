import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "@/components/common/PrimaryButton";
import { useEffect } from "react";

function OrderThanksPage() {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const userId = sessionStorage.getItem("id");

  useEffect(() => {
    if (!userId) {
      // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
      navigate("/login");
    }
  }, [userId, navigate]);

  if (!userId) {
    // 리다이렉트 중에는 아무것도 렌더링하지 않음
    return null;
  }

  return (
    <>
      <div className="mx-auto w-full max-w-[836px]">
        <p className="mx-4 border-b p-2.5 text-center font-bold">
          주문/결제 완료
        </p>
        <p className="mx-auto py-20 text-center">주문/결제가 완료되었습니다!</p>
        <div className="mx-auto w-[98%]">
          <Link to="/">
            <PrimaryButton>메인으로 이동</PrimaryButton>
          </Link>
        </div>
      </div>
    </>
  );
}

export default OrderThanksPage;
