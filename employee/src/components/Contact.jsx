import React from 'react'
import OG from '../assets/OG.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneVolume ,faEnvelope} from '@fortawesome/free-solid-svg-icons'
//import Footer from './Footer'

const Contact = () => {
  return (
    <div className='container-fluid contact'>
        <div className='cont  p-5 '>
            <div>
                <img src={OG}  className='contactimg'></img>
            </div>
            <div className='card4'>
                <div className='card5'>
                <FontAwesomeIcon icon={faPhoneVolume} />
                    <p>+918888888888</p>
                </div>
                <div className='card5'>
                <FontAwesomeIcon icon={faEnvelope} />
                    <p>OG@gmail.com</p>
                </div>
            </div>
        </div>
        <div>
            <div>
                <p>hello</p>
            </div>
        </div>
    </div>
  )
}

export default Contact