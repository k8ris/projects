import React from 'react';
import {Link} from 'react-router-dom';
const AuthorsLink = props => {
  return props.users.map (user => {
    return (
      <div className="titleBlog col-8 offset-2 authorsList">
        <h4><Link to={`/users/${user.id}`} key={user.id}>{user.name}</Link></h4>
      </div>
    );
  });
};
export default AuthorsLink;
