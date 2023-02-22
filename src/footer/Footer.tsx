import React from 'react';
import classes from './Footer.module.css'
import classesContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={classes.footerBlock}>
            <div className={`${classes.footerContainer} ${classesContainer.container}`}>
                <h3 className={classes.title}>
                    Pashuto Misha
                </h3>
                <div className={classes.footer}>
                    <div className={classes.link}></div>
                    <div className={classes.link}></div>
                    <div className={classes.link}></div>
                    <div className={classes.link}></div>
                </div>
                <h3 className={classes.title}>all rights reserved</h3>
            </div>
        </div>
    );
};