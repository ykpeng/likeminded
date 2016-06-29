const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const SessionApiUtil = require('./util/session_api_util');
const SessionActions = require('./actions/session_actions');
const SessionStore = require('./stores/session_store');
const LoginPage = require('./components/login_page');
const App = require('./components/app');
const UserIndex = require('./components/user_index');
const UserShow = require('./components/user_show');

const _ensureLoggedIn = function(nextState, replace){
  if (!SessionStore.isUserLoggedIn()){
    replace("/login");
  }
};

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/users' component={UserIndex}/>
      <Route path='/users/:userId' component={UserShow}/>
    </Route>
    <Route path="/login" component={LoginPage}/>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render(router, document.getElementById('content'));
});
