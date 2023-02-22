import React from 'react';
import classes from './Portfolio.module.css';
import classesContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Portfolio = () => {
    return (
        <div className={classes.portfolioBlock}>
            <div className={`${classesContainer.container} ${classes.portfolioContainer}`}>
                <h3 className={classes.title}>Portfolio</h3>
                <div className={classes.projects}>
                    <Project
                        tittle={'todolist'}
                        description={'React todolist with redux...'}
                        gitHubURL={''}
                        imgURL={'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    />
                    <Project
                        tittle={'todolist'}
                        description={'React todolist with redux...'}
                        gitHubURL={''}
                        imgURL={'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    />
                    <Project
                        tittle={'todolist'}
                        description={'React todolist with redux...'}
                        gitHubURL={''}
                        imgURL={'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    />
                </div>
            </div>
        </div>
    );
};