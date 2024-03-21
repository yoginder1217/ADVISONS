import { ADD_NEWSLETTER_RED, DELETE_NEWSLETTER_RED, GET_NEWSLETTER_RED } from "../Constants";

export default function NewsletterReducer(state = [], action) {
   switch (action.type) {
      case ADD_NEWSLETTER_RED:
         var newState = state
         newState.push(action.payload)
         return newState
      case GET_NEWSLETTER_RED:
         return action.payload
      case DELETE_NEWSLETTER_RED:
          newState = state.filter((item) => item._id !== action.payload._id)
         return newState
      default:
         return state
   }
}