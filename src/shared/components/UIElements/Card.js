import React from 'react';

import './Card.css';

const Card = props => {
  let {className, style} = props
  return (
    <div className={`card ${className}`} style={style}>
      {props.children}
    </div>
  );
};

export default Card;
