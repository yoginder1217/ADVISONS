import { ADD_WISHLIST_RED, DELETE_WISHLIST_RED, GET_WISHLIST_RED } from "../Constants";

export default function WishlistReducer(state = [], action) {
   switch (action.type) {
      case ADD_WISHLIST_RED:
         var newState = state
         newState.push(action.payload)
         return newState
      case GET_WISHLIST_RED:
         return action.payload
      case DELETE_WISHLIST_RED:
          newState = state.filter((item)=>item._id!==action.payload._id)
         return newState
      default:
         return state
   }
}