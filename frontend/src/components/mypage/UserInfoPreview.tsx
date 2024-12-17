import { Link } from "react-router-dom";

interface UserInfoPreviewProps {
  name: string;
}

function UserInfoPreview({ name }: UserInfoPreviewProps) {
  return (
    <Link to="/mypage/auth_pw" role="link">
      <div className="flex h-[146px] items-center justify-between border border-black px-5">
        <div className="text-xl font-semibold tablet:text-xl">{name}</div>
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
