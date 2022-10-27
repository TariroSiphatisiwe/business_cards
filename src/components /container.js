import React from 'react'
import './styles.css'
import ImageComponent from './image'
import ContactInfo from './contact_info'
import Buttons from './buttons'
import MainInfo from './main'
import Footer from './footer'
const Container=()=>{
return(
    
        <div className='inner-cont'>
           <ImageComponent/>
           <ContactInfo/>
           <Buttons/>
           <MainInfo/>
           <Footer/>
        </div>
   
)
}

export default Container