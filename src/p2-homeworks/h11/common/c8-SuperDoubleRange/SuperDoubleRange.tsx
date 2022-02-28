import React from 'react'
import {Slider} from "antd";
import 'antd/dist/antd.css';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: any) => void
    value?: any
    step?:number
    // min, max, step, disable, ...
}
//
// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType>= (
//     {
//     //     onChangeRange,
//         value,
//     //     // min, max, step, disable, ...
//     }
// ) => {
//     // const onChangeCallback = (value: [number, number]) => {
//     //     onChangeRange && onChangeRange(value)
//     // }
//     // сделать самому, можно подключать библиотеки
//     return (
//         <Slider
//             style={{width: "120px"}}
//             range={true}
//             value={value}
//             // onChange={onChangeCallback}
//         />
//    // <div>1</div>
//
//
//     )
// };
const SuperDoubleRange = (props:SuperDoubleRangePropsType) => {
    const onChangeCallback = (val:any) => {
        props.onChangeRange && props.onChangeRange(val)
    }
    return (
        <div>
            <Slider
                        style={{width: "120px"}}
                        range={true}
                        step={props.step}
                        value={props.value}
                        onChange={onChangeCallback}
                    />
        </div>
    );
};


export default SuperDoubleRange