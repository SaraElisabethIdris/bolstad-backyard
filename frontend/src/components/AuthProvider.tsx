"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "../../types.ts";

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    // In a real app, you would validate credentials against your backend
    if (username === "admin" && password === "admin") {
      setUser({ id: 1, username: "admin", role: "admin" });
    } else if (username === "user" && password === "user") {
      setUser({ id: 2, username: "user", role: "regular" });
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
