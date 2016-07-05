const React = require('react');
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const LoginPage = React.createClass({

  render(){
    return(
      <main className="content">
        <section className="signup-section">
          <figure className="logo-large"></figure>
          <h1>LikeMinded</h1>
          <h2>Discover people</h2>
          <h2>who share your interest profile</h2>
          <SignupForm />
        </section>
      </main>
    )
  }
})

module.exports = LoginPage;
