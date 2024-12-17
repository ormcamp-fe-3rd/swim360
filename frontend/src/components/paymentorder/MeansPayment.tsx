import { useState } from "react";

const BANK_OPTIONS = [
  { value: "hana", label: "하나은행" },
  { value: "sinhan", label: "신한은행" },
  { value: "woory", label: "우리은행" },
  { value: "kb", label: "국민은행" },
];

const CASH_RECEIPT_OPTIONS = [
  { value: "personal", label: "신청(개인)" },
  { value: "business", label: "신청(사업자)" },
  { value: "none", label: "신청안함" },
];

function MeansPayment() {
  type ReceiptType = "personal" | "business" | "none";
  const [selectedOption, setSelectedOption] = useState<ReceiptType | null>(
    null,
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as ReceiptType);
  };

  return (
    <div>
      <p className="w-full border-b border-black p-2.5 font-bold">결제 수단</p>
      <input type="radio" name="deposit" />
      <span className="inline-block p-2.5"> 무통장 입금</span>
      <div className="flex gap-4">
        <select name="bank" id="bank" className="w-40 p-2.5">
          {BANK_OPTIONS.map((bank) => (
            <option key={bank.value} value={bank.value}>
              {bank.label}
            </option>
          ))}
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
      {CASH_RECEIPT_OPTIONS.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name="cashReceipt"
            value={option.value}
            onChange={handleOptionChange}
          />
          <span className="mx-2">{option.label}</span>
        </label>
      ))}
      {selectedOption === "personal" && (
        <div id="cashReceiptInput">
          <input
            type="tel"
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
  );
}

export default MeansPayment;
