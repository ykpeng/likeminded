const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return { username: "", password: "" };
  },

  _handleUsername(e){
    this.setState({ username: e.target.value });
  },

  _handlePassword(e){
    this.setState({ password: e.target.value });
  },

  _handleSubmit(e){
    e.preventDefault();

    // const formData = {
		// 	username: this.state.username,
		// 	password: this.state.password
		// };

    SessionActions.login(this.state);
  },

  componentDidMount(){
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this))
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount(){
    this.sessionListener.remove();
    this.errorListener.remove();
  },

  redirectIfLoggedIn(){
    if (SessionStore.isUserLoggedIn()){
      this.context.router.push("/");
    }
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("login");

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  render(){
    return(
      <div>
      { this.fieldErrors("base") }
        <form onSubmit={this._handleSubmit}>
          <label>Username</label>
          { this.fieldErrors("username") }
          <input type="text" onChange={this._handleUsername}/>
          <br/>
          <label>Password</label>
          { this.fieldErrors("password") }
          <input type="password" onChange={this._handlePassword}/>
          <br/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    )
  }
});

module.exports = LoginForm;
