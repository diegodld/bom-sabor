import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
  Dispatch,
} from "react";

const initialValue = {
  IsAuth: false,
  setLogin: (value: boolean) => {},
};

export const AuthContext = createContext(initialValue);

type AuthContextProps = {
  children: ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProps> = ({
  children,
}) => {
  const [login, setLogin] = useState<boolean>(false);

  function handleAuth(value: boolean) {
    setLogin(value);
  }
  return (
    <AuthContext.Provider value={{ IsAuth: login, setLogin: setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
