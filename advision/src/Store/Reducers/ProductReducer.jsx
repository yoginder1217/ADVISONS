import { ADD_PRODUCT_RED, DELETE_PRODUCT_RED, GET_PRODUCT_RED, UPDATE_PRODUCT_RED } from "../Constants";

export default function ProductReducer(state = [], action) {
   switch (action.type) {
      case ADD_PRODUCT_RED:
         var newState = state
         newState.push(action.payload)
         return newState
      case GET_PRODUCT_RED:
         return action.payload
      case UPDATE_PRODUCT_RED:
         newState = state
         var index = newState.findIndex((x) => x.id === action.payload.id)
         newState[index] = action.payload
         return newState
      case DELETE_PRODUCT_RED:
         newState = state.filter((item) => item.id !== action.payload.id)
         return newState
      default:
         return state
   }
}