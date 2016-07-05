const React = require('react');
const MessageActions = require('../actions/message_actions');
const MessageStore = require('../stores/message_store');

const MessageIndex = React.createClass({
  getInitialState(){
    return { messages: [] };
  },
  componentDidMount(){
    this.listener = MessageStore.addListener(this.handleChange);
    MessageActions.fetchMessages();
  },
  componentWillUnmount(){
    this.listener.remove();
  },
  render(){
    return(
      this.state.messages.map((message)=>{
        return <MessageIndexItem message={message} key={message.id}/>
      })
    );
  }
});

module.exports = MessageIndexItem;
