import {configureStore, combineReducers} from "@reduxjs/toolkit";
import stepsReducer from "./Steps/StepsReducer";
import formReducer from "./FormData/FormDataReducer";

const rootReducer = combineReducers({
    steps: stepsReducer, 
    form: formReducer
})

const store = configureStore({reducer: rootReducer});

export default store