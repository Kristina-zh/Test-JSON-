import React from "react";
import PropTypes from "prop-types";
import s from "./UsersList.module.css";
import User from "../User/User";

const UsersList = ({ users, user }) => {
  return (
    <div className={s.div}>
      <ul className={s.list}>
        {users.map(el => (
          <li key={el.id}>
            <p>{`${el.name} ${el.surname}`}</p>
          </li>
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
