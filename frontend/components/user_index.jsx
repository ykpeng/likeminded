const React = require('react');
const UserIndexItem = require('./user_index_item');
const SessionStore = require('../stores/session_store');

const UserIndex = React.createClass({
  // if (SessionStore.currentUser().answers.length < 60) {
  //   return <div className="content">You have no matches yet! Please complete the personality test to see matches.</div>
  // }
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
