import { Link } from "react-router-dom";

import PrimaryButton from "@/components/common/PrimaryButton";

function PayMentPage() {
  return (
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
  );
}

export default PayMentPage;
