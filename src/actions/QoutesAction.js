import {createAction} from 'redux-actions'

export const REQUEST_QOUTES = 'REQUEST_QOUTES'
export const GET_QOUTES = 'GET_QOUTES'
export const LOADER = 'LOADER'
export const SETLOADER = 'SETLOADER'



export const requestQoutes = createAction(REQUEST_QOUTES);
export const getQoutes = createAction(GET_QOUTES);
export const setLoader = createAction(SETLOADER);
export const loader = createAction(LOADER);
