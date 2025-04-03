import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import about_profile from '../../assets/about_profile.svg'
import Pramod_photo from '../../assets/Pramod_photo.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="about-section">
        <div className="about-left">
            {/* <img src={about_profile} alt="" /> */}
            <img src={Pramod_photo} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
              <p> </p>
                <p>Hi, I’m <b style={{ color: "#DF8908" }}>Pramod Gurav!</b>A data enthusiast who loves working with numbers and uncovering patterns. I specialize in SQL,Microsoft Excel, Power BI, and Python with Liberaries. Passionate about data-driven decision-making, I specialize in uncovering insights through visualization and analytics.</p>
                <p>I love working with data and transforming raw numbers into meaningful insights. My journey in data analytics began with curiosity and has evolved into a passion for problem-solving and storytelling through data.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Numpy, Pandas, Matplotlib</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>SQL </p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Power BI </p><hr style={{width:"90%"}}/></div>
                <div className="about-skill"><p>Analytical Skill </p><hr style={{width:"60%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>0+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
