import { GET_USERS_SUCCESS,DELETE_USER_SUCCESS } from "../action";

const UserReducer = (state = {users:[]}, action) => {
  
    switch (action.type) {
      case GET_USERS_SUCCESS:
        return { ...state,users:action.users};

      case DELETE_USER_SUCCESS:   
        const newUsers=[...state.users]
        const list=newUsers.filter(u=>u.id!==action.id)
        return { 
         ...state,users:list
         };
      default:
        return state;
    }
  };
  export default UserReducer;
