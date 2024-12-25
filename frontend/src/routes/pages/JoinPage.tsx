import PrimaryButton from "@/components/common/PrimaryButton";
import CustomButton from "@/components/join/CustomButton";
import InputField from "@/components/join/InputField";

function JoinPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] px-4">
      <p className="border-b border-black p-2.5 text-center text-xl font-semibold">
        회원가입
      </p>
      <form action="#" className="my-10 flex flex-col gap-5">
        <InputField label="이름" name="name" id="name" />
        <div className="border-b-2"></div>
        <InputField label="연락처" name="phonenum" id="phonenum" />
        <div className="border-b-2"></div>
        <InputField
          type="email"
          label="이메일 아이디"
          name="emailid"
          id="emailid"
        />
        <div className="border-b-2"></div>
        <InputField
          label="비밀번호"
          name="password"
          id="password"
          type="password"
          helperText="영문, 숫자, 특수문자 포함 8자~16자 사이로 입력가능합니다."
        />
        <div className="border-b-2"></div>
        <InputField
          label="비밀번호 확인"
          name="passwordcheck"
          id="passwordcheck"
          type="password"
          helperText="비밀번호가 동일하지 않습니다."
        />
        <div className="border-b-2"></div>
      </form>
      <div className="mt-20 flex justify-around gap-2.5">
        <CustomButton className="w-1/2 border-gray-400 hover:bg-gray-50">
          취소
        </CustomButton>
        <PrimaryButton className="w-1/2">확인</PrimaryButton>
      </div>
    </div>
  );
}

export default JoinPage;
