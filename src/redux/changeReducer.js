import {BALANCE_CHANGE} from "./types";

const initialState = {
    operations: [],
}

export const changeReducer = (state = initialState, action) => {

    console.log('data from action = ', action)

    switch (action.type) {
        case BALANCE_CHANGE:
            return {
                ...state,
                operations: [...state.operations, action.data],
            }
        default: {
            return state;
        }
    }
}