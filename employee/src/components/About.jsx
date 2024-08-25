import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsersGear,faUserLarge,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link,Outlet } from 'react-router-dom'
import emptype1 from '../assets/emptype1.jpg'
import job from '../assets/2yvy910r.png'
import salary from '../assets/salary.jpg'

const About = () => {
  return (
    <div className='container-fluid conatiner'>
        <div className='row mt-5'>
          <div className='col-3 '>
            <div className=' bars '>
            <ul className='p-4'>
            {/* <Link to='/'style={{textDecoration:'none'}}><li><FontAwesomeIcon icon={ faHouse} />Home</li></Link>  */}
             <Link to='/employees'style={{textDecoration:'none'}}><li className='m-3 '><FontAwesomeIcon icon={faUsersGear} />ListOfEmployees</li></Link> 
            <Link to='/add-employee' style={{textDecoration:'none'}}><li className='m-3 '><FontAwesomeIcon icon={faUserLarge} />Add Employee</li></Link>
            </ul>
            </div>
          
           </div>
            <div className='col-9 d-flex flex-column'>
              <div className='card1'> 
              <div className='card3 text-center p-2'>
                <img src={emptype1} className='img2'/>
                <div>
                <h4>Types of Employees</h4>
                <a href='#' className='anchor'>View More <FontAwesomeIcon icon={faArrowRight}  className='iconA'/></a>
                </div>
              </div>
              <div className='card3 text-center p-2'>
              <img src={job} className='img2'/>
                <div>
                <h4>Job Details</h4>
                <a href='#' className='anchor'>View More <FontAwesomeIcon icon={faArrowRight}  className='iconA'/></a>
                </div>
              </div>
              </div>
              <div className='card1'> 
              <div className='card3 text-center p-2'>
              <img src={salary} className='img2'/>
                <div>
                <h4>Salary and Increament</h4>
                <a href='#' className='anchor'>View More <FontAwesomeIcon icon={faArrowRight}  className='iconA'/></a>
                </div>
               
              </div>
              <div className='card3'>
                <h4>Vactions</h4>
              </div>
              </div>
             
            </div>

        </div>
       
    </div>
  )
}

export default About