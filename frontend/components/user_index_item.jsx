const React = require('react');

const UserIndexItem = React.createClass({
  render(){
    return (
      <li>
        <img src={this.props.user.img_url} alt={this.props.user.username}/>
        <h4>{this.props.user.username}</h4>
        <p>{this.props.user.birthday}</p>
        <p>{this.props.user.zipcode}</p>
      </li>
    )
  }
})

module.exports = UserIndexItem;
