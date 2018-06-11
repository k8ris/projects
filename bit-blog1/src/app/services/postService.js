import {postUrl} from '../shared/constants';
import Post from '../entities/Post';

class PostService {
  getPosts = () => {
    let url = `${postUrl}posts`;

    return fetch (url).then (response => response.json ()).then (data => {
      return data.map (post => {
        return new Post (post.id, post.userId, post.title, post.body);
      });
    });
  };

  getUserPosts = userId => {
    let url = `${postUrl}posts?userId=${userId}`;

    return fetch (url).then (response => response.json ()).then (posts => {
      return posts.map (post => {
        return new Post (post.id, post.userId, post.title, post.body);
      });
    });
  };

  getPost = id => {
    return fetch (postUrl + 'posts/' + id)
      .then (response => response.json ())
      .then (post => {
        return new Post (post.id, post.userId, post.title, post.body);
      });
  };
}
export default new PostService ();
