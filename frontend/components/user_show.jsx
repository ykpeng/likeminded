const React = require('react');
const Link = require('react-router').Link;
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const ProfileSectionIndex = require('./profile_section_index');
const SessionStore = require('../stores/session_store');

const DIM_MAPPING = {
  0: "Realistic",
  1: "Investigative",
  2: "Artistic",
  3: "Social",
  4: "Enterprising",
  5: "Conventional"
};

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
    let url = "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467682125/default-profile-photo_w9qswu.png";
    if (this.state.user.img_url) {
      url = this.state.user.img_url;
    }
    if(this.state.user.profile_sections === undefined) { return <div></div>; }
    return (
      <div className="content">

        <section className="user-sidebar">

          <section className="user-photo">
            <img src={url} alt={this.state.user.username} />
          </section>

          <section className="user-summary">
            <h3>{this.state.user.username}</h3>
            <p>Birthday: {this.state.user.birthday}</p>
            <p>Zipcode: {this.state.user.zipcode}</p>
            <p>Looking for: {this.state.user.looking_for}</p>
          </section>

          <section className="chart">
            <h4>Personality Profile</h4>
            <ul>
              {this.state.user.dim_scores.map((dim_score, i)=>{
                return <li key={i}>{DIM_MAPPING[i]}:{dim_score}</li>
              })}
            </ul>
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
