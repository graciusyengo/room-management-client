
import axios from "axios"
import { getTokenFromLocalStorage } from "../helpers/localStorage.helper"

export const  instance= axios.create({
    baseURL:"http://localhost:3001/api",
    headers: {
        "Authorization":`Bearer` + getTokenFromLocalStorage() || ""
    }
})