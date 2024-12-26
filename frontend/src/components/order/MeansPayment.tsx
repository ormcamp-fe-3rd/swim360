import { useState } from "react";
import { z } from "zod";

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

// 유효성 검증 스키마
const formSchema = z.object({
  depositorName: z
    .string()
    .nonempty("입금자 이름은 필수 입력 항목입니다.")
    .regex(/^[^0-9]*$/, "숫자를 입력할 수 없습니다."),
  phoneNumber: z
    .string()
    .nonempty("전화번호는 필수 입력 항목입니다.")
    .regex(/^[0-9-]+$/, "숫자와 하이픈(-)만 입력 가능합니다."),
  businessNumber: z
    .string()
    .nonempty("사업자번호는 필수 입력 항목입니다.")
    .regex(/^[0-9-]+$/, "숫자와 하이픈(-)만 입력 가능합니다."),
});

function MeansPayment({
  handleInputChange,
}: {
  handleInputChange: (name: string, value: string) => void;
}) {
  type ReceiptType = "personal" | "business" | "none";
  const [selectedOption, setSelectedOption] = useState<ReceiptType>("none");
  const [errors, setErrors] = useState({
    depositorName: "",
    phoneNumber: "",
    businessNumber: "",
  });

  const handleInputValidation = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = e.target;

    // 유효성 검증 수행
    const validationSchema = z.object({
      depositorName: formSchema.shape.depositorName,
      ...(selectedOption === "personal" && {
        phoneNumber: formSchema.shape.phoneNumber,
      }),
      ...(selectedOption === "business" && {
        businessNumber: formSchema.shape.businessNumber,
      }),
    });

    const validationResult = validationSchema.safeParse({ [name]: value });

    if (validationResult.success) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } else {
      const fieldError = validationResult.error.issues.find(
        (issue) => issue.path[0] === name,
      );
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: fieldError?.message || "",
      }));
    }
    handleInputChange(name, value);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ReceiptType;
    setSelectedOption(value);

    if (value === "none") {
      setErrors({ depositorName: "", phoneNumber: "", businessNumber: "" });
    } else if (value === "personal") {
      setErrors((prev) => ({ ...prev, businessNumber: "" }));
    } else if (value === "business") {
      setErrors((prev) => ({ ...prev, phoneNumber: "" }));
    }

    handleInputChange("selectedOption", value);
  };

  return (
    <div>
      <p className="w-full border-b border-black p-2.5 font-bold">결제 수단</p>
      <input type="radio" name="deposit" defaultChecked />
      <span className="inline-block p-2.5"> 무통장 입금</span>
      <div className="flex gap-4">
        <select name="bank" id="bank" className="w-40 p-2.5">
          {BANK_OPTIONS.map((bank) => (
            <option key={bank.value} value={bank.value}>
              {bank.label}
            </option>
          ))}
        </select>
        <div className="relative w-1/2">
          <input
            type="text"
            name="depositorName"
            className={`w-full rounded-sm bg-slate-100 p-2 pl-4 ${
              errors.depositorName ? "border border-red-500" : ""
            }`}
            placeholder="입금자 이름 *"
            onChange={handleInputValidation}
          />
          {errors.depositorName && (
            <span className="absolute right-[-210px] top-1/2 -translate-y-1/2 text-xs text-red-500">
              {errors.depositorName}
            </span>
          )}
        </div>
      </div>
      <p className="mt-5 w-full border-b border-black p-2.5 font-bold">
        현금 영수증 발행
      </p>
      {CASH_RECEIPT_OPTIONS.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name="cashReceipt"
            value={option.value}
            onChange={handleOptionChange}
            checked={selectedOption === option.value}
          />
          <span className="mx-2">{option.label}</span>
        </label>
      ))}
      {selectedOption === "personal" && (
        <div id="cashReceiptInput" className="relative mt-2">
          <input
            type="tel"
            name="phoneNumber"
            className={`w-full rounded-sm bg-slate-100 p-2.5 ${
              errors.phoneNumber ? "border border-red-500" : ""
            }`}
            placeholder="전화번호를 입력해주세요."
            onChange={handleInputValidation}
          />
          {errors.phoneNumber && (
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-red-500">
              {errors.phoneNumber}
            </span>
          )}
        </div>
      )}
      {selectedOption === "business" && (
        <div id="cashReceiptInput" className="relative mt-2">
          <input
            type="text"
            name="businessNumber"
            className={`w-full rounded-sm bg-slate-100 p-2.5 ${
              errors.businessNumber ? "border border-red-500" : ""
            }`}
            placeholder="사업자번호를 입력해주세요."
            onChange={handleInputValidation}
          />
          {errors.businessNumber && (
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-red-500">
              {errors.businessNumber}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default MeansPayment;
