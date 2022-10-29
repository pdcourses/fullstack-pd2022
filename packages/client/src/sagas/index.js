import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionTypes";
import { getHeroesSaga } from "./heroesSaga";
import {getPowersSaga} from './powersSaga'

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_HEROES_ACTION, 
    getHeroesSaga);
  yield takeLatest(ACTION_TYPES.GET_POWERS_ACTION, 
    getPowersSaga);
}

export default rootSaga;
