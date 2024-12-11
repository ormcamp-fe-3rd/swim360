import PrimaryButton from "@/components/common/PrimaryButton";

function JoinCompletionPage() {
  return (
    <div className="mx-auto w-[836px]">
      <p className="border-b p-2.5 text-center font-bold">회원가입</p>
      <p className="mx-auto py-20 text-center">회원가입 완료되었습니다.</p>
      <div className="mx-auto w-[600px]">
        <PrimaryButton>로그인 화면으로 이동</PrimaryButton>
      </div>
    </div>
  );
}

export default JoinCompletionPage;