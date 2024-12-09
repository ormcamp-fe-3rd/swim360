import ConfirmButton from "@/components/common/ConfirmButton.tsx";

function LoginPage() {
    return <div className="w-[600px] mx-auto">
        <p className="text-center p-2.5 border-b font-bold">로그인</p>
        <div className="p-2.5">
            <input type="text" className="w-full border rounded p-2.5 mb-2.5" name="id" id="id" placeholder="아이디" />
            <input type="text" className="w-full border rounded p-2.5" name="password" id="password" placeholder="비밀번호" />
        </div>
        <label htmlFor="" className="ml-4">
            <input type="checkbox" name="" id="" />
            <span className="ml-2">아이디 저장</span>
        </label>
        <ConfirmButton text="로그인" width="full" font="my-10"/>
        <ul className="text-center">
            <li className="inline-block">아이디 찾기</li>
            <li className="inline-block mx-7">비밀번호 찾기</li>
            <li className="inline-block">회원가입</li>
        </ul>
  </div>;
}

export default LoginPage;