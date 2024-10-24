import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaUser , FaLock} from "react-icons/fa";

import './Register.css';

const Register = () => {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigator=useNavigate();

    const handleChange = (e) => {
      setRegister({
        ...register,
        [e.target.name]:e.target.value
      })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(register);

        try{
            const response = await axios.post('http://localhost:9999/addUser', register);
            console.log(response.data);
            //alert("User added successfully");
            //navigator('/');

       } catch(error){
        console.log(error);

       }
       
}
  return (
    <div className='registerclass'>
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='input-box'>
            <input type="text" name="name" placeholder="Name" value={register.name} onChange={handleChange}/>
            <FaUser  className='icon'/>
            </div>
            <div className='input-box'>
            <input type="email" name="email" placeholder="Enter your email" value={register.email} onChange={handleChange}/>
            <FaUser  className='icon'/>
            </div>
            <div className='input-box'>
            <input type="password" name="password" placeholder="Enter your password" value={register.password}  onChange={handleChange} />
            <FaLock  className='icon'/>
            </div>
           
            <button type="submit">Register</button>
            <div className="register-link">
                <p>Already Create an Account?<a href='/'>Login</a></p>
            </div>
        </form>

    </div>
    </div>
  )
}

export default Register