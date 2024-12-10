import ConfirmButton from "@/components/common/ConfirmButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function PayMentOrderPage() {
  return (
    <div className="mx-auto w-[600px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-gray-500">
              장바구니
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="font-bold text-gray-950">
              주문/결제
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500">결제완료</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex">
        <form action="#">
          <p className="w-[600px] border-b border-black p-2.5 font-bold">
            배송정보
          </p>
          <div className="h-22 mb-1 w-[600px] justify-between border-b border-black p-2.5">
            <span className="inline-block w-[120px]">주문인</span>
            <input
              type="text"
              name="orderername"
              id="orderername"
              className="w-[350px] border-none bg-slate-100 p-2.5"
            />
          </div>
          <div className="h-22 mb-1 w-[600px] justify-between border-b border-black p-2.5">
            <span className="inline-block w-[120px]">받으시는분</span>
            <input
              type="text"
              name="recipientname"
              id="recipientname"
              className="w-[350px] border-none bg-slate-100 p-2.5"
            />
          </div>
          <div className="h-22 mb-1 flex w-[600px] border-b border-black p-2.5">
            <span className="inline-block w-[120px]">배송지</span>
            <div className="mb-1">
              <div className="mb-1">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="mr-1 w-[350px] border-none bg-slate-100 p-2.5"
                />
                <ConfirmButton text={"주소검색"} width={"100px"} />
              </div>
              <input
                type="text"
                name="detailaddress"
                id="detailaddress"
                className="w-[350px] border-none bg-slate-100 p-2.5"
                placeholder="상세 주소를 입력해주세요."
              />
            </div>
          </div>
          <div className="h-22 w-[600px] justify-between border-b border-black p-2.5">
            <span className="inline-block w-[120px]">휴대전화번호</span>
            <input
              type="text"
              name="phonenumber"
              id="phonenumber"
              className="w-[350px] border-none bg-slate-100 py-2.5"
            />
          </div>
          <div className="border-b border-black py-2.5">
            <p className="w-[600px] border-b border-black p-2.5 font-bold">
              총 상품(<span>4</span>)
            </p>
            <div className="w-[600px] border-b p-2.5">
              <span className="inline-block w-1/3 text-center">상품정보</span>
              <span className="inline-block w-1/3 text-right">수량</span>
              <span className="inline-block w-1/3 text-right">가격</span>
            </div>
            <div className="flex border-b p-2.5">
              <img src="#" alt="이미지" className="w-[80px]" />
              <div className="w-[200px]">
                <p>상품네임</p>
                <p>상품 간략 설명 문장</p>
                <p>
                  옵션 : <span>BLACK_S</span>
                </p>
              </div>
              <div className="w-[200px] text-center">
                <span>1</span>
              </div>
              <div className="w-[120px] flex-col">
                <span className="block text-right">000,000원</span>
                <span className="block text-right">000,000원</span>
              </div>
            </div>
          </div>
          <div>
            <p className="w-[620px] border-b border-black p-2.5 font-bold">
              포인트
            </p>
            <div className="p-2.5">
              <div className="flex">
                <span className="inline-block w-[400px]">보유</span>
                <div className="flex">
                  <span className="inline-block w-[120px] text-right">100</span>
                  <span className="inline-block w-[80px] pl-1">포인트</span>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className="mr-5 w-[450px] bg-slate-100 p-2.5"
                />
                <ConfirmButton text={"전액사용"} width={"129"} />
              </div>
            </div>
          </div>
          <div>
            <p className="w-[620px] border-b border-black p-2.5 font-bold">
              결제 수단
            </p>
            <input type="radio" name="deposit" />
            <span className="inline-block p-2.5"> 무통장 입금</span>
            <p className="w-[620px] border-y p-2.5 font-bold">
              은행 선택 / 입금자이름 입력
            </p>
            <p className="w-[620px] border-b border-black p-2.5 font-bold">
              현금 영수증 발행
            </p>
            <label>
              <input type="radio" name="cashReceipt" />
              <span className="mx-2">신청(개인)</span>
            </label>
            <label>
              <input type="radio" name="cashReceipt" />
              <span className="mx-2">신청(사업자)</span>
            </label>
            <label>
              <input type="radio" name="cashReceipt" id="notcashReceipt" />
              <span className="mx-2">신청안함</span>
            </label>
            <div id="cashReceiptInput">
              <input
                type="text"
                className="w-[600px] rounded-sm bg-slate-100 p-2.5"
                placeholder="전화번호/사업자번호(발행선택에 따른 폼)"
              />
            </div>
          </div>
        </form>
        <div className="w-[400px] p-1">
          <div className="flex p-1">
            <span className="inline-block w-[400px]">총 상품 금액</span>
            <div className="flex">
              <span className="inline-block w-[180px] text-right">0</span>
              <span className="inline-block w-[20px] pl-1">원</span>
            </div>
          </div>
          <div className="flex p-1">
            <span className="inline-block w-[400px]">포인트</span>
            <div className="flex">
              <span className="inline-block w-[180px] text-right">-0</span>
              <span className="inline-block w-[20px] pl-1">원</span>
            </div>
          </div>
          <div className="flex p-1">
            <span className="inline-block w-[400px]">배송비</span>
            <div className="flex">
              <span className="inline-block w-[180px] text-right">0</span>
              <span className="inline-block w-[20px] pl-1">원</span>
            </div>
          </div>
          <div className="flex border-t border-black p-1">
            <span className="inline-block w-[400px]">총 결제금액</span>
            <div className="flex">
              <span className="inline-block w-[180px] text-right">0</span>
              <span className="inline-block w-[20px] pl-1">원</span>
            </div>
          </div>
          <ConfirmButton text={"주소검색"} width={"full"} />
        </div>
      </div>
    </div>
  );
}

export default PayMentOrderPage;
