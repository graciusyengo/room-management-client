import React, { useState } from "react";

import "./Signup.css";
import { NavLink } from "react-router-dom";
import { AuthService } from "../../services/Auth.service";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      
    if(!email|| !password || !username)(
      toast.error("Veuillez renseigner ces champs")
    )
      console.log("registere");
      const data = await AuthService.registration({ email, password,username });
      if(data){
        toast.success("le compte a ete creer avec success")
       
        setEmail("");
        setPassword("");
        setUsername("");
        navigate('/login');




      }
      console.log(data);
    } catch (err:any) {

      const  error= err.response?.data.message
      toast.error(error?.toString())

    }
  };
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first"></div>
        <form onSubmit={registrationHandler}>
        <input
            type="text"
            id="login"
            className="fadeIn second"
            name="username"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
          />
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          />
          <input
            type="submit"
            className="fadeIn fourth"
            defaultValue=" S'inscrire"
          />
        </form>
        <div id="formFooter">
          <NavLink className="underlineHover" to={""}>
            J'ai deja un compte?
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Signup;
