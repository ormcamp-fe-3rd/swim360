import PrimaryButton from "@/components/common/PrimaryButton";

function PossessionPoint() {
  return (
    <div>
      <p className="w-full border-b border-black p-2.5 font-bold">포인트</p>
      <div className="p-2.5">
        <div className="flex">
          <span className="w-15 inline-block">보유 :</span>

          <span className="inline-block pl-1 text-right">{0}</span>
          <span className="inline-block pl-1">포인트</span>
        </div>
        <div className="flex w-full">
          <input
            type="number"
            className="mr-5 w-3/4 rounded-sm bg-slate-100 p-2.5"
          />
          <div className="w-1/4">
            <PrimaryButton>전액사용</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PossessionPoint;
