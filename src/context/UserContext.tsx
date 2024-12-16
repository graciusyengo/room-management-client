import { useContext,createContext,useState, ReactNode } from "react";
import { IUSerCurrent } from "../types/type";

interface UserContextType {
    user: IUSerCurrent| null;
    setUser: React.Dispatch<React.SetStateAction<IUSerCurrent | null>>;
    logout: ()=>void
  }

  const UserContext = createContext<UserContextType | undefined>(undefined);
  console.log(UserContext)

  export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUSerCurrent| null>(null);

    const logout=()=>{
      setUser(null)
      localStorage.removeItem("userCurrent")
    }
  
    return (
      <UserContext.Provider value={{ user, setUser,logout }}>
        {children}
      </UserContext.Provider>
    );
  };

  // Hook personnalisé pour accéder facilement au contexte
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useUser doit être utilisé dans un UserProvider");
    }
    return context;
  };

