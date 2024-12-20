
import { Link } from "react-router-dom";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";


import PrimaryButton from "@/components/common/PrimaryButton";
import { UserIdSetterContext } from "@/contexts/UserContext";

function LoginPage() {
  const navigate = useNavigate();
  const setUserId = useContext(UserIdSetterContext);

  async function login() {
    //TODO: 아이디, 비밀번호 검증
    const idInput = document.getElementById("id") as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password",
    ) as HTMLInputElement;

    if (!idInput.value || !passwordInput.value) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      sessionStorage.setItem("id", idInput.value);
      if (idInput.value) {
        setUserId(idInput.value);
        navigate(`/mypage/${idInput.value}`);
      }
    } catch (error) {
      console.log(error);
      alert("로그인 오류");
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
          className="sm:h-[14px] sm:w-[14px]"
          name="idMemories"
          id="idMemories"
        />
        <span className="ml-2 align-text-bottom sm:text-[14px]">
          아이디 저장
        </span>
      </label>
      <PrimaryButton onClick={login}>로그인</PrimaryButton>
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
