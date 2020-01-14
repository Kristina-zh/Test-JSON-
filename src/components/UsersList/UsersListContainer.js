import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../../redux/users/usersSelectors";
import UsersList from "./UsersList";
import * as UsersOperation from "../../redux/users/usersOperations";

class UsersListContainer extends Component {
  state = {
    user: ""
  };

  componentDidMount() {
    const { getUsers, users } = this.props;
    getUsers();
    // this.interval = setInterval(() => this.setState({ user: users[0] }), 1000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  // getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }

  render() {
    const { users } = this.props;
    const { user } = this.state;
    const first = users[0];
    console.log("user :", user);
    console.log("users :", first);
    return <UsersList users={users} user={user} />;
  }
}

const mapStateToProps = store => ({
  users: getItems(store)
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(UsersOperation.getUsersOperation())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
