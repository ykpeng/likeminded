const React = require('react');
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const LoginPage = React.createClass({

  render(){
    return(
      <main className="content group">
        <section className="content-main">
          <figure className="logo-large"></figure>
          <h1>LikeMinded</h1>
          <h2>Discover people who think the way you do</h2>
        </section>
        <section className="content-sidebar">
          <SignupForm />
        </section>
      </main>
    )
  }
})

module.exports = LoginPage;
