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
    let url = "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467682125/default-profile-photo_w9qswu.png";
    if (this.props.user.img_url) {
      url = this.props.user.img_url;
    }
    return (
      <li className="user-index-item">
        <div className="user-index-photo">
          <img src={url} alt={this.props.user.username} onClick={this.handleClick}/>
        </div>
        <div className="user-index-description">
          <h3 onClick={this.handleClick}>{this.props.user.username}</h3>
          <p>Birthday: {this.props.user.birthday}</p>
          <p>Zipcode: {this.props.user.zipcode}</p>
          <p>{this.props.user.match_percentage}% Match</p>
        </div>
      </li>
    )
  }
})

module.exports = UserIndexItem;
