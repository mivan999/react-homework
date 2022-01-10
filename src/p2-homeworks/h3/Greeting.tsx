import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error?s.error:s.someClass //+ need to fix with (?:)

    return (
        <div>
          <div>


              <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onBlur={setNameCallback}
            />
              <SuperButton disabled={!name} onClick={addUser}>add</SuperButton>
              {/*<button disabled={!name} onClick={addUser}>add</button>*/}
              <span className={s.total}>{totalUsers}</span>
          </div>
            <span className={s.spanError}>{error}</span>

        </div>
    )
}

export default Greeting
