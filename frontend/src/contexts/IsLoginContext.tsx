import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";


export const IsLoginContext = createContext(false);
export const IsLoginSetterContext = createContext<Dispatch<SetStateAction<boolean>>>(()=>{})

interface Props {
  children: React.ReactNode;
}

export default function IsLoginContextProvider({ children }: Props) {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(()=>{
    const sessionId = sessionStorage.getItem('id');
    setIsLogin(sessionId !== null)
  },[]);

  return (
    <IsLoginContext.Provider value={isLogin}>
      <IsLoginSetterContext.Provider value={setIsLogin}>
        {children}
      </IsLoginSetterContext.Provider>
    </IsLoginContext.Provider>
  );
}
