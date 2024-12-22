import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUser } from "@/services/user";

import PrimaryButton from "../common/PrimaryButton";

export default function UserVerification() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //TODO: useUserId로 변경
  const userId = sessionStorage.getItem('id')

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  async function handleVerification(event){
    event.preventDefault();

    if(!password){
      alert("비밀번호를 입력해주세요.")
    }

    try{
      if(!userId) return
      const user = await getUser(userId)
      
      if(!user) return
      if(user.password === password){
        navigate("/mypage/edit")
      }else{
        alert('비밀번호가 동일하지 않습니다.')
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="mx-auto flex w-[600px] flex-col gap-[42px]">
      <p className="border-b border-black p-2.5 text-center text-xl font-semibold">
        본인확인
      </p>
      <div className="p-2.5">
        <form >
          <input type="password" name="password" value={password} placeholder="비밀번호" onChange={handlePassword}
          className="placeholder-text-lg h-[60px] w-full rounded border p-2.5"/>
        </form>
      </div>
      <PrimaryButton onClick={handleVerification} className="h-[70px] w-full rounded-xl text-base font-semibold">
          확인
      </PrimaryButton>
    </div>
  );
}
