const React = require('react');
const ConversationIndexItem = require('./conversation_index_item');
const ConversationStore = require('../stores/conversation_store');
const ConversationActions = require('../actions/conversation_actions');

const ConversationIndex = React.createClass({
  getInitialState(){
    return { conversations: [] }
  },

  componentDidMount(){
    this.listener = ConversationStore.addListener(this.handleChange);
    ConversationActions.fetchConversations();
  },

  handleChange(){
    this.setState({ conversations: ConversationStore.all() })
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    console.log("inside conversation index");
    return(
      <div className="content">
        <h3>Messages</h3>
        <ul>
          {this.state.conversations.map((conversation)=>{
            return <ConversationIndexItem conversation={conversation} key={conversation.id}/>
          })}
        </ul>
      </div>
    )
  }
})

module.exports = ConversationIndex;
