import {BALANCE_CHANGE} from "./types";

const initialState = {
    operations: [],
}

export const changeReducer = (state = initialState, action) => {
    console.log('Change Balance Reducer >>', action)
    switch (action.type) {
        case BALANCE_CHANGE:
            return {
                ...state,
                balance: action.text,

            }
        default: {
            return state;
        }
    }
}