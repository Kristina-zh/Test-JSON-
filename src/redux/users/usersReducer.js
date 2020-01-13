import { combineReducers } from "redux";
import types from "../types";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.SUCCESS_GET_USERS:
      return [...payload.users];

    case types.ERROR_GET_USERS:
      return [];

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.ERROR_GET_USERS:
      return payload.error;

    case types.SUCCESS_GET_USERS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  error: errorReducer
});
