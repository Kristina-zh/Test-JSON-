import React from "react";
import PropTypes from "prop-types";
import User from "../User/User";

const UsersList = ({ data, user }) => {
  return (
    <div className="example">
      <ul className="example-list">
        {data.map(el => (
          <div className="example">
            <li key={el.id}>
              <p>{`${el.id} ${el.name} ${el.surname}`}</p>
            </li>
          </div>
        ))}
      </ul>
      <User user={user} />
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default UsersList;
