import React from 'react';
import Card from './components/Card';

function createCard(contact) {
    return <Card
      key={contact.id} // Special Key for React
      id={contact.id} 
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  };

export default createCard;