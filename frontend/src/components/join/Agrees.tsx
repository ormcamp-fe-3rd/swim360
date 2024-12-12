import PrimaryButton from "@/components/common/PrimaryButton";

export default function Agrees() {
  return (
    <div className="mx-auto w-full max-w-[836px] px-4">
      <p className="border-b border-black p-2.5 text-center font-bold">
        회원가입
      </p>
      <label className="mt-4 flex w-full justify-center border border-black p-2.5">
        <input type="checkbox" name="" id="" />
        <span className="my-4 ml-2 inline-block font-bold">전체 동의</span>
      </label>
      <div className="mt-4">
        <label className="mb-4 w-full p-2.5">
          <input type="checkbox" name="" id="" />
          <span className="my-4 ml-2 inline-block">이용약관 동의 (필수)</span>
        </label>
        <iframe className="h-28 w-full border"></iframe>
        <label className="mb-4 w-full p-2.5">
          <input type="checkbox" name="" id="" />
          <span className="my-4 ml-2 inline-block">
            개인정보처리방침 동의 (필수)
          </span>
        </label>
        <iframe className="h-28 w-full border"></iframe>
        <label className="mb-4 w-full p-2.5">
          <input type="checkbox" name="" id="" />
          <span className="my-4 ml-2 inline-block">
            마케팅 정보 수신 동의 (선택)
          </span>
        </label>
        <iframe className="h-28 w-full border"></iframe>
      </div>
      <div className="mt-4 flex gap-2.5">
        <button className="w-1/2 rounded-sm border bg-white text-black">
          취소
        </button>
        <div className="w-1/2">
          <PrimaryButton>다음</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
