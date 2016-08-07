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
          <h5 onClick={this.handleClick}>{this.props.user.username}</h5>
          <p>{this.props.user.age} ・ {this.props.user.city}, {this.props.user.state}</p>
          <h3>{this.props.user.match_percentage}% Match</h3>
        </div>
      </li>
    )
  }
})

module.exports = UserIndexItem;
