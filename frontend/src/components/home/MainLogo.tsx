const imgUrl: string = "/images/common/logo.png";
const homeUrl: string = "/";

export default function MainLogo(){
  return (
    <a href={homeUrl}>
      <img
        className="h-[106px] w-[106px] tablet:h-[190px] tablet:w-[190px]"
        src={imgUrl}
        alt="로고 이미지"
      />
    </a>
  );
}
