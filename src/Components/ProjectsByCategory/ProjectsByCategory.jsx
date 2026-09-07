// src/Components/ProjectsByCategory/ProjectsByCategory.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import './ProjectsByCategory.css'
import mywork_data from '../../assets/mywork_data'
import BackButton from '../BackButton/BackButton'

const slugToName = {
    "data-analytics": "Data Analytics",
    "machine-learning": "Machine Learning",
    "full-stack": "Full Stack",
}

const ProjectsByCategory = () => {
    const { category } = useParams()
    const categoryName = slugToName[category]
    const filtered = mywork_data.filter(w => w.w_category === categoryName)

    return (
        <div className="category-projects">
            {/* goes back one step -> lands on /projects (domain list) */}
            <BackButton label="Back to all domains" fallbackPath="/projects" />

            <h1>{categoryName} Projects</h1>

            <div className="mywork-container">
                {filtered.map((work, index) => (
                    <div key={index} className="mywork-item">
                        <a href={work.w_github} target="_blank" rel="noopener noreferrer" className="mywork-thumb">
                            <img src={work.w_img} alt={work.w_name} />
                        </a>

                        <div className="mywork-info">
                            <p className="mywork-name">{work.w_name}</p>

                            {work.w_desc && (
                                <p className="mywork-desc">{work.w_desc}</p>
                            )}

                            {work.w_tech && work.w_tech.length > 0 && (
                                <div className="tech-chip-container">
                                    {work.w_tech.map((tech, i) => (
                                        <span key={i} className="tech-chip">{tech}</span>
                                    ))}
                                </div>
                            )}

                            <div className="mywork-links">
                                {work.w_demo && (
                                        <a href={work.w_demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mywork-btn mywork-btn-primary"
                                    >Live Demo</a>
                                )}
                                    <a href={work.w_github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mywork-btn mywork-btn-secondary">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                {filtered.length === 0 && <p className="mywork-empty">No projects yet in this category.</p>}
            </div>
        </div>
    )
}

export default ProjectsByCategory