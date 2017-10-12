// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
  const newArray = array.slice(0, 2);
  return newArray;
}

const returnLastTwoDrivers = function(array){
  const newArray = array.slice(-2);
  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(num){
    return num * num;
  };
};

function fareDoubler(fare){
  return fare * 2;
}

function fareTripler(fare){
  return fare * 3;
}

function selectDifferentDrivers(array, fun){
  return fun(array)
}
