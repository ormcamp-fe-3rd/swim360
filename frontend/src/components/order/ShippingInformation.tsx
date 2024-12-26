import { useEffect, useState } from "react";
import { z } from "zod";

import PrimaryButton from "@/components/common/PrimaryButton";
import { useUserId } from "@/hooks/useUserId";
import { getUser } from "@/services/user";

interface ShippingInformationProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const formSchema = z.object({
  ordererName: z.string(),
  receiver: z
    .string()
    .nonempty("필수 입력 항목입니다.")
    .regex(/^[^0-9]*$/, "숫자를 입력할 수 없습니다."),
  address: z.string().nonempty("필수 입력 항목입니다."),
  detailAddress: z.string().nonempty("필수 입력 항목입니다."),
  phoneNumber: z
    .string()
    .nonempty("필수 입력 항목입니다.")
    .regex(/^[0-9-]+$/, "숫자와 하이픈(-)만 입력 가능합니다."),
});

function ShippingInformation({ handleInputChange }: ShippingInformationProps) {
  const [formData, setFormData] = useState({
    ordererName: "",
    receiver: "",
    address: "",
    detailAddress: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({
    ordererName: false,
    receiver: false,
    address: false,
    detailAddress: false,
    phoneNumber: false,
  });

  const handleInputValidation = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = e.target;

    // 실시간 유효성 검사
    const validationResult = formSchema.safeParse({
      ...formData,
      [name]: value,
    });

    if (validationResult.success) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } else {
      // 해당 필드의 에러 메시지 추출
      const fieldError = validationResult.error.issues.find(
        (issue) => issue.path[0] === name,
      );
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: fieldError?.message || "",
      }));
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
    handleInputChange(e); // 부모 컴포넌트로 데이터 전달
  };

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: (data: { address: string }) => {
        setFormData((prev) => ({ ...prev, address: data.address }));
        handleInputChange({
          target: { name: "address", value: data.address },
        } as React.ChangeEvent<HTMLInputElement>);
      },
    }).open();
  };

  const { userId } = useUserId();

  useEffect(() => {
    const loadOrdererName = async () => {
      try {
        if (!userId) {
          throw new Error("로그인이 필요합니다.");
        }
        const user = await getUser(userId);
        console.log("가져온 이름:", user.name); // 반환된 데이터 확인
        setFormData((prev) => ({ ...prev, ordererName: user.name })); // 주문인 이름 설정
      } catch (error) {
        console.error("주문인 이름을 가져오는 중 오류 발생:", error);
      }
    };

    loadOrdererName();
  }, [userId]);

  return (
    <div>
      <p className="w-full border-b border-black p-2.5 font-bold">배송정보</p>
      <div className="h-22 mb-1 flex w-full border-b border-black p-2.5">
        <span className="inline-block w-1/4">주문인</span>
        <input
          type="text"
          name="ordererName"
          id="ordererName"
          readOnly
          value={formData.ordererName}
          onChange={handleInputValidation}
          className="w-full rounded-sm border-none bg-slate-100 p-2.5"
        />
      </div>
      <div className="h-22 mb-1 flex w-full border-b border-black p-2.5">
        <span className="inline-block w-1/4">받으시는분 *</span>
        <div className="relative flex w-full items-center">
          <input
            type="text"
            name="receiver"
            id="receiver"
            onChange={handleInputValidation}
            className={`w-full rounded-sm bg-slate-100 p-2.5 ${
              errors.receiver ? "border border-red-500" : "border-none"
            }`}
          />
          {errors.receiver && (
            <span className="absolute right-1 top-1/2 -translate-y-1/2 transform rounded text-[10px] text-red-500">
              {errors.receiver}
            </span>
          )}
        </div>
      </div>
      <div className="h-22 mb-1 flex w-full border-b border-black p-2.5">
        <span className="inline-block w-1/5">배송지 *</span>
        <div className="flex-grow">
          <div className="mb-1 flex">
            <div className="relative flex w-full items-center">
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                readOnly
                onChange={handleInputValidation}
                className={`w-full rounded-sm bg-slate-100 p-2.5 ${
                  errors.address ? "border border-red-500" : "border-none"
                }`}
              />
              {errors.address && (
                <span className="absolute right-1 top-1/2 -translate-y-1/2 transform rounded text-[10px] text-red-500">
                  {errors.address}
                </span>
              )}
            </div>
            <div className="w-1/5">
              <PrimaryButton onClick={handleAddressSearch}>
                주소검색
              </PrimaryButton>
            </div>
          </div>
          <div className="relative flex w-full items-center">
            <input
              type="text"
              name="detailAddress"
              id="detailAddress"
              value={formData.detailAddress}
              onChange={handleInputValidation}
              className={`w-full rounded-sm bg-slate-100 p-2.5 ${
                errors.detailAddress ? "border border-red-500" : "border-none"
              }`}
            />
            {errors.detailAddress && (
              <span className="absolute right-1 top-1/2 -translate-y-1/2 transform rounded text-[10px] text-red-500">
                {errors.detailAddress}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="h-22 flex w-full border-b border-black p-2.5">
        <span className="inline-block w-1/4">휴대전화번호 *</span>

        <div className="relative flex w-full items-center">
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputValidation}
            className={`w-full rounded-sm bg-slate-100 p-2.5 ${
              errors.phoneNumber ? "border border-red-500" : "border-none"
            }`}
          />
          {errors.phoneNumber && (
            <span className="absolute right-1 top-1/2 -translate-y-1/2 transform rounded text-[10px] text-red-500">
              {errors.phoneNumber}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShippingInformation;
