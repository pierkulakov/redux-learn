import {DECREMENT, INCREMENT} from "./types";

const initialState = {
    cash: 0,
    account_holder: 'Petr Kulakov',
}

export const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                cash: state.cash + 1
            }
        case DECREMENT:
            return {
                ...state,
                cash: state.cash - 1
            }
        default: {
            return state;
        }
    }
}