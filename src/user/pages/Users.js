import React from "react";
import UserList from "../components/UserList";

const item = [
  {
    id: 1,
    name: "google",
    image:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    places: 3,
  },
  {
    id: 2,
    name: "youtube",
    image:
      "https://cdn.akurat.co/images/uploads/images/akurat_20200407102044_8686AU.jpg",
    places: 1,
  },
  {
    id: 3,
    name: "facebook",
    image: "https://www.facebook.com/images/fb_icon_325x325.png",
    places: 5,
  },
];

const Users = () => {
  return <UserList item={item} />;
};

export default Users;
