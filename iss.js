/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');


const fetchMyIP = function(callback) { //(error, ip)
  request('https://api.ipify.org?format=json', (err, response, body) => {
    if (err) {
      callback(err, null);
    } else if (response.statusCode !== 200) {
      callback("The status code is not 200", null);
    } else {
      const myIP = JSON.parse(body);
      callback(null, myIP.ip);
    }
  });
};

const fetchCoordsByIp = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const myLatLong = JSON.parse(body);
    if (!myLatLong.success) {
      const failureMessage = `Success status was ${myLatLong.success}. Server message says: ${myLatLong.message} when fetching for IP ${myLatLong.ip}`;
      callback(failureMessage, null);
    }
    else {
      callback(null, { longitude: myLatLong.longitude, latitude: myLatLong.latitude });
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIp };

