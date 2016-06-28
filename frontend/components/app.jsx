const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(e){
    e.preventDefault();
    SessionActions.logout();
  },

  greeting() {
  if (SessionStore.isUserLoggedIn()) {
    return (
      <hgroup>
        <h2>Hi, {SessionStore.currentUser().username}!</h2>
        <input type="submit" value="logout" onClick={ this._handleLogOut } />
      </hgroup>
    );
  }
},
  render(){
    return (
      <div>
        <header>
          <Link to="/"><h1>LikeMinded</h1></Link>
          { this.greeting() }
        </header>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
