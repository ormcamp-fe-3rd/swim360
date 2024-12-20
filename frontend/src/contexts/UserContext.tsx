import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";


export const UserIdContext = createContext<string | null>(null);
export const UserIdSetterContext = createContext<
  Dispatch<SetStateAction<string | null>>
>(() => {});

interface Props {
  children: React.ReactNode;
}

export default function UserContextProvider({ children }: Props) {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const sessionId = sessionStorage.getItem("id");
    if (!sessionId) return;

    setUserId(sessionId);
  });

  return (
    <UserIdContext.Provider value={userId}>
      <UserIdSetterContext.Provider value={setUserId}>
        {children}
      </UserIdSetterContext.Provider>
    </UserIdContext.Provider>
  );
}
