import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsersGear,faUserLarge,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link,Outlet } from 'react-router-dom'
import emptype1 from '../assets/emptype1.jpg'
import job from '../assets/2yvy910r.png'
import salary from '../assets/salary.jpg'
import vacation from '../assets/vacation.jpg'

const About = () => {
  return (
    <div className=' bg5 pt-5'>
        <div className='row'>
          <div className='col-3 '>
            <div className=' bars '>
            <ul className='p-4'>
            {/* <Link to='/'style={{textDecoration:'none'}}><li><FontAwesomeIcon icon={ faHouse} />Home</li></Link>  */}
            <Link to='/add-employee' style={{textDecoration:'none'}}><li className='m-3 '><FontAwesomeIcon icon={faUserLarge} /> Add Employee</li></Link>
            <Link to='/employees'style={{textDecoration:'none'}}><li className='m-3 '><FontAwesomeIcon icon={faUsersGear} /> Modify&Delete</li></Link> 

            <Link to='/attendance' style={{textDecoration:'none'}}><li className='m-3 '><FontAwesomeIcon icon={faUserLarge} /> Personal Details</li></Link>
            <Link to='/salary' style={{textDecoration:'none'}}><li className='m-3 '><FontAwesomeIcon icon={faUserLarge} /> Salary Details</li></Link>

            </ul>
            </div>
          
           </div>
            <div className='col-9 d-flex flex-column'>
              <div className='card1'> 
              <div className='card3 text-center p-2'>
                <img src={emptype1} className='img2'/>
                <div>
                <h4>Types of Employees</h4>
                <a href='/types' className='anchor'>View More <FontAwesomeIcon icon={faArrowRight}  className='iconA'/></a>
                </div>
              </div>
              <div className='card3 text-center p-2'>
              <img src={job} className='img2'/>
                <div>
                <h4>Job Details</h4>
                <a href='/jobs' className='anchor'>View More <FontAwesomeIcon icon={faArrowRight}  className='iconA'/></a>
                </div>
              </div>
              </div>
              <div className='card1'> 
              <div className='card3 text-center p-2'>
              <img src={salary} className='img2'/>
                <div>
                <h4>Salary and Increment</h4>
                <a href='/salaryin' className='anchor'>View More <FontAwesomeIcon icon={faArrowRight}  className='iconA'/></a>
                </div>
               
              </div>
              <div className='card3 text-center p-2'>
              <img src={vacation} className='img2'/>
                <div>
                <h4>Leave Details</h4>
                <a href='#' className='anchor'>View More <FontAwesomeIcon icon={faArrowRight}  className='iconA'/></a>
                </div>
               
              </div>
              </div>
             
            </div>

        </div>
       
    </div>
  )
}

export default About