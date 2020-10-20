import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  values: [],
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@app/GET_PAYMENT_VALUE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@app/GET_PAYMENT_VALUE_SUCCESS': {
        draft.loading = false;
        draft.values = action?.payload?.data;

        break;
      }

      case '@app/FINISH_LOADING':
        draft.loading = false;
        break;

      default:
        return state;
    }
  });
}
