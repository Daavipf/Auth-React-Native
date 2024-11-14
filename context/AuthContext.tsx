import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { isUser } from "@/Types/types";

type ProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

async function hasUserInSession() {
  const storedToken = await AsyncStorage.getItem("token");
  if (!storedToken) {
    return false;
  }
  const decoded = jwtDecode(storedToken);
  if (!isUser(decoded)) {
    return false;
  }
  return true;
}

export function AuthContextProvider({ children }: ProviderProps) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    async function check() {
      if (await hasUserInSession()) {
        setAuthenticated(true);
      }
    }
    check();
  });

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Erro, useAuth deve estar dentro de um AuthProvider");
  }
  return context;
}
