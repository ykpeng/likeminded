const Dispatcher = require('../dispatcher/dispatcher');
const FilterConstants = require('../constants/filter_constants');

const FilterActions = {
  updateLookingFor(value){
    Dispatcher.dispatch({
      actionType: FilterConstants.UPDATE_LOOKING_FOR,
      lookingFor: value
    });
  }
  updateMaxDistance(value) {
    Dispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MAX_DISTANCE,
      maxDistance: value
    });
  },
  updateMinAge(value) {
    Dispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MIN_AGE,
      minAge: value,
    });
  },
  updateMaxAge(value) {
    Dispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MAX_AGE,
      maxAge: value,
    });
  }
};

module.exports = FilterActions;
