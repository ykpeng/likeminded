const React = require('react');
const FilterActions = require('../actions/filter_actions');

const Filters = React.createClass({
  handleMaxAgeChange(e) {
    FilterActions.updateMaxAge(e.target.value);
  },

  handleMinAgeChange(e) {
    FilterActions.updateMinAge(e.target.value);
  },

  handleLookingForChange(e) {
    FilterActions.updateLookingFor(e.target.value);
  },

  currentMaxAge() {
    return this.props.filterParams.maxAge;
  },

  currentMinAge() {
    return this.props.filterParams.minAge;
  },

  currentLookingFor() {
    return this.props.filterParams.lookingFor;
  },

  // updateAge(min, max) {
  //   FilterActions.updateParams({
  //     age: { min, max }
  //   });
  // },

  render(){
    return(
      <div>
        <label>Minimum Age</label>
        <input type="number"
          min="16"
          max="100"
          onChange={this.handleMinAgeChange}
          value={this.currentMinAge()}/>
        <br/>
        <label>Maximum Age</label>
        <input type="number"
          min="16"
          max="100"
          onChange={this.handleMaxAgeChange}
          value={this.currentMaxAge()}/>
        <br/>
        <label>People who are looking for</label>
        <select value={this.currentLookingFor()} onChange={this.handleLookingForChange}>
          <option value="Friendship">Friendship</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Either">Either</option>
        </select>
      </div>
    )
  }
});

module.exports = Filters;
