const React = require('react');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const ProfileSectionIndex = require('./profile_section_index');

const UserShow = React.createClass({
  getInitialState(){
    return ({ user: UserStore.find(parseInt(this.props.params.userId)) });
  },

  componentWillReceiveProps(newProps) {
    UserActions.fetchSingleUser(parseInt(newProps.params.userId));
  },

  componentDidMount(){
    this.storeListener = UserStore.addListener(this.handleChange);
    UserActions.fetchSingleUser(parseInt(this.props.params.userId));
  },

  handleChange(){
    this.setState({ user: UserStore.find(parseInt(this.props.params.userId)) });
  },

  componentWillUnmount(){
    this.storeListener.remove();
  },

  render(){

    if(this.state.user === undefined) { return <div></div>; }
    return (
      <div>
        <img src={this.state.user.img_url} alt={this.state.user.username} />
        <h1>{this.state.user.username}</h1>
        <p>{this.state.user.birthday}</p>
        <p>{this.state.user.zipcode}</p>
  
        <ProfileSectionIndex profileSections={this.state.user.profile_sections}/>
      </div>
    )
  }
})

module.exports = UserShow;
