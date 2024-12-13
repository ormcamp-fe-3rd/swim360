import { Link } from "react-router-dom";

const imgUrl: string = "/images/common/logo.png";

export default function MainLogo(){
  return (
    <Link to="/">
      <img
        className="w-[106px] h-full tablet:w-[190px]"
        src={imgUrl}
        alt="로고 이미지"
      />
    </Link>
  );
}
