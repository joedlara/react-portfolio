import { combineReducers } from "redux"

import projectReducer from "./projectReducer"

const rootReducer = combineReducers({
  projectState: projectReducer,
})

export default rootReducer
