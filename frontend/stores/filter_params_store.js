const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const FilterConstants = require('../constants/filter_constants');

const FilterParamsStore = new Store(Dispatcher);

let _params = { minAge: 16, maxAge: 100, maxDistance: 500, lookingFor: "Either" };

FilterParamsStore.params = function() {
  return Object.assign({}, _params);
};

function setLookingFor(value) {
  _params.lookingFor = value;
  FilterParamsStore.__emitChange();
}

function setMaxAge(max){
  _params.maxAge = max;
  FilterParamsStore.__emitChange();
}

function setMinAge(min){
  _params.minAge = min;
  FilterParamsStore.__emitChange();
}

function setMaxDistance(max){
  _params.maxDistance = max;
  FilterParamsStore.__emitChange();
}

// function setBounds(bounds){
//   _params.bounds = bounds;
//   FilterParamsStore.__emitChange();
// }

FilterParamsStore.__onDispatch = function(payload) {
  switch(payload.actionType){
    case FilterConstants.UPDATE_MAX_AGE:
      setMaxAge(payload.maxAge);
      break;
    case FilterConstants.UPDATE_MIN_AGE:
      setMinAge(payload.minAge);
      break;
    case FilterConstants.UPDATE_MAX_DISTANCE:
      setMaxDistance(payload.maxDistance);
      break;
    case FilterConstants.UPDATE_LOOKING_FOR:
      setLookingFor(payload.lookingFor);
      break;
  }
};

module.exports = FilterParamsStore;
