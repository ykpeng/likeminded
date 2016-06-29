const React = require('react');
const ProfileSectionForm = require('./profile_section_form');

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
    let content = (<div>
                    <button onClick={this.handleClick}>Edit</button>
                    <p>{this.props.profileSection.content}</p>
                   </div>);
    if (this.state.editing) {
      content = <ProfileSectionForm closeForm={this.closeForm} profileSection={this.props.profileSection}/>;
    };

    return(
      content
    )
  }
})

module.exports = ProfileSectionIndexItem;
