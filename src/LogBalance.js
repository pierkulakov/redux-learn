import React, {useEffect, useState} from 'react';


function LogBalance({data}) {

    const [logText, setLogText] = useState('')

    const {text, id} = data;

    useEffect(() => {
        if (text) {
            setLogText(text)
        }
    }, [text])

    return (
        <div id={data.id}> {data.text} </div>
    );
}

export default LogBalance;