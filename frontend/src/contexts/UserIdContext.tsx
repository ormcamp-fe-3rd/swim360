import { createContext, useEffect, useState } from "react";

interface UserIdContextProps {
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}
export const UserIdContext = createContext<UserIdContextProps | undefined>(
  undefined,
);

interface Props {
  children: React.ReactNode;
}

export default function UserIdContextProvider({ children }: Props) {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const sessionId = sessionStorage.getItem("id");
    if (!sessionId) return;
    setUserId(sessionId);
  }, []);

  const UserIdContextValue = {
    userId,
    setUserId,
  };

  return (
    <UserIdContext.Provider value={UserIdContextValue}>
      {children}
    </UserIdContext.Provider>
  );
}
