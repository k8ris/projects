import React from 'react';
const Name = props => {
  return (
    <div className="row">
      <div className="col-12">
        <h3>{props.name}</h3>
        <p>{`username: ${props.username}`}</p>
        <p>username: {props.username}</p>
        <p>{`email: ${props.email}`}</p>
        <p>{`phone: ${props.phone}`}</p>
      </div>
    </div>
  );
};
export default Name;
