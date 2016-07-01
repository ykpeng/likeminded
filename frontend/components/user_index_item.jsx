const React = require('react');
const hashHistory = require('react-router').hashHistory;

const UserIndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleClick () {
    this.context.router.push('/users/'+ this.props.user.id);
  },

  render(){
    return (
      <li className="user-index-item">
        <img src={this.props.user.img_url} alt={this.props.user.username} onClick={this.handleClick}/>
        <h3 onClick={this.handleClick}>{this.props.user.username}</h3>
        <p>{this.props.user.birthday}</p>
        <p>{this.props.user.zipcode}</p>
      </li>
    )
  }
})

module.exports = UserIndexItem;
