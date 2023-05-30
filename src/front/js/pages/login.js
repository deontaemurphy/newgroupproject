import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";

const Login = () => {
  const {store,actions} =useContext(Context)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handleClick = (e) => {
    e.preventDefault()
    actions.login(email,password)
  }
  return(
    <div>
      <input type= "text" placeholder= "email" value ={email} onChange={(e)=>setEmail(e.target.value)}>
      </input>
      <input type= "password" placeholder= "password" value ={password} onChange={(e)=>setPassword(e.target.value)}></input>
      <button onClick= {(e)=> handleClick(e)}>Login</button>
      <button>Register</button>
    </div>
  )
}

export default Login ;