import React from 'react'
import s from './Message.module.css';
type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props:MessageType) => (
    <>
        <div className={s.message}>
            <img src={props.avatar} alt=""/>

            <div className={s.receive}>
                <div className={s.name}>{props.name} </div>
                <div>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    </>
);

export default Message;
