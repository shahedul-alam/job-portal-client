import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  

  const AuthContextValues = {
    name: "shaheed",
  };

  return (
    <AuthContext.Provider value={AuthContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
