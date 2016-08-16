const React = require('react');
const UserIndexItem = require('./user_index_item');
const SessionStore = require('../stores/session_store');

const UserIndex = React.createClass({
  getInitialState() {
    return { loading: true };
  },

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000);
  },

  render(){
    if (!this.state.loading && this.props.users.length === 0) {
      return(
        <div className="no-users">Looks like there aren't any users matching your search criteria. Try broadening your search!</div>
      );
    } else {
      return (
        <ul className="user-index">
          {
            this.props.users.map((user)=>{
              return <UserIndexItem user={user} key={user.id} />
            })
          }
        </ul>
      );
    }
  }
})

module.exports = UserIndex;
