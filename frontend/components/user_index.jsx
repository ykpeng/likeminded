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
    this.setState({ users: UserStore.all() });
  },

  componentWillUnmount(){
    this.storeListener.remove();
  },

  render(){
    return (
      <div className="content">
        <ul className="user-index group">
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
