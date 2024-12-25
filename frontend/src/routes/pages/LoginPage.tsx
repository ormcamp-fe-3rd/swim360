import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "@/components/common/PrimaryButton";
import { useUserId } from "@/hooks/useUserId";
import { getUserByEmail } from "@/services/user";

function LoginPage() {
  const navigate = useNavigate();
  const { setUserId } = useUserId();

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberEmail, setRememberEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useState(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      setEmailId(savedEmail);
      setRememberEmail(true);
    }
  }, []);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailId(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberEmail(event.target.checked);
    if (!event.target.checked) {
      localStorage.removeItem("savedEmail");
    }
  };

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!emailId || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      setIsLoading(true);
      const user = await getUserByEmail(emailId);

      if (!user || user.password != password) {
        alert("이메일 또는 비밀번호가 올바르지 않습니다.");
        return;
      }

      if (rememberEmail) {
        localStorage.setItem("savedEmail", emailId);
      }

      const userId = user.id.toString();
      setUserId(userId);
      sessionStorage.setItem("id", userId);
      navigate("/mypage");
    } catch (error: any) {
      console.log("Login error: ", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[620px]">
      <p className="border-b border-black p-2.5 text-center font-bold">
        로그인
      </p>
      <div className="py-2.5">
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              name="emailId"
              value={emailId}
              placeholder="이메일 아이디"
              onChange={handleEmailChange}
              disabled={isLoading}
              className="my-2 w-full rounded border p-2.5"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="비밀번호"
              onChange={handlePasswordChange}
              disabled={isLoading}
              className="my-2 w-full rounded border p-2.5"
              required
            />
          </div>
          <label className="my-2 ml-0.5 inline-block">
            <input
              type="checkbox"
              className="sm:h-[14px] sm:w-[14px]"
              checked={rememberEmail}
              onChange={handleRememberEmail}
              disabled={isLoading}
              name="idMemories"
              id="idMemories"
            />
            <span className="ml-2 align-text-bottom sm:text-[14px]">
              아이디 저장
            </span>
          </label>
          <PrimaryButton type="submit" disabled={isLoading}>
            {isLoading ? "로그인 중..." : "로그인"}
          </PrimaryButton>
        </form>
      </div>
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
