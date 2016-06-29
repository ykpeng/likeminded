const React = require('react');
const ProfileSectionIndexItem = require('./profile_section_index_item');

const SECTION_MAPPING = {
  "self summary": "My self-summary",
  "doing with life": "What I'm doing with my life",
  "good at": "I'm really good at",
  "favorites": "Favorite books, movies, shows, music, and food",
  "thinking about": "I spend a lot of time thinking about",
  "friday night": "On a typical Friday night, I am",
  "message if": "You should message me if"
}

const ProfileSectionIndex = React.createClass({

  render(){
    const profileSections =
      this.props.profileSections.map( profileSection => {
        return (<li key={profileSection.id}>
          <h4>{SECTION_MAPPING[profileSection.section]}</h4>
          <ProfileSectionIndexItem profileSection={profileSection} />
        </li>);
      });

    return(
      <ul>
        {profileSections}
      </ul>
    )
  }
})

module.exports = ProfileSectionIndex;
