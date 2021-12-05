import React, {useState} from 'react';
import LogBalance from "./LogBalance";


function Operations(props) {
    const [textBalance, setTextBalance] = useState(0);

    const handleInput = (e) => {
        setTextBalance(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submotted')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={textBalance} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            <LogBalance/>
        </div>
    );
}

export default Operations;