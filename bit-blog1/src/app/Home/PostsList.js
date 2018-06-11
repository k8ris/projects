import React from 'react';
import PostItem from './PostItem';

const PostsList = props => {
  return props.posts.map (post => {
    return (
      <PostItem
        title={post.title}
        body={post.body}
        id={post.id}
        userId={post.id}
        key={post.userId}
      />
    );
  });
};
export default PostsList;
