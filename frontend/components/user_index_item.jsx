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
        <div className="user-index-photo">
          <img src={this.props.user.img_url} alt={this.props.user.username} onClick={this.handleClick}/>
        </div>
        <div className="user-index-description">
          <h3 onClick={this.handleClick}>{this.props.user.username}</h3>
          <p>{this.props.user.age} ・ {this.props.user.city}, {this.props.user.state}</p>
          <h5>{this.props.user.match_percentage}% Match</h5>
        </div>
      </li>
    )
  }
})

module.exports = UserIndexItem;
