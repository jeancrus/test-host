import { call, select, put, all, takeLatest } from 'redux-saga/effects';

function* myFunc({ id, amount }) {}

export default all([takeLatest('@app/MY_FUNC_REQUEST', myFunc)]);
