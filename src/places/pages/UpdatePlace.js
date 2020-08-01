import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./NewPlace.css";
import Card from "../../shared/components/UIElements/Card";

const DUMMY_PLACES = [
  {
    id: 1,
    title: "Gunung Lawu",
    image:
      "data:image/jpeg;base64,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",
    address: "Gunung di jawa tengah",
    description:
      "Mount Lawu, or Gunung Lawu, is a massive compound stratovolcano straddling the border between East Java and Central Java, Indonesia.",
    location: {
      lat: -7.6274785,
      lng: 111.1854118,
    },
    creator_id: 1,
  },
  {
    id: 2,
    title: "Gunung Gede",
    image:
      "data:image/jpeg;base64,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",
    address: "Gunung di indonesia",
    description:
      "Mount Gede or Gunung Gede is a stratovolcano in West Java, Indonesia.",
    location: {
      lat: -6.7877563,
      lng: 106.9731896,
    },
    creator_id: 2,
  },
  {
    id: 3,
    title: "Gunung Pangrango",
    image:
      "data:image/jpeg;base64,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",
    address: "Gunung di jawa",
    description:
      "Mount Pangrango is a dormant stratovolcano located in the Sunda Arc of West Java, Indonesia.",
    location: {
      lat: -6.7699996,
      lng: 106.9461015,
    },
    creator_id: 3,
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === parseInt(placeId));

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;