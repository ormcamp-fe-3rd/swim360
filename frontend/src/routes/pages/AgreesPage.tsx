import ConfirmButton from "@/components/common/ConfirmButton.tsx";

function AgreesPage() {
    return <div className="w-[836px] mx-auto">
        <p className="text-center p-2.5 border-b font-bold">회원가입</p>
        <label htmlFor="" className="p-2.5 w-full border">
            <input type="checkbox" name="" id="" />
            <span className="ml-2">전체 동의</span>
        </label>
        <div>
            <label htmlFor="" className="p-2.5 w-full border">
                <input type="checkbox" name="" id="" />
                <span className="ml-2">이용약관 동의 (필수)</span>
            </label>
                <iframe src="#" className="w-full h-[112px] border"></iframe>
            <label htmlFor="" className="p-2.5 w-full border">
                <input type="checkbox" name="" id="" />
                <span className="ml-2">개인정보처리방침 동의 (필수)</span>
            </label>
                <iframe src="#" className="w-full h-[112px] border"></iframe>
            <label htmlFor="" className="p-2.5 w-full border">
                <input type="checkbox" name="" id="" />
                <span className="ml-2">마케팅 정보 수신 동의 (선택)</span>
            </label>
                <iframe src="#" className="w-full h-[112px] border"></iframe>
        </div>
        <div className="gap-2.5">
            <button className="w-[418px] border text-black bg-white">취소</button>
            <ConfirmButton text="다음" width="418" font="my-10"/>
        </div>
    </div>
}

export default AgreesPage;