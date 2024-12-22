import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { UserIdContext } from "@/contexts/UserContext";
import { getUser } from "@/services/user";
import { User } from "@/types/users";

function UserInfoPreview() {
  const userId = useContext(UserIdContext);
  const [user, setUser] = useState<User|null>(null)
  
  const fetchUserData = async() => {
    if (!userId) return "";
    try{
      const userData = await getUser(userId);
      if(userData){
        setUser(userData);
      }
    } catch (error){
      console.log("fetch userData error", error)
    }
  }
  
  useEffect(()=>{
    fetchUserData();
  },[])

  
  return (
    <Link
      to={"/mypage/verification"}
      role="link"
    >
      <div className="flex h-[146px] items-center justify-between border border-black px-5">
        <div className="text-xl font-semibold tablet:text-xl">{user? user.name: ""}</div>
        <img
          className="h-6 tablet:w-6"
          src="/public/images/mypage/icon-mypage-user.png"
          alt="내 정보 수정 페이지로 이동"
        />
      </div>
    </Link>
  );
}

export default UserInfoPreview;
