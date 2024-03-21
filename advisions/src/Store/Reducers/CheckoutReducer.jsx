import { ADD_CHECKOUT_RED, DELETE_CHECKOUT_RED, GET_CHECKOUT_RED, GET_CHECKOUT_USER_RED, UPDATE_CHECKOUT_RED } from "../Constants";

export default function CheckoutReducer(state = [], action) {
   switch (action.type) {
      case ADD_CHECKOUT_RED:
         var newState = state
         newState.push(action.payload)
         return newState
      case GET_CHECKOUT_RED:
      case GET_CHECKOUT_USER_RED:
         return action.payload
      case UPDATE_CHECKOUT_RED:
         newState = state
         var index = newState.findIndex((x) => x._id === action.payload._id)
         newState[index] = action.payload
         return newState
      case DELETE_CHECKOUT_RED:
         newState = state.filter((item) => item._id !== action.payload._id)
         return newState
      default:
         return state
   }
}