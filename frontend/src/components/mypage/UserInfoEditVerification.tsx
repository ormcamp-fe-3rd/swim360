import PrimaryButton from "../common/PrimaryButton";

export default function UserInfoEditVeri() {
  return (
    <div className="mx-auto w-[600px]">
      <p className="border-b p-2.5 text-center font-bold">본인확인</p>
      <div className="p-2.5">
        <input
          type="text"
          className="w-full rounded border p-2.5"
          name="password"
          id="password"
          placeholder="비밀번호"
        />
      </div>
      <PrimaryButton className="w-full">확인</PrimaryButton>
    </div>
  );
}
