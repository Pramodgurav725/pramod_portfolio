import React from 'react'
import { Link } from 'react-router-dom'
import './MyWork.css'
import P_Projects from '../../assets/P_Projects.png'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest Work</h1>
            </div>

            <Link to="/projects" className="mywork-banner">
                <img src={P_Projects} alt="View all projects" />
                <div className="mywork-banner-overlay">
                    <span>Explore Projects &rarr;</span>
                </div>
            </Link>

            <Link to="/projects" className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </Link>
            
        </div>
        
    )
}

export default MyWork