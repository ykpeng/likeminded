const React = require('react');
const SessionStore = require('../stores/session_store');
const ConversationActions = require('../actions/conversation_actions');

const ConversationIndexItem = React.createClass({
  handleDelete(e){
    e.preventDefault();
    ConversationActions.deleteConversation(this.props.id)
  },

  render(){
    let other_user = this.props.last_message.sender;
    if (other_user.id === SessionStore.currentUser().id) {
      other_user = this.props.last_message.receiver;
    };
    return(
      <li className="conversation">
        <div className="convo-left">
          <div className="convo-photo">
            <img src={other_user.img_url} alt={other_user.username}/>
          </div>
          <div>
            <h5>{other_user.username}</h5>
            <p>{this.props.last_message.content}</p>
          </div>
        </div>

        <div className="convo-right">
          <span>{this.props.last_message.time_ago} ago</span>
          <button className="trash-icon" onClick={this.handleDelete}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </div>
      </li>
    );
  }
});

module.exports = ConversationIndexItem;
