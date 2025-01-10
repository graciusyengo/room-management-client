import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IRoomData } from "../types/type";
import { RoomsService } from "../services/RoomsService";


interface RoomsContextType {
    rooms: IRoomData[];
    error: string | null;
    setRooms: React.Dispatch<React.SetStateAction<IRoomData[]>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
  }

  const RoomsContext = createContext<RoomsContextType | undefined>(undefined);

  console.log(RoomsContext)

  export const RoomsProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
    const [rooms, setRooms] = useState<IRoomData[]>([]);
    const [error, setError] = useState<string| null>(null);
  
    useEffect(() => {
      const fetchRooms = async () => {
        try {
          const data = await RoomsService.getRooms();
          console.log('jsjsjsj',data);
          setRooms(data);
        } catch (error: any) {
          setError("Impossible de récupérer les données des salles");
        }
      };
      fetchRooms();
    }, []);
  
    return (
      <RoomsContext.Provider value={{ rooms, error, setRooms, setError }}>
        {children}
      </RoomsContext.Provider>
    );
  };




  export const useRooms = () => {
    const context = useContext(RoomsContext);
    if (!context) {
      throw new Error('useRooms must be used within a RoomsProvider');
    }
    return context;
  };