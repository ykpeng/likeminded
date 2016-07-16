const React = require('react');
const UserIndexItem = require('./user_index_item');
const SessionStore = require('../stores/session_store');

const UserIndex = React.createClass({
  render(){
    return (
      <ul className="user-index">
        {
          this.props.users.map((user)=>{
            return <UserIndexItem user={user} key={user.id} />
          })
        }
      </ul>
    )
  }
})

module.exports = UserIndex;
