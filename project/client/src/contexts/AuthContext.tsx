import { createContext, ReactNode, useEffect, useState } from "react";
import jwt from 'jsonwebtoken'
import { setSession } from "api"

interface User {
  accountId: string
  accountName: string
  accountType: 'admin' | 'teacher' | 'student'
  classroomId: string | null
  fullName: string
  image: string
  email: string
  phone: string
}

const AuthContext = createContext<{
  userAuthInfo: User | null,
  setUserAuthInfo: React.Dispatch<React.SetStateAction<User>> | null
}>({
  userAuthInfo: null,
  setUserAuthInfo: null
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userAuthInfo, setUserAuthInfo] = useState()

  useEffect(() => {
    (async () => {
        const accessToken = window.localStorage.getItem("accessToken");
        if (!accessToken) {
          return false
        }
        const payload = jwt.decode(accessToken, { json: true })
        console.log('payload', payload);
        const currentTime = new Date().getTime() / 1000;
        const tokenExpireTime = payload?.exp || 0
        if (accessToken && (currentTime < tokenExpireTime)) {
          setSession(accessToken);
          //@ts-ignore
          setUserAuthInfo(payload)
        }
    })();
  }, []);

  return (
    //@ts-ignore
    <AuthContext.Provider value={{ userAuthInfo, setUserAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
