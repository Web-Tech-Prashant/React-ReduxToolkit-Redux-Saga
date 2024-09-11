import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import rootReducers from "./root-reducer";
import rootSaga from "./../sagas/root-saga";
import {logger} from "redux-logger";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:rootReducers,
    middleware: ()=>[sagaMiddleware,logger]
});


// added addition line for root saga setup
sagaMiddleware.run(rootSaga);

export default store;