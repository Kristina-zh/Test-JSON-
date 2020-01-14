import React from "react";
import PropTypes from "prop-types";
import User from "../User/User";

const UsersList = ({ data, user }) => {
  return (
    <div className="example">
      <ul className="example-list">
        {data.map(el => (
          <li className="example" key={el.id}>
            <p>{`${el.id} ${el.name} ${el.surname}`}</p>
          </li>
        ))}
      </ul>
      <User user={user} />
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({}))
};

export default UsersList;
