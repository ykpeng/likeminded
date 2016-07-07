const React = require('react');

const UploadButton = React.createClass({
  upload(e){
    e.preventDefault();
    cloudinary_options.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          this.props.addImage(url);
        }
      }.bind(this)
    );
  },
  render(){
    return(
      <button onClick={this.upload}>ADD PHOTO</button>
    )
  }
})
