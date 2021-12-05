import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inputText} from "./redux/actions";


function Title(props) {

    const dispatch = useDispatch();
    const title = useSelector(state => {

    })

    const handleChange = (e) => {
        console.log(e.target.value)
        dispatch(inputText(e.target.value))
    }

    return (
        <div>
            <input type="text" onChange={handleChange}/>
        </div>
    );
}


export default Title;