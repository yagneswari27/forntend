import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHouse,faAddressCard,faGauge } from '@fortawesome/free-solid-svg-icons'
import empicon from '../assets/empicon.jpg'
import {NavLink} from 'react-router-dom';


const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-light' style={{backgroundColor:'black'}}>
                <a className="navbar-brand" href="https://www.javaguides.net" style={{fontSize:'23px',color:'white'}}><img src={empicon} className='icon1'/>Employee Management System</a>
                <ul className='d-flex flex-row '>
                 <NavLink to="/home" style={{textDecoration:'none'}}><li className='m-1 link'><FontAwesomeIcon icon={ faHouse} />Home</li></NavLink> 
                 {/* <NavLink to="/employees" style={{textDecoration:'none'}}><li className='m-1 link'>ListOfEmployees</li></NavLink> */}
                 <NavLink to="/about" style={{textDecoration:'none'}}><li className='m-1 link'><FontAwesomeIcon icon={faGauge} />Dashboard</li></NavLink>
                 <NavLink to="/" style={{textDecoration:'none'}}><li className='m-1 link'><FontAwesomeIcon icon={faAddressCard} />Contact us</li></NavLink> 
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent
    
