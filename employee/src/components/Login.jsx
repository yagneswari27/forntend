import React from 'react'
import { FaUser , FaLock} from "react-icons/fa";
import  { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const [password, setPasswordValue] = useState("");
    const [userId, setUserIdValue] = useState("");

    const setPassword = (e) => {
        setPasswordValue(e.target.value);
    }

    const setUserId = (e) => {
        setUserIdValue(e.target.value);
    }
    const navigator=useNavigate();

    const handleSubmit = async (e) => {
        //prevent default
        e.preventDefault();

        //api call
        console.log("this is our data "+ userId +"   "+ password )
        
        //create an object with userId and password for passing the api
        const data = {
            "userId": userId,
            "password": password
        }

        try{
            const response = await axios.post("http://localhost:9999/loginUser", data);

            console.log("this is the response " + response.data);
            if(!response.data) {
                alert("Invalid User Id or Password");
            }
            else {
                alert("Login Successfull");
               navigator('/home');

            }
            
        } catch(error) {
            alert("Invalid User and Password");
            console.error(error);
        }




    }

    const redirectToRegister = () => {
        window.location.href = "/register";
    }
  return (
    <div className='loginclass'>
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='input-box'>
            <input type="emial" placeholder="Username" value={userId} onChange={setUserId}/>
            <FaUser  className='icon'/>
            </div>
            <div className='input-box'>
            <input type="password" placeholder=" Password" value={password} onChange={setPassword}/>
            <FaLock  className='icon'/>
            </div>
           
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account?<a href='/register'>Register</a></p>
            </div>
        </form>

    </div>
    </div>
  )
}

export default Login