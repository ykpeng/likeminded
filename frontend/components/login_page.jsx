const React = require('react');
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const LoginPage = React.createClass({

  render(){
    return(
      <div className="login-section">
        <LoginForm />
        <SignupForm />
      </div>
    )
  }
})

module.exports = LoginPage;
