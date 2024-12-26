import UserInfoEditForm from "./UserInfoEditForm";

export default function UserEdit() {
  return (
    <>
      <div className="mx-auto w-full tablet:w-[930px]">
        <p className="border-b border-black p-2.5 text-center text-xl font-semibold">
          회원정보 수정
        </p>
        <UserInfoEditForm />
      </div>
    </>
  );
}
