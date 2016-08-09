const React = require('react');
const Link = require('react-router').Link;
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const ProfileSectionIndex = require('./profile_section_index');
const SessionStore = require('../stores/session_store');
const Modal = require('react-modal');
const ModalStyle = require('../modal_style');
const MessageNewForm = require('./message_new_form');
const UploadButton = require('./upload_button');
const Chart = require('./chart');

const UserShow = React.createClass({
  getInitialState(){
    const potentialUser = UserStore.find(parseInt(this.props.params.userId));
    return ({ user: potentialUser ? potentialUser : {}, modalOpen: false});
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

  closeModal(){
    this.setState({ modalOpen: false })
  },

  openModal(){
    this.setState({ modalOpen: true })
  },

  addImage(url){
    UserActions.updateUser(this.state.user.id, { img_url: url });
  },

  render(){
    if(this.state.user.profile_sections === undefined) { return <div></div>; }

    let currentUser = SessionStore.currentUser();
    return (
      <div className="content-profile">
        <section className="user-sidebar">
          <section className="user-photo">
            <div className="profile-photo"><img src={this.state.user.img_url} alt={this.state.user.username} /></div>
          </section>

          { (currentUser.id === this.state.user.id) ? <UploadButton addImage={this.addImage}/> : <button className="profile-button" onClick={this.openModal}>MESSAGE</button> }


          <section className="user-legend">
            <div className="user-legend-item"><div className="square red"></div><span>you</span></div>
            { (currentUser.id === this.state.user.id) ? <div></div> :
            <div className="user-legend-item"><div className="square blue"></div><span>{this.state.user.username}</span></div> }
          </section>

          <section className="user-chart">
            <Chart dim_scores={this.state.user.dim_scores} id={this.state.user.id}/>
          </section>

        </section>

        <section className="user-main">
          <section className="user-summary">
            <h1>{this.state.user.username}</h1>
            <span>{this.state.user.age} ・ {this.state.user.city}, {this.state.user.state} ・ Looking for {this.state.user.looking_for.toLowerCase()}{ (currentUser.id === this.state.user.id) ? <p></p> : <span> ・  {this.state.user.match_percentage}% Match</span>}</span>
          </section>
          <ProfileSectionIndex profileSections={this.state.user.profile_sections}/>
        </section>

        <Modal isOpen={this.state.modalOpen}
               onRequestClose={this.closeModal}
               style={ModalStyle}>

          <MessageNewForm user={this.state.user} closeModal={this.closeModal}/>
        </Modal>
      </div>
    )
  }
})

module.exports = UserShow;
