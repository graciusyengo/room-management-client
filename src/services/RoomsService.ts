import { AxiosResponse } from "axios";
import { IRoomData, IUSerData } from "../types/type";
import { instance } from "../api/axios";

export const RoomsService={

    async  getRooms(): Promise<IRoomData[]>{
        try {
            const response:AxiosResponse<IRoomData[]>= await instance.get("rooms")
            return response.data
            
        } catch (error:any) {
            console.log("l'erreur lors de la recuperaion des users")

            throw error
        
        }

    }
}
