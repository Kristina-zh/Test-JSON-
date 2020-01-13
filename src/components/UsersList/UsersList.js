import React from "react";
import PropTypes from "prop-types";
import s from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <ul className={s.list}>
      {users.map(el => (
        <li key={el.id}>
          <p>{`${el.name} ${el.surname}`}</p>
        </li>
      ))}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default UsersList;
