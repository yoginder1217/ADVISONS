import { ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constants";

export default function MaincategoryReducer(state = [], action) {
   switch (action.type) {
      case ADD_MAINCATEGORY_RED:
         var newState = state
         newState.push(action.payload)
         return newState
      case GET_MAINCATEGORY_RED:
         return action.payload
      case UPDATE_MAINCATEGORY_RED:
         newState = state
         var index = newState.findIndex((x) => x.id === action.payload.id)
         newState[index] = action.payload
         return newState
      case DELETE_MAINCATEGORY_RED:
         newState = state.filter((item) => item.id !== action.payload.id)
         return newState
      default:
         return state
   }
}