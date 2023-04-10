import './InfoPopup.css';

import React from 'react';

function InfoPopup({ message, isSuccess }) {

  return (
    <div className="info" style={isSuccess ? {backgroundColor: 'green'} : null}>
      <p className="info__massage">{message}</p>
    </div>
  );
}

export default InfoPopup;
