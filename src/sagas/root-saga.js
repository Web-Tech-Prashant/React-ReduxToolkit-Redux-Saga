import {all,fork} from "redux-saga/effects";
import watchGetUser from "./userListSaga";

// function* rootSaga(){

// }

const rootSaga = function* (){
    yield all([fork(watchGetUser),])
}

export default rootSaga;


