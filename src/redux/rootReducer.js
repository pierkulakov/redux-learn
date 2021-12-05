import {combineReducers} from "@reduxjs/toolkit";
import {balanceReducer} from "./balanceReducer";
import {inputReducer} from "./inputReducer";
import {changeReducer} from "./changeReducer";

export const rootReducer = (combineReducers({
    balanceReducer,
    inputReducer,
    changeReducer,
}));