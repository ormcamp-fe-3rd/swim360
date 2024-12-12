import PrimaryButton from "../common/PrimaryButton";

export default function UserEditVeri() {
  return (
    <div className="mx-auto flex w-[600px] flex-col gap-[42px]">
      <p className="border-b border-black p-2.5 text-center text-xl font-semibold">
        본인확인
      </p>
      <div className="p-2.5">
        <input
          type="text"
          className="placeholder-text-lg h-[60px] w-full rounded border p-2.5"
          name="password"
          id="password"
          placeholder="비밀번호"
        />
      </div>
      <a href="/user/edit">
      <PrimaryButton className="h-[70px] w-full rounded-xl text-base font-semibold">
        확인
      </PrimaryButton>
      </a>
    </div>
  );
}
