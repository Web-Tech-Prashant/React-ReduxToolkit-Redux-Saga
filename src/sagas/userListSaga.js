import { call, put,takeLatest} from "redux-saga/effects";
import axios from "axios";
import { getUserListError, getUserListSuccess } from "../reduxStore/slices/getUserSlice";

function* getUserSaga(action){

    try{
            let response = yield axios.get("https://jsonplaceholder.typicode.com/users");
            yield put(getUserListSuccess(response.data));
    }   
    catch(err){
        yield put(getUserListError(err));
    }
}


export default function* watchGetUser(){
    yield takeLatest("userlist/fetchUserList",getUserSaga)
}
