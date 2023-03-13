import { createContext } from "react";

import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isAuthorized, handleSignIn, handleSignUp, handleSignOut } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        handleSignIn,
        handleSignUp,
        handleSignOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
