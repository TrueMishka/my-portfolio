import React from 'react';
import classes from './Contact.module.css'
import classesContainer from '../common/styles/Container.module.css'

export const Contact = () => {
    return (
        <div className={classes.contactBlock}>
            <div className={`${classesContainer.container} ${classes.contactContainer}`}>
                <h3 className={classes.title}>Contact</h3>
                <form className={classes.form}>
                    <input placeholder={'Your name'}/>
                    <input placeholder={'Your Email'}/>
                    <textarea placeholder={'Your Message'}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};