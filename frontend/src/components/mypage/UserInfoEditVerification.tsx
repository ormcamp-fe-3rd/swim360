import PrimaryButton from "../common/PrimaryButton";

export default function UserInfoEditVeri() {
  return (
    <div className="mx-auto w-[600px] gap-[42px] flex flex-col">
      <p className="border-b border-black p-2.5 text-center font-semibold text-xl">본인확인</p>
      <div className="p-2.5">
        <input
          type="text"
          className="w-full rounded border p-2.5 h-[60px] placeholder-text-lg"
          name="password"
          id="password"
          placeholder="비밀번호"
        />
      </div>
      <PrimaryButton className="w-full h-[70px] rounded-xl font-semibold text-base">확인</PrimaryButton>
    </div>
  );
}
