import {INPUT_TEXT} from "./types";

const initialState = {
    balance: '',
}

export const inputReducer = (state = initialState, action) => {
    console.log('Input Reducer >>', action)
    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                balance: action.text
            }
        default: {
            return state;
        }
    }
}