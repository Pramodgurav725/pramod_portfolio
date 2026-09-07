import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BackButton.css'

// fallbackPath = where to go if there's no in-app history to go back to
// (e.g. user opened this page directly from a shared link)
const BackButton = ({ label = "Back", fallbackPath = "/" }) => {
    const navigate = useNavigate()

    const handleBack = () => {
        // location.key === 'default' means this is the first page in the session
        // (no real "back" history exists), so use the fallback instead
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1)
        } else {
            navigate(fallbackPath)
        }
    }

    return (
        <button className="back-button" onClick={handleBack}>
            <span className="back-arrow">&larr;</span> {label}
        </button>
    )
}

export default BackButton