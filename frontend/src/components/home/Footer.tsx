// const footerImg =  "./public/images/common/footer.png";
const footerClass =
  "w-full h-[510px] pt-10 bg-[url('/images/common/footer.png')] bg-cover flex flex-col justify-evenly items-center";

export default function Footer(){
  return (
    <footer>
      <div className="h-96 w-full bg-white pt-[268px]">
        <div className={footerClass}>
          <ul className="flex w-full max-w-[565px] justify-between px-10">
            <li className="font-semibold">회사소개</li>
            <li className="font-semibold">이용약관</li>
            <li className="font-semibold">개인정보처리방침</li>
          </ul>
          <div className="flex w-full justify-between px-10 tablet:w-[565px]">
            <div>
              <p className="font-semibold">CALL CENTER</p>
              <p className="text-xs tablet:text-base">
                <br />
                고객 센터: 000-000-0000 <br />
                문자/카톡: 000-000-0000 <br />
                <br />
                운영 시간: AM 10:00 ~ PM 17:00 <br />
                점심 시간: PM 12:30 ~ PM 13:30 <br />
                토/일요일 및 공휴일 휴무
              </p>
            </div>
            <div>
              <p className="font-semibold">BANK INFO</p>
              <p className="text-xs tablet:text-base">
                <br />
                신한:000-000-000000 <br />
                농협:000-00000-00000 <br />
                예금주: 주식회사 KBS-WIN
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}