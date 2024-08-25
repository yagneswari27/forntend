import React from 'react';
import emp1 from '../assets/emp1.jpg';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigator=useNavigate();
  const goToDashboard=()=>{
    navigator('/about');
  }
  return (
    <div className='container-fluid container2'>
      <div className='display1 p-4 mt-5'>
        <div className='m-2'>
           <img src={emp1} className='img'/>
        </div>
        <div className='m-2'>
          <h1>Employee Management System</h1>
          <p>Welcome to the presentation of our innovative Employee management System.This system will revolutionize how you manage your workforce,streamline processes,and inprove overall effciency.</p>
        </div>
      </div>
      <button className='button' onClick={goToDashboard}>Get Started</button>
    </div>
  )
}

export default Home