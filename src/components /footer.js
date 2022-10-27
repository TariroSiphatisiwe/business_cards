import React from "react"
import './styles.css'
import {FaTwitter,FaInstagram,FaGithub} from 'react-icons/fa'

const Footer =()=>{
    return(
        <div className="foot"> 
            <footer>
           <FaTwitter className="icon"/>
           <FaInstagram className="icon"/>
           <FaGithub className="icon"/>
            </footer>
        </div>
       
    )
}

export default Footer