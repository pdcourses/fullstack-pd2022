import { put } from "redux-saga/effects";
import {
  getHeroesRequest,
  getHeroesSuccess,
  getHeroesError,
  deleteHeroRequest,
  deleteHeroSuccess,
  deleteHeroError,
} from "../actions/actionCreators";
import * as api from './../api';

export function * getHeroesSaga(){
    yield put(getHeroesRequest());
    try{
        const{
            data: {data}
        } = yield api.getHeroes();
        //console.log('heroes:',data);
        yield put(getHeroesSuccess(data));
    } catch(err){
       yield put(getHeroesError(err));
    }
}

export function * deleteHeroSaga({id}){
    yield put(deleteHeroRequest());
    try{
        yield api.deleteHero(id);
        yield put(deleteHeroSuccess(id));
    } catch(err){
       yield put(deleteHeroError(err));
    }
}
