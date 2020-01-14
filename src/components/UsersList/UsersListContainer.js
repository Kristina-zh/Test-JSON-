import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getItems } from "../../redux/users/usersSelectors";
import * as UsersOperation from "../../redux/users/usersOperations";
import Controls from "../Controls/Controls";

class UsersListContainer extends Component {
  // state = {
  //   currentPage: null,
  //   pageCount: null,
  // };
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentPage: null,
      pageCount: 0
    };
  }

  // componentDidMount() {
  //   const { getUsers } = this.props;
  //   // getUsers();
  //   // this.interval = setInterval(() => this.setState({ user: users[0] }), 1000);
  // }

  async componentWillMount() {
    const { getUsers } = this.props;
    await getUsers();
    const baseUrl = "https://tested-23ea6.firebaseio.com/users.json";
    const users = await axios.get(baseUrl);
    let pageCount = parseInt(users.data.length / 5);
    this.setState({
      currentPage: 1,
      pageCount
    });
  }

  componentDidUpdate() {
    const startingPage = this.props.startingPage ? this.props.startingPage : 1;
    const data = this.props.users;
    const pageSize = this.props.pageSize;

    if (data.length % pageSize > 0) {
      this.state.pageCount++;
    }
  }

  setCurrentPage(num) {
    this.setState({ currentPage: num });
  }

  createPaginatedData() {
    const { users } = this.props;
    const data = users;
    const pageSize = this.props.pageSize;
    const currentPage = this.state.currentPage;
    const upperLimit = currentPage * pageSize;
    const dataSlice = data.slice(upperLimit - pageSize, upperLimit);
    return dataSlice;
  }

  render() {
    const { pageCount, currentPage } = this.state;
    return (
      <div className="pagination">
        <div className="pagination-controls">
          <Controls
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={this.setCurrentPage}
          />
        </div>
        <div className="pagination-results">
          {React.cloneElement(this.props.children, {
            data: this.createPaginatedData()
          })}
        </div>
      </div>
    );
  }
}

// UsersListContainer.propTypes = {
//   data: React.PropTypes.array.isRequired,
//   pageSize: React.PropTypes.number.isRequired,
//   startingPage: React.PropTypes.number.isRequired
// };

UsersListContainer.defaultProps = {
  pageSize: 5,
  startingPage: 1
};

const mapStateToProps = store => ({
  users: getItems(store)
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(UsersOperation.getUsersOperation())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
