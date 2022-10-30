import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionTypes";
import { getHeroesSaga, deleteHeroSaga, createHeroSaga} from "./heroesSaga";
import {getPowersSaga} from './powersSaga'

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_HEROES_ACTION, 
    getHeroesSaga);
  yield takeLatest(ACTION_TYPES.GET_POWERS_ACTION, 
    getPowersSaga);
  yield takeLatest(ACTION_TYPES.DELETE_HERO_ACTION, 
    deleteHeroSaga);
  yield takeLatest(ACTION_TYPES.CREATE_HERO_ACTION, 
    createHeroSaga);
}

export default rootSaga;
