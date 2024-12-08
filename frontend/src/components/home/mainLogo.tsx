interface Props{
  imgUrl: string
  homeUrl: string
}

export default function MainLogo({imgUrl, homeUrl}: Props){
  return (
    <a href={homeUrl}>
      <img
        className="h-[190px] w-[190px]"
        src={imgUrl}
        alt="로고 이미지"
      />
    </a>
  );
}