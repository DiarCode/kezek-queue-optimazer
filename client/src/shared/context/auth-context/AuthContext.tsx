import { User } from "@/shared/types/user/User.type";

import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface IAuthContext {
  isAuth: boolean;
  error: string;
  user: User | null;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const [isAuth, setIsAuth] = useState(false);
  const [onMountLoading, setOnMountLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    //TODO: fetch user and set

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(setUser({ id: 1, name: "Diar" }));
      }, 2000);
    }).then(() => {
      setIsAuth(true);
      setOnMountLoading(false);
    });
  }, []);

  const value: IAuthContext = useMemo(() => {
    return {
      isAuth: isAuth,
      error: error,
      user: user,
    };
  }, [error, isAuth, user]);

  const renderedChildren = !onMountLoading && children;

  return (
    <AuthContext.Provider value={value}>
      {renderedChildren}
    </AuthContext.Provider>
  );
};
