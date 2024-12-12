import PrimaryButton from "@/components/common/PrimaryButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function FindPwdPage() {
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
        <TabsContent value="find-password">
          <div className="relative h-[60px] w-[600px] gap-2.5">
            <span>새 비밀번호</span>
            <input
              type="text"
              className="mb-4 h-[60px] w-full rounded-[5px] border p-2.5"
              placeholder="영문,숫자,특수문자 포함 8자~16자 사이로 입력 가능합니다."
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => alert("아이콘 버튼 클릭")}
            >
              <img src="/images/image 42.png" className="h-5 w-5" />
            </button>
          </div>
          <div className="relative mt-10 h-[60px] w-[600px] gap-2.5">
            <span>새 비밀번호 확인</span>
            <input
              type="text"
              className="mb-4 h-[60px] w-full rounded-[5px] border p-2.5"
              placeholder="비밀번호가 동일하지 않습니다."
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2"
              onClick={() => alert("아이콘 버튼 클릭")}
            >
              <img src="/images/image 42.png" className="h-5 w-5" />
            </button>
          </div>
        </TabsContent>
      </Tabs>

      <PrimaryButton className="mt-4 w-full">확인</PrimaryButton>
    </div>
  );
}

export default FindPwdPage;
