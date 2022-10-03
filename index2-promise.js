// const request = require('request-promise-native');
// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

const printFlyoverTimes = function(flyoverTimes) {
  for (const time of flyoverTimes) {//This loop will loop through flyoverTimes object. 
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);//Here we are targetting the risetime keys from the flyovertimes object
    const duration = time.duration;//Here we are targetting the durations from the flyoverTimes object. 
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((flyoverTimes) => {
    printFlyoverTimes(flyoverTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  })
