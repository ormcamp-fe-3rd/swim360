import PrimaryButton from "@/components/common/PrimaryButton";
import InputField from "@/components/join/InputField";

function JoinPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] px-4">
      <p className="border-b p-2.5 text-center font-bold">회원가입</p>
      <form action="#">
        <InputField label="이름" name="name" id="name" />
        <InputField label="연락처" name="phonenum" id="phonenum" />
        <InputField label="이메일 아이디" name="emailid" id="emailid" />
        <InputField
          label="비밀번호 변경"
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
        <button className="w-1/2 rounded-md border border-black bg-white text-black">
          취소
        </button>
        <div className="w-1/2">
          <PrimaryButton>확인</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default JoinPage;
