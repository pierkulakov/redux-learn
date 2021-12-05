import {BALANCE_CHANGE, DECREMENT, INCREMENT, INPUT_TEXT} from "./types";

export function incrementBalance() {
    return {
        type: INCREMENT
    }
}

export function decrementBalance() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function balanceChange(text, id) {
    return {
        type: BALANCE_CHANGE,
        data: {text, id}
    }
}