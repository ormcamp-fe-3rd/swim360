import { useNavigate } from "react-router-dom";

import PrimaryButton from "@/components/common/PrimaryButton";
import FindIdPwdTab from "@/components/login/FindIdPwdTab";

function ChangePwdCompletionPage() {
  const navigate = useNavigate();

  return (
    <div>
      <FindIdPwdTab
        idContent={<></>}
        pwContent={
          <p className="mx-auto py-20 text-center">
            비밀번호 변경이 완료되었습니다!
          </p>
        }
        onIdClick={() => navigate("/FindIdPwdPage")}
      />
      <div className="mx-auto w-[98%]">
        <PrimaryButton>로그인 화면으로 이동</PrimaryButton>
      </div>
    </div>
  );
}

export default ChangePwdCompletionPage;
