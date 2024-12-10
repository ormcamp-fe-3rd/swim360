import  ProfileForm  from "./UserInfoEditForm";

export default function UserInfoEdit(){
  return (
    <>
    <div className="mx-auto w-[930px]">
      <p className="border-b border-black p-2.5 text-center font-semibold text-xl">회원정보 수정</p>
      <ProfileForm />
    </div>
    </>
  );
}