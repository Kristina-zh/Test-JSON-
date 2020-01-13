import {
  startGetUsersAction,
  successGetUsersAction,
  errorGetUsersAction
} from "./usersAction";
import * as API from "../../services/api";

export const getUsersOperation = () => dispatch => {
  dispatch(startGetUsersAction());

  API.getUsers()
    .then(res => dispatch(successGetUsersAction(res.data)))
    .catch(err => dispatch(errorGetUsersAction(err)));
};
