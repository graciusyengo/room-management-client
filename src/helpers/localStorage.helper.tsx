import { IUSerCurrent } from "../types/type"

export function getTokenFromLocalStorage(){
    const data= localStorage.getItem("token")
    const token=  data? JSON.parse(data) : ""
    return token
}
export function setTokenFromLocalStorage(key:string,token:IUSerCurrent) :void{
     localStorage.setItem(key,JSON.stringify(token))
}
export function removeTokenFromLocalStorage(key:string):void{
    localStorage.removeItemt(key)
}