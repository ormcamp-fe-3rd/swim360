import PrimaryButton from "@/components/common/PrimaryButton";

function AgreesPage() {
  return (
    <div className="mx-auto w-[836px]">
      <p className="border-b p-2.5 text-center font-bold">회원가입</p>
      <label htmlFor="" className="w-full border p-2.5">
        <input type="checkbox" name="" id="" />
        <span className="ml-2">전체 동의</span>
      </label>
      <div>
        <label htmlFor="" className="w-full border p-2.5">
          <input type="checkbox" name="" id="" />
          <span className="ml-2">이용약관 동의 (필수)</span>
        </label>
        <iframe src="#" className="h-[112px] w-full border"></iframe>
        <label htmlFor="" className="w-full border p-2.5">
          <input type="checkbox" name="" id="" />
          <span className="ml-2">개인정보처리방침 동의 (필수)</span>
        </label>
        <iframe src="#" className="h-[112px] w-full border"></iframe>
        <label htmlFor="" className="w-full border p-2.5">
          <input type="checkbox" name="" id="" />
          <span className="ml-2">마케팅 정보 수신 동의 (선택)</span>
        </label>
        <iframe src="#" className="h-[112px] w-full border"></iframe>
      </div>
      <div className="gap-2.5">
        <button className="w-[418px] border bg-white text-black">취소</button>
        <div className="w-[418px]">
          <PrimaryButton>다음</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default AgreesPage;
