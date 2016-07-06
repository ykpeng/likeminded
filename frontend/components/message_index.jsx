const React = require('react');
const MessageActions = require('../actions/message_actions');
const MessageStore = require('../stores/message_store');
const MessageIndexItem = require('./message_index_item');
const SessionStore = require('../stores/session_store');
const MessageForm = require('./message_form');
const Link = require('react-router').Link;

const MessageIndex = React.createClass({
  getInitialState(){
    return { messages: [] };
  },
  componentDidMount(){
    this.listener = MessageStore.addListener(this.handleChange);
    MessageActions.fetchMessages(parseInt(this.props.params.conversationId));
  },
  handleChange(){
    this.setState({ messages: MessageStore.all() });
  },
  componentWillUnmount(){
    this.listener.remove();
  },
  render(){
    if (this.state.messages.length === 0) {
      return <div></div>;
    }
    let other_user = this.state.messages[0].sender;
    if (other_user.id === SessionStore.currentUser().id) {
      other_user = this.props.messages[0].receiver;
    };
    return(
      <div className="content">
        <div className="content-vertical">
          <Link to={`/users/${other_user.id}`}><div className="messages-header">
            <div className="messages-header-left">
              <div className="message-photo">
                <img src={other_user.img_url} alt={other_user.username} onClick={this.goToOther}/>
              </div>
              <div>
                <h3>{other_user.username}</h3>
                <div>{other_user.birthday} | {other_user.zipcode}</div>
              </div>
            </div>
          </div></Link>

          <ul className="messages">
            {this.state.messages.map((message)=>{
              return <MessageIndexItem message={message} key={message.id}/>
            })}
            <MessageForm receiver_id={other_user.id} conversation_id={this.state.messages[0].conversation_id}/>
          </ul>

        </div>
      </div>
    );
  }
});

module.exports = MessageIndex;
