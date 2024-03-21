import { ADD_FRONTEND_RED, DELETE_FRONTEND_RED, GET_FRONTEND_RED, UPDATE_FRONTEND_RED } from "../Constants";

export default function FrontendReducer(state = [], action) {
   switch (action.type) {
      case ADD_FRONTEND_RED:
         var newState = state
         newState.push(action.payload)
         return newState
      case GET_FRONTEND_RED:
         return action.payload
      case UPDATE_FRONTEND_RED:
          newState = state
         var index = newState.findIndex((x)=>x._id===action.payload._id)
         newState[index].pic=action.payload.pic
         newState[index].des=action.payload.des
         return newState
      case DELETE_FRONTEND_RED:
          newState = state.filter((item)=>item._id!==action.payload._id)
         return newState
      default:
         return state
   }
}