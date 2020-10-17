import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@App/MY_FUNC_REQUEST':
      return produce(state, (draft) => {});
    case '@App/MY_FUNC_SUCCESS':
      return produce(state, (draft) => {});
    default:
      return state;
  }
}
