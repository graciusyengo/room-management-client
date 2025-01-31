import { AxiosResponse } from "axios"
import {  ITypeRoomData } from "../types/type"
import { instance } from "../api/axios"



export const TypeRoomsService={

async getTypeRoom(): Promise<ITypeRoomData[]>{

try {
    const response:AxiosResponse<ITypeRoomData[]>= await instance.get("type-room")
    return response.data
  
    
} catch (error:any) {
    console.log("Erreur lors de la recuperation de type de salle")
    throw error

    
}
}
    
}