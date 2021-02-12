import React from 'react';

import './search-list.style.css';

export const Search = ({ placeholder, handleChange }) => (
  <input type="search" className="search" placeholder={placeholder} onChange={handleChange} />
);
