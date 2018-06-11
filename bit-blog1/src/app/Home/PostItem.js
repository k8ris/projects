import React from 'react';
import {Link} from 'react-router-dom';
const PostItem = props => {
  return (
    <div className="titleBlog col-12">
      <h3><Link to={'/post/' + props.id}>{props.title}</Link></h3>
      <p>
        {props.body}
      </p>
    </div>
  );
};
export default PostItem;
