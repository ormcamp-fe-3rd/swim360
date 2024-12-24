import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useUserId } from "@/hooks/useUserId";
import { getUser } from "@/services/user";
import { User } from "@/types/users";

function UserInfoPreview() {
  const { userId } = useUserId();
  const [user, setUser] = useState<User|null>(null);

  
  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return
      try {
        const userData = await getUser(userId);
        setUser(userData);
      } catch (error) {
        console.log("fetch userData error", error);
      }
    };
    
    fetchUserData();
  }, [userId]);

  return (
    <Link
      to="/mypage/verification"
      role="link"
    >
      <div className="flex h-[146px] items-center justify-around rounded-lg shadow-md hover:bg-gray-50">
        <div className="text-xl font-semibold tablet:text-xl">
          {user? user.name: ""}
        </div>
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
