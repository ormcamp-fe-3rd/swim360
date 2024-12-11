import PrimaryButton from "@/components/common/PrimaryButton";

function PayMentCompletionPage() {
  return (
    <div className="mx-auto w-[836px]">
      <p className="border-b p-2.5 text-center font-bold">주문/결제 화면</p>
      <p className="mx-auto py-20 text-center">주문/결제가 완료되었습니다!</p>
      <PrimaryButton>메인으로 이동</PrimaryButton>
    </div>
  );
}

export default PayMentCompletionPage;
