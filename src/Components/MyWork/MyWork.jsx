import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div key={index} className="mywork-item">
                        <a href={work.w_github} target="_blank" rel="noopener noreferrer">
                            <img src={work.w_img} alt={work.w_name} />
                        </a>
                        <div className="mywork-info">
                            <p>{work.w_name}</p>
                            {/* <a href={work.w_github} target="_blank" rel="noopener noreferrer">
                                View on GitHub</a> */}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork
