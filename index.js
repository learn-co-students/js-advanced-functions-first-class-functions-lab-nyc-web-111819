// // Code your solution in this file!


const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
  };

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (int) {
  return function (multiplyValue){
    return int * multiplyValue;
  };
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, driverChoices){
  return driverChoices(drivers);
}

//   describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
//     it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
//       expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Sally', 'Bob']);
//     });

//     it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
//       expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Freddy', 'Claudia']);
//     });
//   });
// });
