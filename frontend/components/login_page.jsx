const React = require('react');
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const LoginPage = React.createClass({
  render(){
    return(
      <div className="background">
        <header className="header">
          <div className="header-left"><span>LIKE</span>MINDED</div>
          <div className="header-right"><LoginForm /></div>
        </header>
        <main className="content-landing">
          <section className="logo-section">
            <h2>DISCOVER PEOPLE WHO THINK THE WAY YOU DO</h2>
          </section>
          <section className="signup-section">
            <SignupForm />
          </section>
        </main>
      </div>
    )
  }
})

module.exports = LoginPage;
