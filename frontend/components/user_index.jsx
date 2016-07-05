const React = require('react');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const UserIndexItem = require('./user_index_item');
const SessionStore = require('../stores/session_store');

const UserIndex = React.createClass({
  getInitialState(){
    return { users: []};
  },

  componentDidMount(){
    this.storeListener = UserStore.addListener(this.handleChange)
    UserActions.fetchUsers();
  },

  handleChange(){
    let sortedUsers = UserStore.all().sort((a, b)=>{
      return b.match_percentage - a.match_percentage;
    })
    this.setState({ users: sortedUsers });
  },

  componentWillUnmount(){
    this.storeListener.remove();
  },

  render(){
    if (SessionStore.currentUser().answers.length < 60) {
      return <div className="content">You have no matches yet! Please complete the personality test to see matches.</div>
    }
    return (
      <div className="content">
        <ul className="user-index">
          {
            this.state.users.map((user)=>{
              return <UserIndexItem user={user} key={user.id} />
            })
          }
        </ul>
      </div>
    )
  }
})

module.exports = UserIndex;
