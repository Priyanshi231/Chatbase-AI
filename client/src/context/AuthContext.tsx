import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { useEffect } from "react";
import { getCurrentUser } from "../services/auth.service";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(
  null
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
    const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : null;
    });

    const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
    });

  const login = (user: User, token: string) => {
    setUser(user);
    setToken(token);

    localStorage.setItem("token", token);

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );
  };

  const logout = () => {
    setUser(null);

    setToken(null);

    localStorage.removeItem("token");

    localStorage.removeItem("user");
  };

  useEffect(() => {
  const loadUser = async () => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) return;

    try {
      const response = await getCurrentUser(storedToken);

      if (response.success) {
        setUser(response.user);
        setToken(storedToken);
      }
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setUser(null);
      setToken(null);
    }
  };

  loadUser();
}, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}