const React = require('react');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;

const ConversationIndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleDelete(e){
    e.preventDefault();
    ConversationActions.deleteConversation(this.props.id)
  },

  // handleClick () {
  //   this.context.router.push('/conversations/'+ this.props.id);
  // },

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
            <h3>{other_user.username}</h3>
            {this.props.last_message.content}
          </div>
        </div>

        <div>
          <span>{this.props.last_message.created_at}</span>
          <button className="trash-icon"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </div>
      </li>
    );
  }
});

module.exports = ConversationIndexItem;
