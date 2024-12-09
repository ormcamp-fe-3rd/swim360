// const footerImg =  "./public/images/common/footer.png";
const footerClass =
  "w-screen h-[510px] mt-[268px] bg-[url('./public/images/common/footer.png')] bg-cover flex flex-col justify-center items-center";

export default function Footer(){
  return (
    <footer>
      <div className={footerClass}>
        <ul className="flex gap-14 ">
          <li className="font-semibold">회사소개</li>
          <li className="font-semibold">이용약관</li>
          <li className="font-semibold">개인정보처리방침</li>
        </ul>
        <div className="flex w-[565px] justify-between mt-[112px]">
          <div className="font-semibold">CALL CENTER</div>
          <div className="font-semibold">BANK INFO</div>
        </div>
      </div>
    </footer>
  );
}