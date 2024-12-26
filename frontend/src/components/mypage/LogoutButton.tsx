import { useNavigate } from "react-router-dom";

import { useUserId } from "@/hooks/useUserId";

import PrimaryButton from "../common/PrimaryButton";

export default function LogoutButton(){
  const navigate = useNavigate();
  const { setUserId } = useUserId();

  function handleLogout(){
    sessionStorage.removeItem('id');
    alert("👋안녕히가세요👋");
    setUserId("")
    navigate("/")
  }

  return(
    <div onClick={handleLogout} className="w-full flex justify-end py-10">
      <PrimaryButton className="w-20">Logout</PrimaryButton>
    </div>
  )
}