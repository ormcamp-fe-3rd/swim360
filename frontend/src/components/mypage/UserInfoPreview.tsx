import { Link } from "react-router-dom";

interface UserInfoPreviewProps {
  name: string;
}

function UserInfoPreview({ name }: UserInfoPreviewProps) {
  return (
    <div className="flex h-[146px] items-center justify-between border-[1px] border-[#000000] px-5">
      <div className="text-xl font-semibold">{name}이름</div>
      <Link to="/user" role="link">
        <img
          className="h-5 w-5"
          src="/public/images/mypage/icon-mypage-user.png"
          alt="내 정보 수정 페이지로 이동"
        />
      </Link>
    </div>
  );
}

export default UserInfoPreview;
