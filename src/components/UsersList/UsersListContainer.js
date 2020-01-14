import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getItems } from "../../redux/users/usersSelectors";
import * as UsersOperation from "../../redux/users/usersOperations";
// import Controls from "../Controls/Controls";

class UsersListContainer extends Component {
  state = {
    currentPage: null,
    pageCount: null,
    user: ""
  };

  async componentDidMount() {
    const { getUsers } = this.props;
    await getUsers();
    const baseUrl = "https://tested-23ea6.firebaseio.com/users.json";
    const users = await axios.get(baseUrl);
    let pageCount = parseInt(users.data.length / 5);

    const changeUser = () => {
      setInterval(() => {
        function getRandomIntInclusive(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let i = getRandomIntInclusive(0, users.data.length - 1);
        this.setState({
          user: `${users.data[i].name} ${users.data[i].surname}`
        });
      }, 8000);
    };
    changeUser();
    this.setState({
      currentPage: 1,
      pageCount,
      user: `${users.data[0].name} ${users.data[0].surname}`
    });
  }

  componentDidUpdate() {
    // const startingPage = this.props.startingPage ? this.props.startingPage : 1;
    const data = this.props.users;
    const pageSize = this.props.pageSize;

    if (data.length % pageSize > 0) {
      this.setState.pageCount++;
    }
  }

  setCurrentPage(num) {
    this.setState({ currentPage: num });
  }

  createControls() {
    let controls = [];
    const pageCount = this.state.pageCount;
    for (let i = 1; i <= pageCount; i++) {
      const baseClassName = "pagination-controls__button";
      const activeClassName =
        i === this.state.currentPage ? `${baseClassName}--active` : "";
      controls.push(
        <div
          key={i}
          className={`${baseClassName} ${activeClassName}`}
          onClick={() => this.setCurrentPage(i)}
        >
          {i}
        </div>
      );
    }
    return controls;
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
    const { user } = this.state;
    return (
      <div className="pagination">
        <div className="pagination-controls">
          {/* <Controls
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={this.setCurrentPage}
          /> */}
          {this.createControls()}
        </div>
        <div className="pagination-results">
          {React.cloneElement(this.props.children, {
            data: this.createPaginatedData(),
            user: user
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
