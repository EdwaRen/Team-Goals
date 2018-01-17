import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider} from 'react-redux';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import {firebaseApp} from './firebase';
import { logUser} from './actions';
import reducer from './reducers';


import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

const store = createStore(reducer);


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log('user has signed in or up', user);
    const { email} = user;
    store.dispatch(logUser(email));
    hashHistory.push('/app');

  } else {
    // console.log ('user signed out or needs to sign in');
    hashHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store = {store}>
    <Router path = "/" history = {hashHistory}>
    <Route path = "/app" component = {App} />
    <Route path = "/signin" component = {SignIn} />
    <Route path = "/signup" component = {SignUp} />
    <Route path = "/privacy" component = {Privacy} />
    <Route path = "/terms" component = {Terms} />




  </Router>
</Provider>, document.getElementById('root')



)
