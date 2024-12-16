import React, { useState } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import { FaBlogger } from "react-icons/fa";
import { AuthService } from '../../services/Auth.service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { IUSerCurrent } from '../../types/type';
import { setTokenFromLocalStorage } from '../../helpers/localStorage.helper';

function Login() {

  const [login,setLogin]=useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate = useNavigate();
  const {setUser}= useUser()

  const loginHandler= async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!email|| !password)(
      toast.error("Veuillez renseigner ces champs")
        
    )
    setIsLoading(true);

    try {
      
      const data = await AuthService.login(email,password)
      console.log(data)
  
      if (data && data.accessToken && data.email  ) {
     

        const userAuth : IUSerCurrent={
          email: data.email,
          accessToken: data.accessToken,
        }

        console.log("userAuth créé : ", userAuth);
        // localStorage.setItem("userCurrent",JSON.stringify(userAuth))
        setTokenFromLocalStorage("userCurrent",userAuth)
      
        setUser(userAuth);
      
    
      }
    setLogin(true)
    navigate('/dashboard')
  
      
    } catch (err:any) {
     const error= err.response?.data.message
     toast.error(error.toString())
      
    }finally {
      setIsLoading(false);
    }
   
  }
  return (

<div className="wrapper fadeInDown">
  <div id="formContent">
    <div className="fadeIn first">
  
    <FaBlogger />
    </div>
    <form onSubmit={loginHandler}>
      <input
        type="text"
        id="login"
        className="fadeIn second"
        name="email"
        value={email}
        placeholder="email"

        onChange={(e)=>setEmail((e.target as HTMLInputElement).value)}
      />
      <input
        type="text"
        id="password"
        className="fadeIn third"
        name="password"
        value={password}
        placeholder="password"
        
        onChange={(e)=>setPassword((e.target as HTMLInputElement).value)}
      />
   <button 
  type="submit" 
  className="fadeIn fourth" 
  disabled={isLoading}
>
  {isLoading ? (<><span className="spinner"></span> chargement ... </> ) : "Se connecter"}
</button>
    </form>
    <div id="formFooter">
      <NavLink className="underlineHover" to={''} >
        Forgot Password?
      </NavLink>
    </div>
  </div>
</div>

  )
}

export default Login