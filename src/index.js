import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const defaulState = {
    cash: 0,
}

const reducer = (state = defaulState, action) => {
    switch (action.type) {
        case 'ADD_CASH':
            return {...state, cash: state.cash + state.payload}
        case 'GET_CASH':
            return {...state, cash: state.cash - state.payload}
        default:
            return;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
