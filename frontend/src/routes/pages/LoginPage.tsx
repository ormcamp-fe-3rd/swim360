import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "@/components/common/PrimaryButton";
import { IsLoginSetterContext } from "@/contexts/IsLoginContext";

function LoginPage() {

  const navigate = useNavigate();
  const setIsLogin = useContext(IsLoginSetterContext)

  function login(){
    //TODO: 아이디, 비밀번호 검증
    const id = document.getElementById("id") as HTMLInputElement
    if(id.value){
      sessionStorage.setItem("id", id.value)
      setIsLogin(true)
      navigate(`/mypage/${id.value}`);
    }
  }

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
          className="sm:h-[22px] sm:w-[22px]"
          name="idMemories"
          id="idMemories"
        />
        <span className="ml-2 align-text-bottom sm:text-[20px]">
          아이디 저장
        </span>
      </label>
      <PrimaryButton onClick={login}>로그인</PrimaryButton>
      <ul className="mt-4 grid gap-4 text-center sm:flex sm:justify-center">
        <li className="inline-block">아이디 찾기</li>
        <li className="mx-7 inline-block">비밀번호 찾기</li>
        <li className="inline-block">회원가입</li>
      </ul>
    </div>
  );
}

export default LoginPage;
