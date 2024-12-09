const imgUrl = "/images/home/main-background.png";

export default function BackgroundImg() {
  return (
    <>
      <div className="fixed top-0 -z-10 h-96 w-full bg-gradient-to-b from-white"></div>
      <img
        className="fixed top-0 -z-20 mx-auto w-full"
        src={imgUrl}
        alt="메인 이미지"
      />
    </>
  );
}
