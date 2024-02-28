import { SkillCard } from '../SkillCard/SkillCard';
import { useEffect, useState } from 'react';

import "./skills.css";

export const Skills = () => {

        let [data, setData] = useState([]);
        let [isLoading, setIsLoading] = useState(true);
        let [isError, setIsError] = useState(false);

        useEffect(
                () => {
                        fetch("data/portfolio_list.json")
                                .then(res => res.json())
                                .then(data => {
                                        console.log(data);
                                        setData(data);
                                })
                                .catch(err => {
                                        console.log(err)
                                        setIsError(true);
                                })
                                .finally(() => setIsLoading(false));
                },
                []
        );

        return (
                <>
                        {isError && <p className='skills_status skills_error'>Ошибка</p>}
                        {isLoading && <p className='skills_status skills_loading'>Загрузка!</p>}
                        {
                                !isLoading && Boolean(data.length) && data[0].skills.map(skill => <SkillCard name={skill.name} icon={skill.icon} key={skill.name} />)
                        }
                </>
        )
}
