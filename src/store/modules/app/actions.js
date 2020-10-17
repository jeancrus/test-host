export function myFuncRequest(id) {
  return {
    type: '@app/MY_FUNC_REQUEST',
    id,
  };
}
export function myFuncSuccess(id) {
  return {
    type: '@app/MY_FUNC_SUCCESS',
    id,
  };
}
