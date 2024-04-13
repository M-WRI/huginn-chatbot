import { useContext, createContext, ReactNode, useState } from "react";

const AuthContext = createContext<any | undefined>(undefined);

const initialValue = {
  authHasBeenTriggered: false,
  isAuthenticated: false,
  authMessage: "",
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authState, setAuthState] = useState<any>(initialValue);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
