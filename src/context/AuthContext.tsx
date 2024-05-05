import { useContext, createContext, ReactNode, useState } from "react";

interface IAuthContext {
  authState: IAuthState;
  setAuthState: (value: IAuthState) => void;
}

interface IAuthState {
  authHasBeenTriggered: boolean;
  isError: boolean;
  state: string;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const initialValue = {
  authHasBeenTriggered: false,
  isError: false,
  state: "",
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authState, setAuthState] = useState<IAuthState>(initialValue);

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
