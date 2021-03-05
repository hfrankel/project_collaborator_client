import React from 'react';
import './PrimaryHeader.css';

const PrimaryHeader = ({ children }) => {
  return <h1 className="header--primary">{children}</h1>;
};

export default PrimaryHeader;
