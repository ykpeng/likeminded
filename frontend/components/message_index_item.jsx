const React = require('react');
const Link = require('react-router').Link;

const MessageIndexItem = React.createClass({
  render(){
    console.log(this.props.message);
    // debugger
    let sender = this.props.message.sender;
    return(
      <li className="message">
        <div className="message-left">
          <div className="message-photo">
            <Link to={`/users/${sender.id}`}><img src={sender.img_url} alt={sender.username}/></Link>
          </div>
        </div>
        <div className="message-right">
          <div className="message-content">{this.props.message.content}</div>
          <div className="time-ago">Sent {this.props.message.time_ago} ago</div>
        </div>
      </li>
    );
  }
});

module.exports = MessageIndexItem;
