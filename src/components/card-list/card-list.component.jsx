import React from 'react';
import '../card-list/card-list.style.css';

import { Card } from '../card/card.component';
export const Cardlist = (props) => (
  <div className="card-list">
    {props.users.map((user, i) => {
      return <Card key={i} user={user}></Card>;
    })}
  </div>
);
