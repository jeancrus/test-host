import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';
import { finishLoading, getPaymentSuccess } from './actions';

function* myFunc() {
  try {
    const { data } = yield call(api);
    const myPlans = Object.values(data?.shared?.products)
      .map((item) => item)
      ?.filter(
        (item) =>
          item.name === 'Plano P' ||
          item.name === 'Plano M' ||
          item.name === 'Plano Turbo'
      );
    yield put(getPaymentSuccess(myPlans));
  } catch (error) {
  } finally {
    yield put(finishLoading());
  }
}

export default all([takeLatest('@app/GET_PAYMENT_VALUE_REQUEST', myFunc)]);
