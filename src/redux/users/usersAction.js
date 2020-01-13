import types from "../types";

// get users
export const startGetUsersAction = () => ({
  type: types.START_GET_USERS
});
export const successGetUsersAction = array => ({
  type: types.SUCCESS_GET_USERS,
  payload: {
    users: array
  }
});
export const errorGetUsersAction = err => ({
  type: types.ERROR_GET_USERS,
  payload: {
    error: err
  }
});
