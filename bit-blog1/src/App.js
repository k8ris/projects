import React, {Component} from 'react';
import './App.css';
import Header from './app/partials/Header';
import Footer from './app/partials/Footer';
import HomePages from './app/Home/HomePages';
import SinglePostTitle from './app/HomeSinglePost/SinglePostTitle';
import {Switch, Route} from 'react-router-dom';
import Authors from './app/Authors/Authors';
import About from './app/About/About';
import AuthorsInfo from './app/AuthorsInfo/AuthorsInfo';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePages} />
          <Route path="/post/:id" component={SinglePostTitle} />
          <Route path="/Authors" component={Authors} />
          <Route path="/About" component={About} />
          <Route path="/users/:id" component={AuthorsInfo} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
