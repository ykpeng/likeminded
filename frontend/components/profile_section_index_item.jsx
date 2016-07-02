const React = require('react');
const ProfileSectionForm = require('./profile_section_form');
const SessionStore = require('../stores/session_store');

const ProfileSectionIndexItem = React.createClass({
  getInitialState(){
    return { editing: false };
  },

  handleClick(){
    this.setState( { editing: true } );
  },

  closeForm(){
    this.setState({ editing: false} );
  },

  render(){
    let content = (<div><p>{this.props.profileSection.content}</p></div>);
    if (SessionStore.currentUser().id === this.props.profileSection.user_id) {
      content = (<div>
        <button onClick={this.handleClick} className="edit-icon"><i className="fa fa-pencil" aria-hidden="true"></i></button>
        <p>{this.props.profileSection.content}</p>
        </div>);
      if (this.state.editing) {
        content = <ProfileSectionForm closeForm={this.closeForm} profileSection={this.props.profileSection}/>;
      };
    }
    return(
      content
    )
  }
})

module.exports = ProfileSectionIndexItem;
