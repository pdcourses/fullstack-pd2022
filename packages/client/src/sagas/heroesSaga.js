import { put } from "redux-saga/effects";
import {
  getHeroesRequest,
  getHeroesSuccess,
  getHeroesError,
} from "../actions/actionCreators";
import * as api from './../api';

export function * getHeroesSaga(){
    yield put(getHeroesRequest());
    try{
        const{
            data: {data}
        } = yield api.getHeroes();
        yield put(getHeroesSuccess(data));
    } catch(err){
       yield put(getHeroesError(err));
    }
}
