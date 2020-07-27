import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
  let { item } = props;
  if (item.length === 0) {
    return (
      <div className="center">
        <h2>No Users Found.</h2>
      </div>
    );
  }
  return (
    <ul className="user-list">
      {item.map((x) => (
        <UserItem key={x.id} item={x} />
      ))}
    </ul>
  );
};

export default UserList;
