import React from 'react';
import classes from './Portfolio.module.scss';
import classesContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from '../assets/image/todolist.jpeg'

export const Portfolio = () => {

    const todolist = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={classes.portfolioBlock}>
            <div className={`${classesContainer.container} ${classes.portfolioContainer}`}>
                <Title title={'Projects'}/>
                <div className={classes.projects}>
                    <Project
                        style={todolist}
                        tittle={'todolist'}
                        description={'React todolist with redux...React todolist with redux...React todolist with redux...'}
                        gitHubURL={''}
                    />
                    <Project
                        style={todolist}
                        tittle={'todolist'}
                        description={'React todolist with redux...'}
                        gitHubURL={''}
                    />
                    <Project
                        style={todolist}
                        tittle={'todolist'}
                        description={'React todolist with redux...'}
                        gitHubURL={''}
                   />
                </div>
            </div>
        </div>
    );
};