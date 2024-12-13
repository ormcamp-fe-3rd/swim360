import PrimaryButton from "@/components/common/PrimaryButton";

function JoinPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] px-4">
      <p className="border-b p-2.5 text-center font-bold">회원가입</p>
      <form action="#">
        <div className="h-22 flex w-full justify-between border-b py-4">
          <span className="block w-1/2 pl-4">이름</span>
          <input
            type="text"
            name="name"
            id="name"
            className="w-1/2 border-none bg-slate-100 py-2.5"
          />
        </div>
        <div className="h-22 flex w-full justify-between border-b py-4">
          <span className="block w-1/2 pl-4">연락처</span>
          <input
            type="text"
            name="phonenumber"
            id="phonenumber"
            className="w-1/2 border-none bg-slate-100 py-2.5"
          />
        </div>
        <div className="h-22 flex w-full justify-between border-b py-4">
          <span className="block w-1/2 pl-4">이메일 아이디</span>
          <input
            type="text"
            name="emailid"
            id="emailid"
            className="w-1/2 border-none bg-slate-100 py-2.5"
          />
        </div>
        <div className="h-22 flex w-full justify-between border-b py-4">
          <span className="block w-1/2 pl-4">비밀번호 변경</span>
          <div className="w-1/2 flex-col">
            <input
              type="text"
              name="password"
              id="password"
              className="w-full border-none bg-slate-100 py-2.5"
            />
            <span className="mt-2 block">
              영문,숫자,특수문자 포함 8자~16자 사이로 입력가능합니다.
            </span>
          </div>
        </div>
        <div className="h-22 flex w-full justify-between border-b py-4">
          <span className="block w-1/2 pl-4">비밀번호 확인</span>
          <div className="w-1/2 flex-col">
            <input
              type="text"
              name="passwordcheck"
              id="passwordcheck"
              className="w-full border-none bg-slate-100 py-2.5"
            />
            <span className="mt-2 block">비밀번호가 동일하지 않습니다.</span>
          </div>
        </div>
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
