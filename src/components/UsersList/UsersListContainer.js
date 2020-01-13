import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../redux/users/usersSelectors';
import UsersList from './UsersList';
import * as UsersOperation from '../../redux/users/usersOperations';

class UsersListContainer extends Component {
  state = {};

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { users } = this.props;
    return <UsersList users={users} />;
  }
}

const mapStateToProps = store => ({
  users: getItems(store),
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(UsersOperation.getUsersOperation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);