import React from "react";
import UsersListContainer from "./UsersList/UsersListContainer";
import UsersList from "./UsersList/UsersList";

class App extends React.Component {
  render() {
    return (
      <>
        <UsersListContainer>
          <UsersList />
        </UsersListContainer>
      </>
    );
  }
}

export default App;
