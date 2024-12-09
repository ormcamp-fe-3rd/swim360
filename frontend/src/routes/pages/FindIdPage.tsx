import ConfirmButton from "@/components/common/ConfirmButton.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function FindIdPage() {
    return <div className="w-[620px] mx-auto">
        <Tabs defaultValue="find-id" className="w-[603px]">
            <TabsList className="gap-2.5 pb-2.5">
                <TabsTrigger value="find-id" className="w-[300px]">아이디 찾기</TabsTrigger>
                <TabsTrigger value="find-password" className="w-[300px]">비밀번호 찾기</TabsTrigger>
            </TabsList>
            <TabsContent value="find-id">
                <div className="text-center gap-2.5">
                <b className="m-2.5 block mt-10">찾으시는 아이디는 아래와 같습니다.</b>
                <input
                type="text"
                className="w-[600px] h-[60px] border mb-4 rounded-[5px] p-2.5"
                readOnly disabled placeholder="kim123"/>
                </div>
            </TabsContent>
        </Tabs>
        
            <ConfirmButton text="확인" width="full" font="my-10"/>
    </div>
}

export default FindIdPage;