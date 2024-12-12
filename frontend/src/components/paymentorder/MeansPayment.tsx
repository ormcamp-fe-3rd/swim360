function MeansPayment() {
  return (
    <div>
      <div>
        <p className="w-full border-b border-black p-2.5 font-bold">
          결제 수단
        </p>
        <input type="radio" name="deposit" />
        <span className="inline-block p-2.5"> 무통장 입금</span>
        <p className="w-full border-y p-2.5 font-bold">
          은행 선택 / 입금자이름 입력
        </p>
        <p className="w-full border-b border-black p-2.5 font-bold">
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
            className="w-full rounded-sm bg-slate-100 p-2.5"
            placeholder="전화번호/사업자번호(발행선택에 따른 폼)"
          />
        </div>
      </div>
    </div>
  );
}

export default MeansPayment;
