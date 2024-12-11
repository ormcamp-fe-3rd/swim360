import PrimaryButton from "@/components/common/PrimaryButton";

function LoginPage() {
  return (
    <div className="mx-auto w-[600px]">
      <p className="border-b p-2.5 text-center font-bold">로그인</p>
      <div className="p-2.5">
        <input
          type="text"
          className="mb-2.5 w-full rounded border p-2.5"
          name="id"
          id="id"
          placeholder="아이디"
        />
        <input
          type="text"
          className="w-full rounded border p-2.5"
          name="password"
          id="password"
          placeholder="비밀번호"
        />
      </div>
      <label htmlFor="" className="ml-4">
        <input type="checkbox" name="" id="" />
        <span className="ml-2">아이디 저장</span>
      </label>
      {/* <ConfirmButton text="로그인" width="full" font="my-10"/> */}
      <PrimaryButton>로그인</PrimaryButton>
      <ul className="text-center">
        <li className="inline-block">아이디 찾기</li>
        <li className="mx-7 inline-block">비밀번호 찾기</li>
        <li className="inline-block">회원가입</li>
      </ul>
    </div>
  );
}

export default LoginPage;
