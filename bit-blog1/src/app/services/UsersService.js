import {postUrl} from '../shared/constants';
import Users from '../entities/Users';

class UsersService {
  getUsers = () => {
    return fetch (postUrl + 'users')
      .then (response => response.json ())
      .then (data => {
        return data.map (user => {
          return new Users (user.name, user.id);
        });
      });
  };
  getUser = id => {
    return fetch (`${postUrl}users/${id}`)
      .then (response => response.json ())
      .then (user => {
        return new Users (
          user.name,
          user.id,
          user.username,
          user.email,
          user.phone,
          user.address,
          user.company
        );
      });
  };
}
export default new UsersService ();
