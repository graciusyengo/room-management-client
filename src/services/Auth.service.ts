import { instance } from "../api/axios";
import { IResponseUSerData, IUSerData } from "../types/type";

export const AuthService={
    async registration(userData:IUSerData):Promise<IResponseUSerData | undefined>{
        const {data}=await instance.post<IResponseUSerData>('users',userData)
        return data
 
    },
    // Connexion de l'utilisateur
    async login(email: string, password: string): Promise<IResponseUSerData | undefined> {
        try {
          const { data } = await instance.post<IResponseUSerData>('auth/login', { email, password });
          return data;  // Retourne les informations de l'utilisateur et le token (accessToken)
        } catch (error) {
          console.error("Login error:", error);
          throw error;  // Vous pouvez lancer une erreur personnalisée ou la propager
        }
      },
    async getMe(){}
}