import {put,takeEvery, takeLatest} from "redux-saga/effects";
import { GET_USERS_SUCCESS,GET_USERS_FETCH,DELETE_USER_SUCCESS,GET_ID_SUCCESS } from "./action";
import axios from "axios";


function* workGetUsersFetch(){
    const users=yield axios.get("https://jsonplaceholder.typicode.com/users");
    yield put({type:GET_USERS_SUCCESS,users:users.data})
}
function* workDeleteUsersFetch(action){
    const users=yield axios.delete("https://jsonplaceholder.typicode.com/users/"+action.payload);
    yield put({type:DELETE_USER_SUCCESS,id:action.payload})
}
function* mySaga(){
    yield takeEvery(GET_USERS_FETCH,workGetUsersFetch);
    yield takeLatest(GET_ID_SUCCESS,workDeleteUsersFetch);
}
export default mySaga;