import React from "react";
import UsersListContainer from "./UsersList/UsersListContainer";
import UsersList from "./UsersList/UsersList";
import Controls from "./Controls/Controls";

// const App = () => {
//   return (
//     <>
//       <UsersList />
//     </>
//   );
// };

class App extends React.Component {
  render() {
    return (
      <>
        <UsersListContainer>
          <UsersList />
        </UsersListContainer>
        <Controls />
      </>
    );
  }
}

export default App;
