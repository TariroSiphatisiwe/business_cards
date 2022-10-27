import React from "react"
import './styles.css'
import { FaEnvelope,FaLinkedin } from 'react-icons/fa';



const Buttons=()=>{
    return(
        <div>
            <button className="email buttons"><FaEnvelope className="icons" /> Email</button>
            <button className="linkden buttons"><FaLinkedin className="icons"/> Linkden</button>
        </div>
    )
}

export default Buttons