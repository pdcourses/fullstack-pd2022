import { put } from "redux-saga/effects";
import {
  getPowersRequest,
  getPowersSuccess,
  getPowersError,
} from "../actions/actionCreators";
import * as api from '../api';

export function * getPowersSaga(){
    yield put(getPowersRequest());
    try{
        const{
            data: {data}
        } = yield api.getPowers();
        //console.log('powers', data);
        yield put(getPowersSuccess(data));
    } catch(err){
       yield put(getPowersError(err));
    }
}
