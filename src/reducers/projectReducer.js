import { SET_LOADING_STATUS, GET_PROJECTS } from "../actions/actionType"

export const initState = {
  projects: [],
  loading: false,
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      }
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      }
    default:
      return state
  }
}

export default projectReducer
