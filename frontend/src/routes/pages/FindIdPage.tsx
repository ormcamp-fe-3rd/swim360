import PrimaryButton from "@/components/common/PrimaryButton";
import FindIdPwdTab from "@/components/login/FindIdPwdTab";

function FindIdPage() {
  return (
    <div className="mx-auto w-[620px]">
      <FindIdPwdTab
        defaultValue={"find-pw"}
        idContent={
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
        }
        pwContent={<></>}
      />
      <div className="mx-auto w-[98%]">
        <PrimaryButton>확인</PrimaryButton>
      </div>
    </div>
  );
}

export default FindIdPage;
