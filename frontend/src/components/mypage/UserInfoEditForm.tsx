"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="my-10 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="h-16 w-full border-b-2">
                <div className="flex w-full items-center justify-between px-10">
                  <FormLabel className="flex w-1/3 items-center justify-start text-lg font-normal text-[#5E5E5E]">
                    이름
                  </FormLabel>
                  <FormControl className="h-12 w-2/3 border-none bg-[#F0F0F0]">
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="h-16 w-full border-b-2">
                <div className="flex w-full items-center justify-between px-10">
                  <FormLabel className="flex w-1/3 items-center justify-start text-lg font-normal text-[#5E5E5E]">
                    연락처
                  </FormLabel>
                  <FormControl className="h-12 w-2/3 border-none bg-[#F0F0F0]">
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="h-16 w-full border-b-2">
                <div className="flex w-full items-center justify-between px-10">
                  <FormLabel className="flex w-1/3 items-center justify-start text-lg font-normal text-[#5E5E5E]">
                    이메일 아이디
                  </FormLabel>
                  <FormControl className="h-12 w-2/3 border-none bg-[#F0F0F0]">
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="h-20 w-full border-b-2">
                <div className="flex w-full items-center justify-between px-10">
                  <FormLabel className="flex w-1/3 items-center justify-start text-lg font-normal text-[#5E5E5E]">
                    비밀번호 변경
                  </FormLabel>
                  <div className="w-2/3">
                    <FormControl className="h-12 border-none bg-[#F0F0F0]">
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription className="pt-1">
                      영문, 숫자, 특수문자 포함 8자~16자 사이로 입력가능합니다.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="h-20 w-full border-b-2">
                <div className="flex w-full items-center justify-between px-10">
                  <FormLabel className="flex w-1/3 items-center justify-start text-lg font-normal text-[#5E5E5E]">
                    비밀번호 확인
                  </FormLabel>
                  <div className="w-2/3">
                    <FormControl className="h-12 border-none bg-[#F0F0F0]">
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription className="pt-1">
                      비밀번호가 동일하지 않습니다.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="h-32 w-full border-b-2">
                <div className="flex w-full items-center justify-between px-10">
                  <FormLabel className="flex w-1/3 items-center justify-start text-lg font-normal text-[#5E5E5E]">
                    배송지
                  </FormLabel>
                  <div className="flex w-2/3 flex-col gap-1">
                    <FormControl className="h-12 border-none bg-[#F0F0F0]">
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormControl className="h-12 border-none bg-[#F0F0F0]">
                      <Input
                        placeholder="상세 주소를 입력해주세요"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="mt-10 flex w-full gap-2">
            <Link to="/mypage" className="w-full">
            <Button className="h-[70px] w-full rounded-xl text-base bg-white text-black hover:bg-gray-100" type="submit">
              취소
            </Button>
            </Link>
            <Link to="/mypage" className="w-full">
            <Button className="h-[70px] w-full rounded-xl text-base" type="submit">
              확인
            </Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}