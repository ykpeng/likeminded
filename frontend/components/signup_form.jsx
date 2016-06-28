const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const SignupForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return { username: "", password: "", email: "", zipcode: "", birthday: "" };
  },

  _handleUsername(e){
    this.setState({ username: e.target.value });
  },

  _handlePassword(e){
    this.setState({ password: e.target.value });
  },

  _handleEmail(e){
    this.setState({ email: e.target.value });
  },

  _handleZipcode(e){
    this.setState({ zipcode: e.target.value });
  },

  _handleBirthday(e){
    this.setState({ birthday: e.target.value });
  },

  _handleSubmit(e){
    e.preventDefault();

    const formData = {
			username: this.state.username,
			password: this.state.password
		};

    SessionActions.signup(this.state);
    // SessionActions.login(formData);
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
    const errors = ErrorStore.formErrors("signup");
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
          <label>Email</label>
          { this.fieldErrors("email") }
          <input type="text" onChange={this._handleEmail}/>
          <br/>

          <label>Username</label>
          { this.fieldErrors("username") }
          <input type="text" onChange={this._handleUsername}/>
          <br/>

          <label>Password</label>
          { this.fieldErrors("password") }
          <input type="password" onChange={this._handlePassword}/>
          <br/>

          <label>Birthday</label>
          { this.fieldErrors("birthday") }
          <input type="date" onChange={this._handleBirthday}/>
          <br/>

          <label>Zipcode</label>
          { this.fieldErrors("zipcode") }
          <input type="text" onChange={this._handleZipcode}/>
          <br/>

          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    )
  }
});

module.exports = SignupForm;
