import PrimaryButton from "@/components/common/PrimaryButton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function JoinCompletionPage() {
  return (
    <div className="mx-auto w-[836px]">
<<<<<<< HEAD
      <Tabs defaultValue="find-id" className="w-[603px]">
=======
      <Tabs defaultValue="find-id" className="mx-auto w-[603px]">
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d
        <TabsList className="gap-2.5 pb-2.5">
          <TabsTrigger value="find-id" className="w-[300px]">
            아이디 찾기
          </TabsTrigger>
          <TabsTrigger value="find-password" className="w-[300px]">
            비밀번호 찾기
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <p className="mx-auto py-20 text-center">
        비밀번호 변경이 완료 되었습니다.
      </p>
      <div className="mx-auto w-[600px]">
        <PrimaryButton>로그인 화면으로 이동</PrimaryButton>
      </div>
    </div>
  );
}

export default JoinCompletionPage;
