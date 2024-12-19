import { Link } from "react-router-dom";

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
          type="password"
          className="w-full rounded border p-2.5"
          name="password"
          id="password"
          placeholder="비밀번호"
        />
      </div>
      <label className="my-4 ml-4 inline-block">
        <input
          type="checkbox"
          className="sm:h-[14px] sm:w-[14px]"
          name="idMemories"
          id="idMemories"
        />
        <span className="ml-2 align-text-bottom sm:text-[14px]">
          아이디 저장
        </span>
      </label>
      <PrimaryButton>로그인</PrimaryButton>
      <ul className="mt-4 grid gap-4 text-center sm:flex sm:justify-center">
        <Link to="/Find_Id_Pwd?type=id">
          <li className="inline-block">아이디 찾기</li>
        </Link>
        <Link to="/Find_Id_Pwd?type=pwd">
          <li className="mx-7 inline-block">비밀번호 찾기</li>
        </Link>
        <Link to="/Agrees">
          <li className="inline-block">회원가입</li>
        </Link>
      </ul>
    </div>
  );
}

export default LoginPage;
