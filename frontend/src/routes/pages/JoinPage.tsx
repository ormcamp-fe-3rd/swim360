import ConfirmButton from "@/components/common/ConfirmButton.tsx";

function JoinPage() {
  return <div className="w-[836px] mx-auto">
    <p className="text-center p-2.5 border-b font-bold">회원가입</p>
    <form action="#">
      <div className="w-[940px] h-22 justify-between">
        <span className="w-[295px]">이름</span>
        <input type="text" name="name" id="name" className="w-[540px] py-2.5 border-none" />
      </div>
      <div className="w-[940px] h-22 justify-between">
        <span className="w-[295px]">연락처</span>
        <input type="text" name="phonenumber" id="phonenumber" className="w-[540px] py-2.5 border-none"/>
      </div>
      <div className="w-[940px] h-22 justify-between">
        <span className="w-[295px]">이메일 아이디</span>
        <input type="text" name="emailid" id="emailid" className="w-[540px] py-2.5 border-none"/>
      </div>
      <div className="w-[940px] h-22 justify-between">
        <span className="w-[295px]">비밀번호 변경</span>
        <div className="flex-col">
          <input type="text" name="password" id="password" className="w-[540px] py-2.5 border-none" />
          <span>영문,숫자,특수문자 포함 8자~16자 사이로 입력가능합니다.</span>
        </div>
      </div>
      <div className="w-[940px] h-22 justify-between">
        <span className="w-[295px]">비밀번호 확인</span>
        <div className="flex-col">
          <input type="text" name="passwordcheck" id="passwordcheck" className="w-[540px] py-2.5 border-none" />
          <span>비밀번호가 동일하지 않습니다.</span>
        </div>
      </div>
    </form>
    <div className="gap-2.5">
            <button className="w-[418px] border text-black bg-white">취소</button>
            <ConfirmButton text="확인" width="418" font="my-10"/>
        </div>
  
  </div>;
}

export default JoinPage;