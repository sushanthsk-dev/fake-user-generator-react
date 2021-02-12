import React from 'react';

import './card.style.css';

export const Card = (props) => (
  <div className="card">
    <img src={props.user.picture.large} alt={props.user.name.first} />
    <h3>{`${props.user.name.title}  ${props.user.name.first}  ${props.user.name.last}`}</h3>
  </div>
);
