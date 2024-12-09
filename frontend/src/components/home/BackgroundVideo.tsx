export default function BackgroundVideo() {
  return (
    <>
      <div className="fixed top-0 -z-10 h-96 w-full bg-gradient-to-b from-white"></div>
      <video
        className="fixed top-0 -z-20 h-1/2 object-cover tablet:h-full tablet:w-auto"
        autoPlay
        muted
        loop
      >
        <source src="/images/home/main-video.mp4" type="video/mp4" />
      </video>
    </>
  );
}
