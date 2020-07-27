import React from "react";

const Avatar = (props) => {
  let { className, style, image, alt, width } = props;
  return (
    <div className={`avatar img`} style={style}>
      <img src={image} alt={alt} style={{ width: width, height: width }} />
    </div>
  );
};

export default Avatar;
   