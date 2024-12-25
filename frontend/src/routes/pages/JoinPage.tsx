import PrimaryButton from "@/components/common/PrimaryButton";
import CustomButton from "@/components/join/CustomButton";
import InputField from "@/components/join/InputField";
import { useNavigate } from "react-router-dom";

function JoinPage() {
  const navigate = useNavigate();

  const handleCancelButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="mx-auto w-full max-w-[960px] px-4">
      <p className="border-b p-2.5 text-center font-bold">회원가입</p>
      <form action="#">
        <InputField label="이름" name="name" id="name" />
        <InputField label="연락처" name="phonenum" id="phonenum" />
        <InputField
          type="email"
          label="이메일 아이디"
          name="emailid"
          id="emailid"
        />
        <InputField
          label="비밀번호"
          name="password"
          id="password"
          type="password"
          helperText="영문, 숫자, 특수문자 포함 8자~16자 사이로 입력가능합니다."
        />
        <InputField
          label="비밀번호 확인"
          name="passwordcheck"
          id="passwordcheck"
          type="password"
          helperText="비밀번호가 동일하지 않습니다."
        />
      </form>
      <div className="mt-4 flex justify-around gap-2.5">
        <CustomButton onClick={handleCancelButtonClick} className="w-1/2">
          취소
        </CustomButton>
        <PrimaryButton className="w-1/2">확인</PrimaryButton>
      </div>
    </div>
  );
}

export default JoinPage;
