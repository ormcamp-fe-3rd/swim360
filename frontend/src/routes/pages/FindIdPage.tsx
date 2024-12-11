import PrimaryButton from "@/components/common/PrimaryButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function FindIdPage() {
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
          <div className="gap-2.5 text-center">
            <b className="m-2.5 mt-10 block">
              찾으시는 아이디는 아래와 같습니다.
            </b>
            <input
              type="text"
              className="mb-4 h-[60px] w-[600px] rounded-[5px] border p-2.5"
              readOnly
              disabled
              placeholder="kim123"
            />
          </div>
        </TabsContent>
      </Tabs>

      <PrimaryButton>확인</PrimaryButton>
    </div>
  );
}

export default FindIdPage;
