const React = require('react');
const MessageActions = require('../actions/message_actions');
const SessionStore = require('../stores/session_store');
const Link = require('react-router').Link;

const MessageForm = React.createClass({
  getInitialState(){
    return { content: "" };
  },

  handleInput(e){
    this.setState({ content: e.target.value });
  },

  handleSubmit(e){
    e.preventDefault();
    const formData = {
      conversation_id: this.props.conversation_id,
      content: this.state.content,
      receiver_id: this.props.receiver_id,
    };
    MessageActions.createMessage(formData);
    this.setState({ content: "" });
  },

  render(){
    const currentUser = SessionStore.currentUser();
    return(
      <li className="message">
        <div className="message-left">
          <div className="message-photo">
            <Link to={`/users/${currentUser.id}`}><img src={currentUser.img_url} alt={currentUser.username}/></Link>
          </div>
        </div>
          <form onSubmit={this.handleSubmit} className="message-right">
            <textarea onChange={this.handleInput} value={this.state.content} placeholder="Compose your message"/>
            <input type="submit" value="SEND"/>
          </form>
      </li>
    );
  }
});

module.exports = MessageForm;
