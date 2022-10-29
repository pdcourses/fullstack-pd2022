import { put } from "redux-saga/effects";
import {
  getHeroesRequest,
  getHeroesSuccess,
  getHeroesError,
} from "../actions/actionCreators";
import * as api from './../api';

export function * getHeroesSaga(){
    console.log('I am in hero saga');
    yield put(getHeroesRequest());
    try{
        const{
            data: {data}
        } = yield api.getHeroes();
        yield put(getHeroesSuccess(data));
        console.log('answer:', data);
    } catch(err){
        put(getHeroesError(err));
    }
}
