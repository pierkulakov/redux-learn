import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {balanceChange} from "./redux/actions";
import LogBalance from "./LogBalance";


function Operations(props) {

    const dispatch = useDispatch()
    const [textBalance, setTextBalance] = useState(0);

    const operationLog = useSelector(state => {
        console.log('redux state', state)
        const {changeReducer} = state;
        return changeReducer.operations;
    })

    console.log('operations > ', operationLog)

    const handleInput = (e) => {
        setTextBalance(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 2421);
        dispatch(balanceChange(textBalance, id));
        console.log('отправили туда', textBalance, id)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={textBalance} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>

            {operationLog.length && operationLog.map(res => (
                <LogBalance key={res.id} data={res}/>
            ))}

        </div>
    );
}

export default Operations;