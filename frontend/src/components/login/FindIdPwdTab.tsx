import { ReactNode } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FindIdPwdTabProps {
  idContent: ReactNode;
  pwContent: ReactNode;
  onIdClick?: () => void;
  onPwClick?: () => void;
}

function FindIdPwdTab({
  idContent,
  pwContent,
  onIdClick,
  onPwClick,
}: FindIdPwdTabProps) {
  return (
    <Tabs defaultValue="find-id" className="mx-auto w-full">
      <TabsList className="w-full gap-2.5 px-4 pb-2.5">
        <TabsTrigger
          value="find-id"
          className="w-full"
          onClick={onIdClick ? onIdClick : undefined}
        >
          아이디 찾기
        </TabsTrigger>
        <TabsTrigger
          value="find-pw"
          className="w-full"
          onClick={onPwClick ? onPwClick : undefined}
        >
          비밀번호 찾기
        </TabsTrigger>
      </TabsList>
      <TabsContent className="mx-auto py-20 text-center" value="find-id">
        {idContent}
      </TabsContent>
      <TabsContent className="mx-auto py-20 text-center" value="find-pw">
        {pwContent}
      </TabsContent>
    </Tabs>
  );
}

export default FindIdPwdTab;
