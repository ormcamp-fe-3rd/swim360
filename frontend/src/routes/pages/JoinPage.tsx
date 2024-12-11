import PrimaryButton from "@/components/common/PrimaryButton";

function JoinPage() {
  return (
    <div className="mx-auto w-[836px]">
      <p className="border-b p-2.5 text-center font-bold">회원가입</p>
      <form action="#">
        <div className="h-22 w-[940px] justify-between">
          <span className="w-[295px]">이름</span>
          <input
            type="text"
            name="name"
            id="name"
            className="w-[540px] border-none py-2.5"
          />
        </div>
        <div className="h-22 w-[940px] justify-between">
          <span className="w-[295px]">연락처</span>
          <input
            type="text"
            name="phonenumber"
            id="phonenumber"
            className="w-[540px] border-none py-2.5"
          />
        </div>
        <div className="h-22 w-[940px] justify-between">
          <span className="w-[295px]">이메일 아이디</span>
          <input
            type="text"
            name="emailid"
            id="emailid"
            className="w-[540px] border-none py-2.5"
          />
        </div>
        <div className="h-22 w-[940px] justify-between">
          <span className="w-[295px]">비밀번호 변경</span>
          <div className="flex-col">
            <input
              type="text"
              name="password"
              id="password"
              className="w-[540px] border-none py-2.5"
            />
            <span>영문,숫자,특수문자 포함 8자~16자 사이로 입력가능합니다.</span>
          </div>
        </div>
        <div className="h-22 w-[940px] justify-between">
          <span className="w-[295px]">비밀번호 확인</span>
          <div className="flex-col">
            <input
              type="text"
              name="passwordcheck"
              id="passwordcheck"
              className="w-[540px] border-none py-2.5"
            />
            <span>비밀번호가 동일하지 않습니다.</span>
          </div>
        </div>
      </form>
      <div className="gap-2.5">
        <button className="w-[418px] border bg-white text-black">취소</button>
        {/* <ConfirmButton text="확인" width="418" font="my-10"/> */}
        <PrimaryButton>확인</PrimaryButton>
      </div>
    </div>
  );
}

export default JoinPage;
