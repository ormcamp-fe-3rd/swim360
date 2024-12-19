import { ReactNode, useState } from "react";

import {
  Tabs,
  TabsContent,
  TabsListCustom,
  TabsTriggerCustom,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface FindIdPwdTabProps {
  idContent: ReactNode;
  pwContent: ReactNode;
  defaultValue: "find-id" | "find-pw";
}

function FindIdPwdTab({
  idContent,
  pwContent,
  defaultValue,
}: FindIdPwdTabProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value: "find-id" | "find-pw") => {
    setActiveTab(value);
  };

  return (
    <Tabs defaultValue={defaultValue} className="mx-auto w-full">
      <TabsListCustom className="mx-auto h-full w-full tablet:w-[600px]">
        <TabsTriggerCustom
          value="find-id"
          className={cn("h-full w-1/2", {
            "border-black": activeTab === "find-id",
          })}
          onClick={() => handleTabChange("find-id")}
        >
          아이디 찾기
        </TabsTriggerCustom>
        <TabsTriggerCustom
          value="find-pw"
          className={cn("h-full w-1/2", {
            "border-black": activeTab === "find-pw",
          })}
          onClick={() => handleTabChange("find-pw")}
        >
          비밀번호 찾기
        </TabsTriggerCustom>
      </TabsListCustom>
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
