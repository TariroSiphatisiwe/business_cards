import React from "react"
import './styles.css'

const MainInfo=()=>{
    return(
        <div>
            <main>
                <div className="about info">
                    <h3 className="title about_title">About</h3>
                    <p className="par about_par">I'm a Full Stack Software Engineer, on her Machine Learning Journey. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="about interests info">
                    <h3 className="title interests_title">Interests</h3>
                    <p className="par interests_par">Content creator.Food expert. Music scholar. Reader. Internet fanatic.Travel geek.Sunset fanatic.</p>
                </div>
            </main>
        </div>
    )
}
export default MainInfo 