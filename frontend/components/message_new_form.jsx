const React = require('react');
const MessageActions = require('../actions/message_actions');
const SessionStore = require('../stores/session_store');
const Link = require('react-router').Link;
const ConversationActions = require('../actions/conversation_actions');
const ConversationStore = require('../stores/conversation_store');

const MessageNewForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return { content: "" };
  },

  handleInput(e){
    this.setState({ content: e.target.value });
  },

  handleSubmit(e){
    e.preventDefault();
    this.listener = ConversationStore.addListener(this.handleChange);
    const message = { content: this.state.content,
                      receiver_id: this.props.user.id,
                      sender_id: SessionStore.currentUser().id
                    }

    ConversationActions.createConversation(
      { conversation: { messages_attributes: [message] } }
    );
    this.setState({ content: "" });
    this.props.closeModal();
  },

  handleChange(){
    let conversations = ConversationStore.all();
    let conversation_id = conversations[conversations.length - 1].id;
    this.context.router.push(`/conversations/${conversation_id}`);
  },

  componentWillUnmount(){
    this.listener.remove();
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
