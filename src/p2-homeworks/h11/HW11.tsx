import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import c from './common/c7-SuperRange/SuperRange.module.css'


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const val=[value1,value2]
    // const onChangeRangeDouble = (value: [number,number]) => {
    //     setValue1(0)
    //     setValue2(1)
    // }
    const onChangeRangeValue = (value: any) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11
            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={setValue1}
                    value={value1}
                    step={5}
                />
            </div>

            <div >
                <span>{value1}</span>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    onChangeRange={onChangeRangeValue}
                    value={val}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>

    )
}

export default HW11