import React from 'react';
import {Link} from 'react-router-dom';
const AuthorInformation = props => {
  return props.users.map (user => {
    return <p>{props.name}</p>;
  });
};
export default AuthorInformation;
