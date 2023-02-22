import React from 'react';
import classes from './Project.module.css'

type ProjectPropsType = {
    tittle: string
    description: string
    gitHubURL: string
    imgURL: string
}

export const Project: React.FC<ProjectPropsType> = (props) => {
    return (
        <div className={classes.projectContainer}>
            <div className={classes.project}>
                <img className={classes.image} src={props.imgURL}/>
                <a href={props.gitHubURL} className={classes.projectHref}>github</a>
            </div>
            <div className={classes.description}>
                <span>{props.tittle}</span>
                <span>{props.description}</span>
            </div>

        </div>
    );
};