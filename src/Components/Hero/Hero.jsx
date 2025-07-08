import React from 'react'
import './Hero.css'
import pramod_portfolio from '../../assets/pramod_gurav.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            {/* <img src={profile_img} alt="" /> */}
            <img src={pramod_portfolio} alt="" />
            <h1><span>I'm PRAMOD GURAV,</span> <br /> Data Analyst</h1>
            <p> Enthusiastic Data Analyst with a passion for uncovering insights and making informed decisions. Strong analytical mindset with knowledge of data analysis, visualization, and problem-solving. Eager to apply my skills and grow in the field of analytics.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Connect With Me</p></AnchorLink></div>
                <div className="hero-resume"><a href="https://drive.google.com/file/d/1-gV85xPm5dfqK-EY8zfpULq3oqOcDvvD/view?usp=sharing">My Resume</a></div>
            </div>
        </div>
    )
}

export default Hero
