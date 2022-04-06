import React from 'react'
import {Slider} from 'antd';
import 'antd/dist/antd.css';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: any) => void
    value?: any
    step?: number
    // min, max, disable, ...
}
const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {
    const onChangeCallback = (val: any) => {
        props.onChangeRange && props.onChangeRange(val)
    }
    return (
        <div>
            <Slider
                style={{width: '120px'}}
                range={true}
                step={props.step}
                value={props.value}
                onChange={onChangeCallback}
            />
        </div>
    );
};


export default SuperDoubleRange