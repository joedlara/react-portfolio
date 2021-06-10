import db from "../firebase"
import { GET_PROJECTS, SET_LOADING_STATUS } from "./actionType"

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
})

export const getProjects = (payload) => ({
  type: GET_PROJECTS,
  payload: payload,
})

export function getProjectsAPI() {
  return (dispatch) => {
    let payload
    db.collection("projects").onSnapshot((snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data())
      dispatch(getProjects(payload))
    })
  }
}
