const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');

console.log("Calling fetch myIP");

fetchMyIP((error, ip) => {
  console.log("inside fetch myIP callback")
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});
console.log("After fetch myIP");

console.log("Calling fetchCoordsByIp");

fetchCoordsByIp("142.189.16.34", (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('Here is your current GEO Cooridnates: ', data);
});

console.log("Calling fetchISSFlyOverTimes");
fetchISSFlyOverTimes({ latitude: '44.00648', longitude: '-79.450396' }, (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('Here are the next available times you can see the ISS flyover!: ', data);
});
console.log("After all the fetch calls!")

// const nextISSTimesForMyLocation = function(callback) {
//   fetchMyIP((error, ip) => {
//     if (error) {
//       return callback(error, null);
//     }

//     fetchCoordsByIP(ip, (error, loc) => {
//       if (error) {
//         return callback(error, null);
//       }

//       fetchISSFlyOverTimes(loc, (error, nextPasses) => {
//         if (error) {
//           return callback(error, null);
//         }

//         callback(null, nextPasses);
//       });
//     });
//   });
// };