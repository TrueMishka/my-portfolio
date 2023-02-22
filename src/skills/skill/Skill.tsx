import React from 'react';
import classes from "./Skill.module.css";

type SkillPropsType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={classes.skill}>
            <div className={classes.icon}></div>
            <h3>{props.title}</h3>
            <span className={classes.description}>{props.description}</span>
        </div>
    );
};