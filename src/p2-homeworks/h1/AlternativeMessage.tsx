import React, {useState} from 'react'
import Message from './Message';
//
// const messageTest = {
//     avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
//     name: 'Some Name',
//     message: 'test',
//     time: '22:00',
// }

function AlternativeMessage() {
    const [mess, setMess] = useState('');
    const [msg, setMsg] = useState([{
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Some Name',
        message: 'test',
        time: '22:00',
    }
    ]);

    const addMsg = (event: any) => {
        if (event.key === 'Enter') {
            let date = new Date()
            setMsg([...msg,
                {
                    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                    name: 'Some Name',
                    message: event.target.value,
                    time: String(date.getHours())+":"+String(date.getMinutes()),
                }])
            setMess("")
        }
        // return <Message
        //     message={messageTest.message}
        //     avatar={messageTest.avatar}
        //     time={messageTest.time}
        //     name={messageTest.name}/>
    }

    return (
        <div>
            {msg.map(e =>
                <Message
                    avatar={e.avatar}
                    name={e.name}
                    message={e.message}
                    time={e.time}
                />)
            }

            <input
                value={mess}
                onChange={(event)=>{setMess(event.target.value)}}
                onKeyPress={addMsg}
            />
            {/*<input value={msg}/>*/}
            {/*<button onClick={() => addMsg()}>send</button>*/}

        </div>
    )
}

export default AlternativeMessage
