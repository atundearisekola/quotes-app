import {call,takeLatest,put} from 'redux-saga/effects'

import{
getQoutesApi,

}from '../api/qoutesApi';



import{
    REQUEST_QOUTES,
    
   

    getQoutes,
      
}from '../actions/QoutesAction';





function* requstQoute(){
  var  qoutes = yield call(getQoutesApi);
  yield put(getQoutes(qoutes));


}

export function* qoutesWatcher(){
    yield takeLatest(REQUEST_QOUTES,requstQoute)
}

