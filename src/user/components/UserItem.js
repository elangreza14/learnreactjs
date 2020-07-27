import React from "react";
import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";

const UserItem = (props) => {
  let { name, image, places } = props.item;
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <Avatar image={image} alt={name} width={100} className={name} />
        </div>
        <div className="user-item__info">
          <h2>{name}</h2>
          <h3>
            {places} {places < 2 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
