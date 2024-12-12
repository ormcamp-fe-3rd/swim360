import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function FindIdPwdTab() {
  return (
    <Tabs defaultValue="find-id" className="mx-auto w-full">
      <TabsList className="w-full gap-2.5 px-4 pb-2.5">
        <TabsTrigger value="find-id" className="w-full">
          아이디 찾기
        </TabsTrigger>
        <TabsTrigger value="find-password" className="w-full">
          비밀번호 찾기
        </TabsTrigger>
      </TabsList>
      <TabsContent
        className="mx-auto py-20 text-center"
        value={"find-password"}
      >
        비밀번호 변경이 완료 되었습니다.
      </TabsContent>
    </Tabs>
  );
}

export default FindIdPwdTab;
