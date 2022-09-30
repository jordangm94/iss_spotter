const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIp("142.189.16.34", (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('Here is your current GEO Cooridnates: ', data);
});

fetchISSFlyOverTimes({ latitude: '44.00648', longitude: '-79.450396' }, (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('Here are the next available times you can see the ISS flyover!: ', data);
});

