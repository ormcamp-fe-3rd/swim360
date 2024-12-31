"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserId } from "@/hooks/useUserId";
import { getUser, updateUser } from "@/services/user";
import { User } from "@/types/users";

import PrimaryButton from "../common/PrimaryButton";
import CustomButton from "../join/CustomButton";

const formSchema = z.object({
  username: z.string().min(2).max(10),
  phoneNumber: z
    .string()
    .regex(/^(\d{10,11})$/, {message: "연락처는 10자~11자 사이로 입력가능합니다."}),
  emailId: z.string().email(),
  password: z
    .string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/, {
      message: "영문, 숫자, 특수문자 포함 8자~16자 사이로 입력가능합니다.",
    }),
  passwordCheck: z.string()
}).superRefine(({password, passwordCheck}, ctx) => {
  if(password !== passwordCheck){
    ctx.addIssue({
      code: "custom",
      message: "비밀번호가 일치하지 않습니다.",
      path: ["passwordCheck"]
    })
  }
});

export default function UserInfoEditForm() {
  const { userId } = useUserId();
  const [, setUser] = useState<User>();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phoneNumber: "",
      emailId: "",
      password: "",
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
      } catch (error: unknown) {
        if(error instanceof Error){
          console.log("User Edit error: ", error);
          alert(error.message);
        }else{
          alert("unexpected error")
        }
      }
    };
    fetchUserInfo();
  }, [form, userId]);

  const navigate = useNavigate();
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try{
      const updateData = {phoneNumber: values.phoneNumber, password: values.password};
      console.log(values);
      const updatedUser = await updateUser(parseInt(userId), updateData)
      console.log(updatedUser);
      alert("수정 완료");
      navigate("/mypage");
    } catch(error){
      console.log(error)
    }
    
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
                  <FormControl className="h-12 w-2/3 border-none bg-[#F0F0F0] text-gray-500">
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
                  <div className="w-2/3">
                    <FormControl className="h-12 border-none bg-[#F0F0F0]">
                      <Input placeholder="010-1234-1234" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
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
                  <FormControl className="h-12 w-2/3 border-none bg-[#F0F0F0] text-gray-500">
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
                        placeholder="영문, 숫자, 특수문자 포함 8자~16자 사이로 입력가능합니다."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
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
                        placeholder="영문, 숫자, 특수문자 포함 8자~16자 사이로 입력가능합니다."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
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
              // onClick={() => alert("준비 중인 기능입니다.")}
              type="submit"
            >
              확인
            </PrimaryButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
