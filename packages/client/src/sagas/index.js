import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionTypes";
import { getHeroesSaga } from "./heroesSaga";

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_HEROES_ACTION, 
    getHeroesSaga);
}

export default rootSaga;
