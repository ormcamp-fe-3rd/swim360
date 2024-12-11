function Photos() {
  return (
    <div className="w-[522px]">
      <img
        className="mb-4 h-[600px] w-[522px] overflow-hidden object-cover"
        src="/public/images/product/swimsuit-front.jpg"
      ></img>

      <div className="flex w-[520px] gap-5">
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
