"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserId } from "@/hooks/useUserId";
import { getUser } from "@/services/user";
import { User } from "@/types/users";

import PrimaryButton from "../common/PrimaryButton";
import CustomButton from "../join/CustomButton";

const formSchema = z.object({
  username: z.string().min(2).max(10),
  phoneNumber: z
    .string()
    .min(10, { message: "10자 이상이어야 합니다." })
    .max(12),
  emailId: z.string().email(),
  password: z
    .string()
    .min(8, { message: "8자 이상이어야 합니다." })
    .max(16, { message: "16자 이하여야 합니다." }),
  address: z.string().optional(),
  detailAddress: z.string().optional(),
  passwordCheck: z.string().min(8).max(16),
});

export default function UserInfoEditForm() {
  const { userId } = useUserId();
  const [, setUser] = useState<User>();
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordCheckMessage, setPasswordCheckMessage] = useState("");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phoneNumber: "",
      emailId: "",
      password: "",
      address: "",
      detailAddress: "",
      passwordCheck: "",
    },
  });

  //회원정보 불러오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await getUser(userId);
        setUser(user);

        form.reset({
          username: user.name || "",
          phoneNumber: user.phoneNumber || "",
          emailId: user.emailId || "",
        });
      } catch (error: any) {
        console.log("User Edit error: ", error);
        alert(error.message);
      }
    };
    fetchUserInfo();
  }, [form, userId]);

  //비밀번호 검증
  const password = form.watch("password");
  const passwordCheck = form.watch("passwordCheck");
  useEffect(() => {
    if (password) {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
      if (!passwordRegex.test(password)) {
        setPasswordMessage(
          "영문, 숫자, 특수문자 포함 8자~16자 사이로 입력가능합니다.",
        );
      } else {
        setPasswordMessage("");
      }
    } else {
      setPasswordMessage(
        "영문, 숫자, 특수문자 포함 8자~16자 사이로 입력가능합니다.",
      );
    }

    if (passwordCheck && password !== passwordCheck) {
      setPasswordCheckMessage("비밀번호가 동일하지 않습니다.");
    } else {
      setPasswordCheckMessage("");
    }
  }, [password, passwordCheck]);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="my-10 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex h-16 w-full">
                <div className="flex w-full items-center justify-between px-10">
                  <FormLabel className="flex w-1/3 items-center justify-start text-lg font-normal text-[#5E5E5E]">
                    이름
                  </FormLabel>
                  <FormControl className="h-12 w-2/3 border-none bg-[#F0F0F0]">
                    <Input placeholder="name" {...field} readOnly />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="border-b-2"></div>
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex h-16 w-full">
                <div className="flex w-full items-center justify-between px-10">
                  <FormLabel className="flex w-1/3 items-center justify-start text-lg font-normal text-[#5E5E5E]">
                    연락처
                  </FormLabel>
                  <FormControl className="h-12 w-2/3 border-none bg-[#F0F0F0]">
                    <Input placeholder="010-1234-1234" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="border-b-2"></div>
          <FormField
            control={form.control}
            name="emailId"
            render={({ field }) => (
              <FormItem className="flex h-16 w-full">
                <div className="flex w-full items-center justify-between px-10">
                  <FormLabel className="flex w-1/3 items-center justify-start text-lg font-normal text-[#5E5E5E]">
                    이메일 아이디
                  </FormLabel>
                  <FormControl className="h-12 w-2/3 border-none bg-[#F0F0F0]">
                    <Input
                      placeholder="swim360@google.com"
                      {...field}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="border-b-2"></div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex h-20 w-full">
                <div className="flex w-full items-center justify-between px-10">
                  <FormLabel className="flex w-1/3 items-center justify-start text-lg font-normal text-[#5E5E5E]">
                    비밀번호 변경
                  </FormLabel>
                  <div className="w-2/3">
                    <FormControl className="h-12 border-none bg-[#F0F0F0]">
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="pt-1">
                      {passwordMessage}
                    </FormDescription>
                  </div>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="border-b-2"></div>
          <FormField
            control={form.control}
            name="passwordCheck"
            render={({ field }) => (
              <FormItem className="flex h-20 w-full">
                <div className="flex w-full items-center justify-between px-10">
                  <FormLabel className="flex w-1/3 items-center justify-start text-lg font-normal text-[#5E5E5E]">
                    비밀번호 확인
                  </FormLabel>
                  <div className="w-2/3">
                    <FormControl className="h-12 border-none bg-[#F0F0F0]">
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="pt-1">
                      {passwordCheckMessage}
                    </FormDescription>
                  </div>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="border-b-2"></div>

          <div className="mt-10 flex w-full gap-2">
            <Link to="/mypage" className="w-full">
              <CustomButton className="border-gray-400 bg-white text-black hover:bg-gray-50">
                취소
              </CustomButton>
            </Link>
            {/* TODO: 회원정보 수정 기능 추가 */}
            <PrimaryButton
              className="w-full"
              onClick={() => alert("준비 중인 기능입니다.")}
            >
              확인
            </PrimaryButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
