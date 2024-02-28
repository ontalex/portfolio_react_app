import "./skillCard.css";

export const SkillCard = ({ name, icon }) => {
        return (
                <div className="skills_card">
                        <img src={icon} alt={name} />
                        <p>{name}</p>
                </div>
        )
}
