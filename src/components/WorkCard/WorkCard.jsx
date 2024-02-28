import React from 'react'
import { Skillicon } from '../SkillIcon/Skillicon';
import "./WorkCard.css";

const WorkCard = ({ name, description, skills, link, bg }) => {
        return (
                <div className="portfolio_wrapper" style={{backgroundImage: `url("${bg}")`}}>
                        <div className="portfolio_card">
                                <h2 className="project_name">{name}</h2>
                                <div className="project_technologies">
                                        {
                                                skills.map(skill => <Skillicon name={skill.name} icon={skill.icon} key={skill.name} />)
                                        }
                                </div>
                                <div className="project_line"></div>
                                <p className="project_description">{description}</p>
                                <a href={link} target="_blank" rel="noopener noreferrer" className="project_button">
                                        <span>Смотреть</span>
                                </a>
                        </div>
                </div>
        )
}

export default WorkCard