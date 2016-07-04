const React = require('react');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const UserIndexItem = require('./user_index_item');

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
