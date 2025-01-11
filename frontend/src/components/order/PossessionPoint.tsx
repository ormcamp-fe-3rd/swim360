import { useState } from "react";

import PrimaryButton from "@/components/common/PrimaryButton";

function PossessionPoint() {
  const [inputValue, setInputValue] = useState(0); // 입력값 상태 관리
  const maxPoints = 0;
  const minPoints = 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    // min, max 범위 내로 값 제한
    if (value >= minPoints && value <= maxPoints) {
      setInputValue(value);
    } else if (value < minPoints) {
      setInputValue(minPoints);
    } else if (value > maxPoints) {
      setInputValue(maxPoints);
    }
  };

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
            value={inputValue}
            onChange={handleChange}
            max={maxPoints}
            min={minPoints}
            className="mr-5 w-3/4 rounded-sm bg-[#e8f0fe] p-2.5"
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
