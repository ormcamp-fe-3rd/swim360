import PrimaryButton from "@/components/common/PrimaryButton";

function LoginPage() {
  return (
    <div className="mx-auto w-full max-w-[600px] px-4">
      <p className="border-b border-black p-2.5 text-center font-bold">
        로그인
      </p>
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
      <label className="my-4 ml-4 inline-block">
        <input
          type="checkbox"
          className="sm:h-[22px] sm:w-[22px]"
          name="id-Memories"
          id="id-Memories"
        />
        <span className="ml-2 align-text-bottom sm:text-[20px]">
          아이디 저장
        </span>
      </label>
      <PrimaryButton>로그인</PrimaryButton>
      <ul className="mt-4 grid gap-4 text-center sm:flex sm:justify-center">
        <li className="inline-block">아이디 찾기</li>
        <li className="mx-7 inline-block">비밀번호 찾기</li>
        <li className="inline-block">회원가입</li>
      </ul>
    </div>
  );
}

export default LoginPage;
