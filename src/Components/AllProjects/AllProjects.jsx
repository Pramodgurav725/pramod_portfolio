// src/Components/AllProjects/AllProjects.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AllProjects.css'
import mywork_data from '../../assets/mywork_data'
import BackButton from '../BackButton/BackButton'

const domains = [
    { name: "Data Analytics", slug: "data-analytics" },
    { name: "Machine Learning", slug: "machine-learning" },
    { name: "Full Stack", slug: "full-stack" },
]

const AllProjects = () => {
    const navigate = useNavigate()

    const countFor = (domainName) =>
        mywork_data.filter(w => w.w_category === domainName).length

    return (
        <div className="all-projects">
            {/* goes back one step -> lands on / (home) */}
            <BackButton label="Back to Home" fallbackPath="/" />

            <h1>Explore My Work</h1>
            <div className="domain-container">
                {domains.map((domain, index) => (
                    <div
                        key={index}
                        className="domain-card"
                        onClick={() => navigate(`/projects/${domain.slug}`)}
                    >
                        <h2>{domain.name}</h2>
                        <p>{countFor(domain.name)} project{countFor(domain.name) !== 1 ? 's' : ''}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllProjects