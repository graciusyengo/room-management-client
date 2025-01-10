
//USER
export interface IUSerData{
    email:string
    password:string
    username:string
  
}
export interface IUSerCurrent{
    email:string | undefined; // Autoriser undefine
    accessToken:string
  
}




export interface IResponseUSerData{
    email:string  | undefined
    password:string  | undefined
    accessToken:string |undefined
    createdAt:string  | undefined
    updatedAt:string  | undefined
    __v?:number  | undefined
    _id?:string  | undefined
    message:string  | undefined
}

//ROOMS

export interface IRoomData{
    nom: string;
    description: string;
    adresse: string;
    capacite: number;
    disponibilite: boolean;
    images: string;
    etat: string;
  
}



