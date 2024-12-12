import PrimaryButton from "@/components/common/PrimaryButton";

function ShippingInformation() {
  return (
    <div>
      <p className="w-full border-b border-black p-2.5 font-bold">배송정보</p>
      <div className="h-22 mb-1 flex w-full border-b border-black p-2.5">
        <span className="inline-block w-1/4">주문인</span>
        <input
          type="text"
          name="orderername"
          id="orderername"
          className="w-full rounded-sm border-none bg-slate-100 p-2.5"
        />
      </div>
      <div className="h-22 mb-1 flex w-full border-b border-black p-2.5">
        <span className="inline-block w-1/4">받으시는분</span>
        <input
          type="text"
          name="recipientname"
          id="recipientname"
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
              className="mr-1 flex-grow rounded-sm border-none bg-slate-100 p-2.5"
            />
            <div className="w-1/5">
              <PrimaryButton>주소검색</PrimaryButton>
            </div>
          </div>
          <input
            type="text"
            name="detailaddress"
            id="detailaddress"
            className="w-full rounded-sm border-none bg-slate-100 p-2.5"
            placeholder="상세 주소를 입력해주세요."
          />
        </div>
      </div>
      <div className="h-22 flex w-full border-b border-black p-2.5">
        <span className="inline-block w-1/4">휴대전화번호</span>
        <input
          type="text"
          name="phonenumber"
          id="phonenumber"
          className="w-full rounded-sm border-none bg-slate-100 py-2.5"
        />
      </div>
    </div>
  );
}

export default ShippingInformation;
