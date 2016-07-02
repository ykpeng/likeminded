const React = require('react');
const Link = require('react-router').Link;
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const ProfileSectionIndex = require('./profile_section_index');
const SessionStore = require('../stores/session_store');

const UserShow = React.createClass({
  getInitialState(){
    const potentialUser = UserStore.find(parseInt(this.props.params.userId));
    return ({ user: potentialUser ? potentialUser : {} });
  },

  componentWillReceiveProps(newProps) {
    UserActions.fetchSingleUser(parseInt(newProps.params.userId));
  },

  componentDidMount(){
    this.storeListener = UserStore.addListener(this.handleChange);
    UserActions.fetchSingleUser(parseInt(this.props.params.userId));
  },

  handleChange(){
    const potentialUser = UserStore.find(parseInt(this.props.params.userId));
    this.setState({ user: potentialUser ? potentialUser : {} });
  },

  componentWillUnmount(){
    this.storeListener.remove();
  },

  render(){
    if(this.state.user.profile_sections === undefined) { return <div></div>; }
    return (
      <div className="content">

        <section className="user-sidebar">

          <section className="user-photo">
            <img src={this.state.user.img_url} alt={this.state.user.username} />
          </section>

          <section className="user-summary">
            <h3>{this.state.user.username}</h3>
            <p>{this.state.user.birthday}</p>
            <p>{this.state.user.zipcode}</p>
          </section>

          <section className="chart">
          </section>

        </section>

        <section className="user-main">
          <ProfileSectionIndex profileSections={this.state.user.profile_sections}/>
        </section>
      </div>
    )
  }
})

module.exports = UserShow;
