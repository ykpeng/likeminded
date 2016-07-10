const React = require('react');

const UploadButton = React.createClass({
  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, results) {
        if (!error) {
          console.log(results);
          this.props.addImage(results[0].url);
        }
      }.bind(this)
    );
  },
  render(){
    return(
      <button className="profile-button" onClick={this.upload}>UPDATE PHOTO</button>
    )
  }
})

module.exports = UploadButton;
