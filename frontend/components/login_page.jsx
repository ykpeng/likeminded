const React = require('react');
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');
{/*<figure className="logo-large"></figure>*/}
const LoginPage = React.createClass({
  render(){
    return(
      <div>
        <header className="header">
          <LoginForm />
        </header>
        <main className="content">
          <section className="signup-section">
            <img className="logo-large" src="http://res.cloudinary.com/ddm1q6utc/image/upload/v1469564965/LikeMinded-logo_hetqkc.png"/>
            <h1>LikeMinded</h1>
            <h2>Discover people</h2>
            <h2>who think the way you do</h2>
            <SignupForm />
          </section>
        </main>
      </div>
    )
  }
})

module.exports = LoginPage;
