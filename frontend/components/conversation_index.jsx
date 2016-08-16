const React = require('react');
const ConversationIndexItem = require('./conversation_index_item');
const ConversationStore = require('../stores/conversation_store');
const ConversationActions = require('../actions/conversation_actions');
const Link = require('react-router').Link;

const ConversationIndex = React.createClass({
  getInitialState(){
    return { conversations: [], loading: true }
  },

  componentDidMount(){
    this.listener = ConversationStore.addListener(this.handleChange);
    ConversationActions.fetchConversations();
    setTimeout(()=>{
      this.setState({ loading: false });
    }, 3000);
  },

  handleChange(){
    this.setState({ conversations: ConversationStore.all() });
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    return(
      <div className="content-vertical">

        <Link to={`/conversations`}>
          <h5 className="message-nav">MESSAGES</h5>
        </Link>

        { !this.state.loading && this.state.converstaions.length === 0 ?

          <div className="no-convos">Looks like you don't have any messages yet. Why not message someone you like?</div> :

          <ul className="conversation-index">
          {this.state.conversations.map((conversation)=>{
            return <Link to={`/conversations/${conversation.id}`} key={conversation.id}><ConversationIndexItem last_message={conversation.last_message} id={conversation.id}/></Link>
          })}
        </ul> }

      </div>
    )
  }
})

module.exports = ConversationIndex;
