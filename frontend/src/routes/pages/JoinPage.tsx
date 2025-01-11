import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "@/components/common/PrimaryButton";
import CustomButton from "@/components/join/CustomButton";
import InputField from "@/components/join/InputField";

function JoinPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phonenum: "",
    emailid: "",
    password: "",
    passwordcheck: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phonenum: "",
    emailid: "",
    password: "",
    passwordcheck: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 유효성 검사 로직 추가
    let error = "";
    let transformedValue = value;

    if (name === "name") {
      if (/\d/.test(value)) {
        error = "이름에는 숫자를 입력할 수 없습니다.";
      }
    } else if (name === "phonenum") {
      transformedValue = value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, "$1-$2-$3");
      if (!/^\d{2,3}-\d{3,4}-\d{4}$/.test(transformedValue)) {
        error = "연락처는 숫자와 하이픈(-)만 입력 가능합니다.";
      }
    } else if (name === "emailid") {
      if (!/^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+$/.test(value)) {
        error = "유효한 이메일 주소를 입력해주세요.";
      }
    } else if (name === "password") {
      if (
        !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,16}$/.test(
          value,
        )
      ) {
        error =
          "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자로 입력해주세요.";
      }
    } else if (name === "passwordcheck") {
      if (value !== formData.password) {
        error = "비밀번호가 동일하지 않습니다.";
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleCancelButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="mx-auto w-full max-w-[960px] px-4">
      <p className="border-b border-black p-2.5 text-center text-xl font-semibold">
        회원가입
      </p>
      <form action="#" className="my-10 flex flex-col gap-5">
        <InputField
          label="이름"
          name="name"
          id="name"
          onChange={handleInputChange}
          helperText={errors.name}
        />
        <div className="border-b-2"></div>
        <InputField
          label="연락처"
          name="phonenum"
          id="phonenum"
          onChange={handleInputChange}
          helperText={errors.phonenum}
        />
        <div className="border-b-2"></div>
        <InputField
          type="email"
          label="이메일 아이디"
          name="emailid"
          id="emailid"
          onChange={handleInputChange}
          helperText={errors.emailid}
        />
        <div className="border-b-2"></div>
        <InputField
          label="비밀번호"
          name="password"
          id="password"
          type="password"
          helperText={errors.password}
          onChange={handleInputChange}
        />
        <div className="border-b-2"></div>
        <InputField
          label="비밀번호 확인"
          name="passwordcheck"
          id="passwordcheck"
          type="password"
          helperText={errors.passwordcheck}
          onChange={handleInputChange}
        />
        <div className="border-b-2"></div>
      </form>
      <div className="mt-20 flex justify-around gap-2.5">
        <CustomButton
          onClick={handleCancelButtonClick}
          className="w-1/2 border-gray-400 hover:bg-gray-50"
        >
          취소
        </CustomButton>
        <PrimaryButton className="w-1/2">확인</PrimaryButton>
      </div>
    </div>
  );
}

export default JoinPage;
