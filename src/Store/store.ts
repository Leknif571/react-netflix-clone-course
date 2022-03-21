import { combineReducers, createStore } from "redux"
import { filmReducer } from "./FunctionReducers/filmReducers"
import { whosWatchReducer } from "./FunctionReducers/whosWatchReducers"


export const Store = createStore(
    combineReducers({
        filmred : filmReducer,
        whowatchred : whosWatchReducer,
    }),
)







