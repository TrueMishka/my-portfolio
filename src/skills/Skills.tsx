import React from 'react';
import classes from "./Skills.module.css";
import classesContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {

    const skills = [
        {
            id: 1,
            title: 'HTML',
            img: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            url: 'https://placeholder.com'
        },
        {
            id: 1,
            title: 'HTML',
            img: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            url: 'https://placeholder.com'
        },
        {
            id: 1,
            title: 'HTML',
            img: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            url: 'https://placeholder.com'
        }
    ]

    return (
        <div className={classes.skillsBlock}>
            <div className={`${classesContainer.container} ${classes.skillsContainer}`}>
                <h2 className={classes.title}>My skills</h2>
                <div className={classes.skills}>
                    <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...'}/>
                    <Skill title={'TS'} description={'Lorem ipsum dolor sit amet, consectetur...'}/>
                    <Skill title={'TS'} description={'Lorem ipsum dolor sit amet, consectetur...'}/>
                    <Skill title={'TS'} description={'Lorem ipsum dolor sit amet, consectetur...'}/>
                </div>
            </div>
        </div>
    );
};