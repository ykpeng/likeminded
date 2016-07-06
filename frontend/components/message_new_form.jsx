const React = require('react');
const MessageActions = require('../actions/message_actions');
const SessionStore = require('../stores/session_store');
const Link = require('react-router').Link;

const MessageNewForm = React.createClass({
  getInitialState(){
    return { content: "" };
  },

  handleInput(e){
    this.setState({ content: e.target.value });
  },

  handleSubmit(e){
    e.preventDefault();
    const formData = {
      content: this.state.content,
      receiver_id: this.props.user.id,
    };
    MessageActions.createMessage(formData);
    this.setState({ content: "" });
  },

  render(){
    return(
      <div className="new-message">
        <div className="new-message-top">

          <div className="new-message-top-left">
            <div className="new-message-photo">
              <Link to={`/users/${this.props.user.id}`}><img src={this.props.user.img_url} alt={this.props.user.username}/></Link>
            </div>
            <div>
              {this.props.user.username}
            </div>
          </div>
          
          <button onClick={this.props.closeModal} className="exit-icon new-message-top-right">
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

      <form onSubmit={this.handleSubmit} className="new-message-bottom">
        <textarea onChange={this.handleInput} placeholder="Compose your message" value={this.state.content}/>
        <input type="submit" value="SEND"/>
      </form>
      </div>
    );
  }
});

module.exports = MessageNewForm;
