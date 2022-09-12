import React, { createContext, ReactNode } from "react";

const initialValue = {
  display: "",
};

export const RootContext = createContext(initialValue);

type GlobalContextProps = {
  children: ReactNode;
};

export const GlobalContextProvider: React.FC<GlobalContextProps> = ({
  children,
}) => {
  const [url, setUrl] = React.useState<string>("");
  const [display, setDisplay] = React.useState<string>("ion-hide");
  React.useEffect(() => {
    setUrl(window.location.pathname);

    if (
      url !== "/home" &&
      url !== "/perfil" &&
      url !== "/cursos" &&
      url !== "/pedidos"
    ) {
      setDisplay("ion-hide");
      console.log(url.localeCompare("/home"));
    } else {
      setDisplay("");
    }
  }, [url, display]);

  console.log(url, display);

  return (
    <RootContext.Provider
      value={{
        display: display,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};
