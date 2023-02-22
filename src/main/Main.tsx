import React from 'react';
import classes from "./Main.module.css";
import classesContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={classes.mainBlock}>
            <div className={`${classesContainer.container} ${classes.mainContainer}`}>
                <div className={classes.about}>
                    <span>Hello there!</span>
                    <h1>I am Misha Pashuto</h1>
                    <p>Front-End Developer</p>
                </div>
                <div className={classes.photo}>photo</div>
            </div>
        </div>
    );
};