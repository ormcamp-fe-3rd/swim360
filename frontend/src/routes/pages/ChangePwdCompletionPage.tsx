import PrimaryButton from "@/components/common/PrimaryButton";
import FindIdPwdTab from "@/components/login/FindIdPwdTab";

function JoinCompletionPage() {
  return (
    <div className="mx-auto w-full max-w-[836px]">
      <FindIdPwdTab />
      <div className="mx-auto w-[98%]">
        <PrimaryButton>로그인 화면으로 이동</PrimaryButton>
      </div>
    </div>
  );
}

export default JoinCompletionPage;
