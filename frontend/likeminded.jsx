const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const IndexRedirect = ReactRouter.IndexRedirect;
const hashHistory = ReactRouter.hashHistory;

const SessionApiUtil = require('./util/session_api_util');
const SessionActions = require('./actions/session_actions');
const SessionStore = require('./stores/session_store');
const LoginPage = require('./components/login_page');
const App = require('./components/app');
const UserIndex = require('./components/user_index');
const UserShow = require('./components/user_show');
const QuestionIndex = require('./components/question_index');
const ConversationIndex = require('./components/conversation_index');

const _ensureLoggedIn = function(nextState, replace){
  if (!SessionStore.isUserLoggedIn()){
    replace("/login");
  }
};

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={UserIndex} onEnter={_ensureLoggedIn}/>
      <Route path="/login" component={LoginPage}/>
      <Route path='/users/:userId' component={UserShow} onEnter={_ensureLoggedIn}/>
      <Route path="/test" component={QuestionIndex} onEnter={_ensureLoggedIn}/>
      <Route path='/conversations' component={ConversationIndex}/>

    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render(router, document.getElementById('content'));
});
