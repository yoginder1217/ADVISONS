import { ADD_FRONTEND, DELETE_FRONTEND, GET_FRONTEND, UPDATE_FRONTEND } from "../Constants"
export function addFrontend(data) {
    return {
        type: ADD_FRONTEND,
        payload: data
    }
}
export function getFrontend(data) {
    return {
        type: GET_FRONTEND
    }
}
export function updateFrontend(data) {
    return {
        type: UPDATE_FRONTEND,
        payload: data
    }
} export function deleteFrontend(data) {
    return {
        type: DELETE_FRONTEND,
        payload: data
    }
}