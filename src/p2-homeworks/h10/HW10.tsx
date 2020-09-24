import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function HW10() {
    // useSelector, useDispatch

    const setLoading = () => {
        // dispatch
        // setTimeout
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {false
                ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
