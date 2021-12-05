import {createStore} from "@reduxjs/toolkit";

const initialState = {
    cash: 42,
    account_holder: 'Petr Kulakov',
}

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);

export default store;