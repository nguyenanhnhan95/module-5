export const GET_USERS_FETCH="GET_UERS_FETCH";
export const DELETE_USER_SUCCESS="DELETE_USER_SUCCESS";
export const GET_USERS_SUCCESS="GET_USERS_SUCCESS";
export const GET_ID_SUCCESS="GET_ID_SUCCESS";
export const getUsersFetch=()=>({
    type:GET_USERS_FETCH
})
export const deleteUsersFetch=(id)=> ({
    type:GET_ID_SUCCESS,
    payload :id,
    })
