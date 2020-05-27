import { fork, all} from 'redux-saga/effects';
import * as appSaga from './appSaga';



export function* rootSaga(){
    yield all([
        ...Object.values(appSaga)
    ].map(fork))
}