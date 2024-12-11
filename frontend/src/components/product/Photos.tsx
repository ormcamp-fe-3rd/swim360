function Photos() {
  return (
    <div className="h=auto w-full max-w-[522px]">
      <img
        className="mb-4 h-[600px] w-full max-w-[522px] overflow-hidden object-cover"
        src="/public/images/product/swimsuit-front.jpg"
      ></img>

      <div className="tablet:none flex w-full max-w-[522px] gap-5">
        <img
          className="h-[120px] w-[88px] overflow-hidden rounded object-cover"
          src="/public/images/product/swimsuit-front.jpg"
        ></img>
        <img
          className="h-[120px] w-[88px] overflow-hidden rounded object-cover"
          src="/public/images/product/swimsuit-front2.jpg"
        ></img>
        <img
          className="h-[120px] w-[88px] overflow-hidden rounded object-cover"
          src="/public/images/product/swimsuit-side.jpg"
        ></img>
        <img
          className="h-[120px] w-[88px] overflow-hidden rounded object-cover"
          src="/public/images/product/swimsuit-back.jpg"
        ></img>
        <img
          className="h-[120px] w-[88px] overflow-hidden rounded object-cover"
          src="/public/images/product/swimsuit-back2.jpg"
        ></img>
      </div>
    </div>
  );
}
export default Photos;
