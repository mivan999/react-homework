import React from 'react';
import s from './Preloader.module.css'
const Preloader = () => {
    return (
        <div className={s.container}>

            <div className={s.yellow}> </div>
            <div className={s.red}> </div>
            <div className={s.blue}> </div>
            <div className={s.violet}> </div>
        </div>
    );
};

export default Preloader;