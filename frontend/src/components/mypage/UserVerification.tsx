import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserId } from "@/hooks/useUserId";
import { getUser } from "@/services/user";

import PrimaryButton from "../common/PrimaryButton";

export default function UserVerification() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { userId } = useUserId();

  useEffect(()=> {
    if(!userId){
      alert("잘못된 접근입니다.")
      navigate("/login")
    }
  },[userId, navigate])

  const handlePassword = (event:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  async function handleVerification(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return
    }

    try {
      const user = await getUser(userId);

      if (!user) return;
      if (user.password === password) {
        navigate("/mypage/edit", {state: "success"});
      } else {
        alert("비밀번호가 올바르지 않습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mx-auto flex w-full tablet:w-[600px] flex-col gap-[42px]">
      <p className="border-b border-black p-2.5 text-center text-xl font-semibold">
        본인확인
      </p>
      <form onSubmit={handleVerification}>
        <div className="p-2.5 flex flex-col gap-[42px]">
          <input type="password" name="password" value={password} placeholder="비밀번호" onChange={handlePassword}
          className="placeholder-text-lg h-[60px] w-full rounded border p-2.5"/>
          <PrimaryButton type="submit" >
              확인
          </PrimaryButton>
        </div>
      </form>
    </div>
  )
}
