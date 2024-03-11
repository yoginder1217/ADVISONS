import { ADD_FRONTEND_RED, DELETE_FRONTEND_RED, GET_FRONTEND_RED, UPDATE_FRONTEND_RED } from "../Constants";

export default function ProductReducer(state = [], action) {
   switch (action.type) {
      case ADD_FRONTEND_RED:
         var newState = state
         newState.push(action.payload)
         return newState
      case GET_FRONTEND_RED:
         return action.payload
      case UPDATE_FRONTEND_RED:
         newState = state
         var index = newState.findIndex((x) => x.id === action.payload.id)
         newState[index] = action.payload
         return newState
      case DELETE_FRONTEND_RED:
         newState = state.filter((item) => item.id !== action.payload.id)
         return newState
      default:
         return state
   }
}