// const footerImg =  "./public/images/common/footer.png";
const footerClass =
  "w-screen h-[510px]  bg-[url('/images/common/footer.png')] bg-cover flex flex-col justify-end items-center gap-[100px]";

export default function Footer(){
  return (
    <footer>
      <div className="pt-[268px] h-96 w-full bg-white">
        <div className={footerClass}>
          <ul className="flex gap-14">
            <li className="font-semibold">회사소개</li>
            <li className="font-semibold">이용약관</li>
            <li className="font-semibold">개인정보처리방침</li>
          </ul>
          <div className="mb-10 flex w-[565px] justify-between">
            <div>
              <p className="font-semibold">CALL CENTER</p>
              <p>
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
              <p>
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