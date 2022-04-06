import React from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC} from './bll/themeReducer';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[themes + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperRadio
                    value={theme}
                    onChangeOption={onChangeCallback}
                    options={themes}
                    name={'radio'}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
