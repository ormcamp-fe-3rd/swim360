import { useContext } from "react"

import { UserIdContext } from "@/contexts/UserIdContext"

export const useUserId = () => {
  const context = useContext(UserIdContext);
  if(context === undefined){
    throw new Error("UserId Context Error")
  }
  return context;
}