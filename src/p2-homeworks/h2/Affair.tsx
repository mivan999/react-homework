import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: Function// need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.affairs}>

            <div className={s.name}>{props.affair.name}</div>
            <div className={s.affair}>{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
