import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button/Button";
import "./PlaceItem.css";
import Modal from "../../shared/components/UIElements/Modal";
const PlaceItem = (props) => {
  let { image, title, address, description, id } = props.item;
  const [show, setShow] = useState(false);
  const openHandler = () => setShow(true);
  const closeHandler = () => setShow(false);

  return (
    <React.Fragment>
      <Modal
        show={show}
        onCancel={closeHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>THE MAP!!!!!</h2>
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={image} alt={title}></img>
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`edit/places/${id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
