import React from 'react';
import classes from './Title.module.scss';

type PropsType = {
    title: string
}
export const Title:React.FC<PropsType> = ({title}) => {
    return (
        <div className={classes.title}>
            <h2>{title}</h2>
        </div>
    );
};