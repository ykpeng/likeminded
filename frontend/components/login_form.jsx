const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions');

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
    SessionActions.login(this.state);
  },

  _handleDemo(e){
    e.preventDefault()
    const formData = { username: "amysmith", password: "password"}
    SessionActions.login(formData);
  },

  componentDidMount(){
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this))
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount(){
    setTimeout(ErrorActions.clearErrors, 0);
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

    return <ul className="errors">{ messages }</ul>;
  },

  render(){
    return(
      <div className="login-form">
      { this.fieldErrors("base") }
        <form onSubmit={this._handleSubmit} className="form">
          <div className="form-section">
            { this.fieldErrors("username") }
            <input type="text" placeholder="Username" id="username" onChange={this._handleUsername}/>
          </div>
          <div className="form-section">
            { this.fieldErrors("password") }
            <input type="password" placeholder="Password" onChange={this._handlePassword}/>
          </div>
          <div className="submit form-section">
            <input type="submit" value="LOG IN"/>
          </div>
          <div className="submit form-section">
            <button onClick={this._handleDemo}>DEMO USER</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = LoginForm;
