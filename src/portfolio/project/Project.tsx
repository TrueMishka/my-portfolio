import React from 'react';
import classes from './Project.module.scss'

type ProjectPropsType = {
    style: React.CSSProperties
    tittle: string
    description: string
    gitHubURL: string
}

export const Project: React.FC<ProjectPropsType> = (props) => {
    return (
        <div className={classes.project}>
            <div style={props.style} className={classes.image}>
                <a href={props.gitHubURL} className={classes.viewBtn}>github</a>
            </div>
            <div className={classes.projectInfo}>
                <h3 className={classes.projectTitle}>{props.tittle}</h3>
                <span className={classes.description}>{props.description}</span>
            </div>
        </div>
    );
};