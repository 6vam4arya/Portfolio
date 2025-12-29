import React from 'react'
import './Project.css'
import Projects_Info from '../../src/assets/projects_data'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// writing import statement for including arrow icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import fontawesome icons before using their embedded code for any icon

const Project = () => {
    return (
        <div className='projects' id="PROJECT">
            <div className="projects-title">
                <h1>My Projects</h1>
                {/* <img src={} alt=""/> */}
            </div>
            <div className="project-container">
                {Projects_Info.map((proj, index) => {
                    return <div key={index} className="project-format">
                        {/* Creating a read more feature for projects description */}
                        <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-format"
                        >
                            <h3>{proj.project_no}</h3>
                            <h2>{proj.project_name}</h2>
                            <p>{proj.project_description}</p>

                            <div className="projects-readmore">
                                <p>Read More</p>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </a>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Project