import { useState } from "react";

import PrimaryButton from "@/components/common/PrimaryButton";

interface ShippingInformationProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ShippingInformation({ handleInputChange }: ShippingInformationProps) {
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: (data: { address: string }) => {
        console.log("주소 데이터:", data.address); // 디버깅용 로그
        if (data.address) {
          setAddress(data.address);
          handleInputChange({
            target: { name: "address", value: data.address },
          } as React.ChangeEvent<HTMLInputElement>); // 상위로 상태 전달
        } else {
          console.error("주소 데이터가 비어 있습니다.");
        }
      },
    }).open();
  };

  return (
    <div>
      <p className="w-full border-b border-black p-2.5 font-bold">배송정보</p>
      <div className="h-22 mb-1 flex w-full border-b border-black p-2.5">
        <span className="inline-block w-1/4">주문인</span>
        <input
          type="text"
          name="ordererName"
          id="ordererName"
          className="w-full rounded-sm border-none bg-slate-100 p-2.5"
        />
      </div>
      <div className="h-22 mb-1 flex w-full border-b border-black p-2.5">
        <span className="inline-block w-1/4">받으시는분</span>
        <input
          type="text"
          name="receiver"
          id="receiver"
          onChange={handleInputChange}
          className="w-full rounded-sm border-none bg-slate-100 p-2.5"
        />
      </div>
      <div className="h-22 mb-1 flex w-full border-b border-black p-2.5">
        <span className="inline-block w-1/5">배송지</span>
        <div className="flex-grow">
          <div className="mb-1 flex">
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              readOnly
              className="mr-1 flex-grow rounded-sm border-none bg-slate-100 p-2.5"
            />
            <div className="w-1/5">
              <PrimaryButton onClick={handleAddressSearch}>
                주소검색
              </PrimaryButton>
            </div>
          </div>
          <input
            type="text"
            name="detailAddress"
            id="detailAddress"
            value={detailAddress}
            onChange={(e) => {
              setDetailAddress(e.target.value);
              handleInputChange(e);
            }}
            className="w-full rounded-sm border-none bg-slate-100 p-2.5"
            placeholder="상세 주소를 입력해주세요."
          />
        </div>
      </div>
      <div className="h-22 flex w-full border-b border-black p-2.5">
        <span className="inline-block w-1/4">휴대전화번호</span>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          onChange={handleInputChange}
          className="w-full rounded-sm border-none bg-slate-100 p-2.5"
        />
      </div>
    </div>
  );
}

export default ShippingInformation;
