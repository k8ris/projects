import React from 'react';
import Name from './Name';
import Address from './Address';
import Company from './Company';
import UsersService from '../services/UsersService';
import {Link} from 'react-router-dom';

class AuthorsInfo extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      userInfo: {
        address: {},
        company: {},
      },
    };
  }

  componentDidMount () {
    const userId = this.props.match.params.id;
    UsersService.getUser (userId).then (user =>
      this.setState ({userInfo: user})
    );
  }
  render () {
    return (
      <div className="container">
        <h1>Single Author</h1>
        <Link to="/authors"> All authors</Link>
        <Name
          name={this.state.userInfo.name}
          username={this.state.userInfo.username}
          email={this.state.userInfo.email}
          phone={this.state.userInfo.phone}
        />
        <Address
          street={this.state.userInfo.address.street}
          city={this.state.userInfo.address.city}
          zipcode={this.state.userInfo.address.zipcode}
        />
        <Company
          name={this.state.userInfo.company.name}
          catchPhrase={this.state.userInfo.company.catchPhrase}
        />
      </div>
    );
  }
}
export default AuthorsInfo;
