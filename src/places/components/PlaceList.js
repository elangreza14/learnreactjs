import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";
import Button from "../../shared/components/FormElements/Button";
const PlaceList = (props) => {
  let { items } = props;
  if (items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found. Maybe Create One</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem key={place.id} item={place} />
      ))}
    </ul>
  );
};

export default PlaceList;
