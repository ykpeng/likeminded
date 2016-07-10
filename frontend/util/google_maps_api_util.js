const SessionActions = require('../actions/session_actions');

const GoogleMapsApiUtil = {
  fetchLocation(formData, cb){
    $.ajax({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${formData.zipcode}&sensor=false`,
      method: "GET",
      success(response){
        let city = response.results[0].address_components[1].short_name;
        let state = response.results[0].address_components[3].short_name;
        let lat = response.results[0].geometry.location.lat;
        let lng = response.results[0].geometry.location.lng;
        const user = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          birthday: formData.birthday,
          looking_for: formData.looking_for,
          zipcode: formData.zipcode,
          city: city,
          state: state,
          lat: lat,
          lng: lng
        };
        SessionActions.signup(user);
      }
    })
  }
};

module.exports = GoogleMapsApiUtil;
