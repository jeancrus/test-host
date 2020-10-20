export function getPaymentRequest(id) {
  return {
    type: '@app/GET_PAYMENT_VALUE_REQUEST',
    id,
  };
}
export function getPaymentSuccess(data) {
  return {
    type: '@app/GET_PAYMENT_VALUE_SUCCESS',

    payload: { data },
  };
}

export function finishLoading() {
  return {
    type: '@app/FINISH_LOADING',
  };
}
