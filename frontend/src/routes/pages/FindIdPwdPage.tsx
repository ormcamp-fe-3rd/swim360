import PrimaryButton from "@/components/common/PrimaryButton";
import FindIdPwdTab from "@/components/login/FindIdPwdTab";

function FindIdPwdPage() {
  return (
    <div className="mx-auto w-[620px]">
      <FindIdPwdTab
        idContent={
          <div>
            <input
              type="text"
              className="mb-4 h-[60px] w-[600px] rounded-[5px] border p-2.5"
              placeholder="이름 / 홍길동"
            />
            <input
              type="text"
              className="h-[60px] w-[600px] rounded-[5px] border p-2.5"
              placeholder="전화번호 / 01011112222"
            />
          </div>
        }
        pwContent={
          <div>
            <input
              type="text"
              className="mb-4 h-[60px] w-[600px] rounded-[5px] border p-2.5"
              placeholder="이메일 아이디 / kim123@naver.com"
            />
            <input
              type="text"
              className="mb-4 h-[60px] w-[600px] rounded-[5px] border p-2.5"
              placeholder="이름 / 홍길동"
            />
            <input
              type="text"
              className="h-[60px] w-[600px] rounded-[5px] border p-2.5"
              placeholder="전화번호 / 01011112222"
            />
          </div>
        }
      />

      <PrimaryButton className="my-4 w-full">확인</PrimaryButton>
    </div>
  );
}

export default FindIdPwdPage;
