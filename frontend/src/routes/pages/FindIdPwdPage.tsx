import PrimaryButton from "@/components/common/PrimaryButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function FindIdPwdPage() {
  return (
    <div className="mx-auto w-[620px]">
      <Tabs defaultValue="find-id" className="w-[603px]">
        <TabsList className="gap-2.5 pb-2.5">
          <TabsTrigger value="find-id" className="w-[300px]">
            아이디 찾기
          </TabsTrigger>
          <TabsTrigger value="find-password" className="w-[300px]">
            비밀번호 찾기
          </TabsTrigger>
        </TabsList>
        <TabsContent value="find-id">
          <input
            type="text"
            className="mb-4 h-[60px] w-[600px] rounded-[5px] border p-2.5"
            placeholder="이름 / 홍길동"
          />
          <input
            type="text"
            className="h-[60px] w-[600px] rounded-[5px] border p-2.5"
            placeholder="전화번호 / 01011112222"
          />
        </TabsContent>

        <TabsContent value="find-password">
          <input
            type="text"
            className="mb-4 h-[60px] w-[600px] rounded-[5px] border p-2.5"
            placeholder="이메일 아이디 / kim123@naver.com"
          />
          <input
            type="text"
            className="mb-4 h-[60px] w-[600px] rounded-[5px] border p-2.5"
            placeholder="이름 / 홍길동"
          />
          <input
            type="text"
            className="h-[60px] w-[600px] rounded-[5px] border p-2.5"
            placeholder="전화번호 / 01011112222"
          />
        </TabsContent>
      </Tabs>

      <PrimaryButton className="my-4 w-full">확인</PrimaryButton>
    </div>
  );
}

export default FindIdPwdPage;
