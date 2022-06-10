import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import user from "./reducers/UserReducer"

const rootReducer = combineReducers({
    user
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store