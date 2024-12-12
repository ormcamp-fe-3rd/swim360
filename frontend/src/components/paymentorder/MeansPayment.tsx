import { useState } from "react";

function MeansPayment() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const OptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div>
        <p className="w-full border-b border-black p-2.5 font-bold">
          결제 수단
        </p>
        <input type="radio" name="deposit" />
        <span className="inline-block p-2.5"> 무통장 입금</span>
        <div className="flex gap-4">
          <select name="bank" id="bank" className="w-40 p-2.5">
            <option value="hana">하나은행</option>
            <option value="sinhan">신한은행</option>
            <option value="woory">우리은행</option>
            <option value="kb">국민은행</option>
          </select>
          <input
            type="text"
            className="w-1/2 rounded-sm bg-slate-100 pl-4"
            placeholder="입금자 이름"
          />
        </div>
        <p className="w-full border-t"></p>
        <p className="w-full border-b border-black p-2.5 font-bold">
          현금 영수증 발행
        </p>
        <label>
          <input
            type="radio"
            name="cashReceipt"
            value="personal"
            onChange={OptionChange}
          />
          <span className="mx-2">신청(개인)</span>
        </label>
        <label>
          <input
            type="radio"
            name="cashReceipt"
            value="business"
            onChange={OptionChange}
          />
          <span className="mx-2">신청(사업자)</span>
        </label>
        <label>
          <input
            type="radio"
            name="cashReceipt"
            value="none"
            onChange={OptionChange}
          />
          <span className="mx-2">신청안함</span>
        </label>
        {selectedOption === "personal" && (
          <div id="cashReceiptInput">
            <input
              type="text"
              className="mt-2 w-full rounded-sm bg-slate-100 p-2.5"
              placeholder="전화번호를 입력해주세요."
            />
          </div>
        )}
        {selectedOption === "business" && (
          <div id="cashReceiptInput">
            <input
              type="text"
              className="mt-2 w-full rounded-sm bg-slate-100 p-2.5"
              placeholder="사업자번호를 입력해주세요."
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MeansPayment;
