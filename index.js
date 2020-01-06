const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length - 2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (num) {
  return function(fare) {
    return num * fare;
  };
};

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(drivers, func) {
  return func(drivers);
};