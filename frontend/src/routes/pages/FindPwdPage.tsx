import ConfirmButton from "@/components/common/ConfirmButton.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function FindPwdPage() {
    return <div className=" w-[620px] mx-auto">
        <Tabs defaultValue="find-id" className="w-[603px] ">
            <TabsList className="gap-2.5 pb-2.5">
                <TabsTrigger value="find-id" className="w-[300px]">아이디 찾기</TabsTrigger>
                <TabsTrigger value="find-password" className="w-[300px]">비밀번호 찾기</TabsTrigger>
            </TabsList>
            <TabsContent value="find-password">
                <div className="relative w-[600px] h-[60px] gap-2.5">
                <span>새 비밀번호</span>
                <input
                type="text"
                className="w-full h-[60px] border mb-4 rounded-[5px] p-2.5"
                placeholder="영문,숫자,특수문자 포함 8자~16자 사이로 입력 가능합니다." />
                <button
                type="button"
                className="absolute top-1/2 right-3 -translate-y-1/2"
                onClick={() => alert("아이콘 버튼 클릭")}>
                <img
                src="/images/image 42.png"
                className="w-5 h-5"/>
                </button>
                </div>
                <div className="w-[600px] h-[60px] relative gap-2.5 mt-10">
                <span>새 비밀번호 확인</span>
                <input
                type="text"
                className="w-full h-[60px] border mb-4 rounded-[5px] p-2.5"
                placeholder="비밀번호가 동일하지 않습니다." />
                <button
                type="button"
                className="absolute top-1/2 right-3 -translate-y-1/2 z-10"
                onClick={() => alert("아이콘 버튼 클릭")}>
                <img
                src="/images/image 42.png"
                className="w-5 h-5" />
                </button>
                </div>
            </TabsContent>
        </Tabs>
        
            <ConfirmButton text="확인" width="full" font="mt-10"/>
    </div>
}

export default FindPwdPage;