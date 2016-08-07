const React = require('react');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const UserIndex = require('./user_index');
const SessionStore = require('../stores/session_store');
const FilterParamsStore = require('../stores/filter_params_store');
const Filters = require('./filter_form');
const Link = require('react-router').Link;

const Search = React.createClass({
  getInitialState(){
    return { users: UserStore.all(),
             filterParams: FilterParamsStore.params()};
  },

  componentDidMount(){
    this.storeListener = UserStore.addListener(this.handleUsersChange)
    this.filterListener = FilterParamsStore.addListener(this.handleFiltersChange)
    const filterParams = FilterParamsStore.params();
    UserActions.fetchUsers(filterParams);
  },

  handleUsersChange(){
    this.setState({ users: UserStore.all() });
  },

  handleFiltersChange(){
    const newFilters = FilterParamsStore.params()
    this.setState({ filterParams: newFilters });
    UserActions.fetchUsers(newFilters);
  },

  componentWillUnmount(){
    this.storeListener.remove();
    this.filterListener.remove();
  },

  render(){
    return(
      <div className="content-main">
        <Filters filterParams={this.state.filterParams}/>

        {(!SessionStore.currentUser().completed) ? <Link to="/test"><div className="users-message">COMPLETE THE PERSONALITY TEST TO IMPROVE YOUR MATCHES</div></Link> : <div></div>}

        {(this.state.users.length === 0) ? <div className="no-users">Looks like there aren't any users matching your search criteria. Try broadening your search!</div> : <UserIndex users={this.state.users}/>}
        
      </div>
    )
  }
});

module.exports = Search;
