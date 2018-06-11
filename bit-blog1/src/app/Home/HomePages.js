import React from 'react';
import PostService from '../services/postService';
import PostsList from './PostsList';
class HomePages extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount () {
    PostService.getPosts ().then (posts => {
      this.setState ({posts: posts});
    });
  }

  render () {
    return (
      <div className="container">
        <h2>POSTS</h2>
        <PostsList posts={this.state.posts} />
      </div>
    );
  }
}

export default HomePages;
