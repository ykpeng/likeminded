const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions');
const GoogleMapsApiUtil = require('../util/google_maps_api_util');

const SignupForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return { username: "",
             password: "",
             email: "",
             zipcode: "",
             birthday: "",
             looking_for: "Friendship" };
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

  _handleLookingFor(e) {
    this.setState({ looking_for: e.target.value });
  },

  _handleSubmit(e){
    e.preventDefault();
    GoogleMapsApiUtil.fetchLocation(this.state, SessionActions.signup)
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
    const errors = ErrorStore.formErrors("signup");
    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul className="errors">{ messages }</ul>;
  },

  render(){
    return(
      <div className="signup-form">
      { this.fieldErrors("base") }
        <form onSubmit={this._handleSubmit}>

          <div className="input">
            { this.fieldErrors("username") }
            <input type="text" placeholder="Choose a Username" onChange={this._handleUsername}/>
          </div>

          <div className="input">
            { this.fieldErrors("password") }
            <input type="password" placeholder="Password"  onChange={this._handlePassword}/>
          </div>

          <div className="input">
            { this.fieldErrors("email") }
            <input type="email" placeholder="Email" onChange={this._handleEmail}/>
          </div>

          <div className="input">
            { this.fieldErrors("zipcode") }
            <input type="text" placeholder="Zipcode" onChange={this._handleZipcode}/>
          </div>

          <div className="input">
            <label htmlFor="birthday">Birthday</label>
            { this.fieldErrors("birthday") }
            <input type="date" onChange={this._handleBirthday} id="birthday"/>
          </div>

          <div className="input">
            <label>I am looking for</label>
            <select value={this.state.looking_for} onChange={this._handleLookingFor}>
              <option value="Friendship">Friendship</option>
              <option value="Collaboration">Collaboration</option>
            </select>

          </div>

          <div className="submit">
            <input type="submit" value="SIGN UP"/>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SignupForm;
