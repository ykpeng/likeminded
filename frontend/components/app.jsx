const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const LoginForm = require('../components/login_form');

const App = React.createClass({
  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(e){
    e.preventDefault();
    SessionActions.logout();
  },

  _goToProfile(e){
    hashHistory.push("users" + SessionStore.currentUser().id)
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  render(){
    if (!SessionStore.isUserLoggedIn()) {
      return (
        <div>
          <header className="header">
            <LoginForm />
          </header>

          {this.props.children}
        </div>
      )
    } else {
    const currentUser = SessionStore.currentUser();
    let url = "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467682125/default-profile-photo_w9qswu.png";
    if (currentUser.img_url) {
      url = currentUser.img_url;
    }
      return (
        <div>
          <header className="header">
            <ul className="header-list1">
              <li className="icon"><i className="fa fa-sliders" aria-hidden="true"></i></li>
              <li><Link to="/" className="link">Browse Matches</Link></li>
              <li><Link to="/test" className="link">Personality Test</Link></li>
            </ul>

            <ul className="header-list2">
              <li>
                <Link to={`/users/${currentUser.id}`}><div className="user-icon"><img src={url} alt={currentUser.username}/></div>
                </Link>
              </li>

              <li >
                <Link to="/" className="icon"><i className="fa fa-bookmark-o" aria-hidden="true"></i>
                </Link>
              </li>

              <li >
                <Link to="/conversations" className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i>
                </Link>
              </li>

              <li>
                <button onClick={ this._handleLogOut } className="icon"><i className="fa fa-sign-out" aria-hidden="true"></i>
                </button>
              </li>
            </ul>
          </header>

          {this.props.children}
        </div>
      )
    }
  }
});

module.exports = App;
