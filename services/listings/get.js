const axios = require('axios');

module.exports.get = function(event, context, callback) {
  const date = event.date;
  const location = event.location;

  console.log('event', event);

  axios({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    method: 'GET',
    params: {
      address: location,
      key: 'AIzaSyAVCgZsgqxB-eUbkxZWsnggH5XW15PePzE',
    },
  })
    .then((encoded) => {
      const { lat, lng } = encoded.results[0].geometry.location;
      return axios({
        url: 'https://platform.opentable.com/availability',
        method: 'GET',
        headers: {
          Authorization: 'bearer e4337b2b-17a3-4178-94c6-eb63b6a54fdc',
        },
        params: {
          start_date_time: date,
          forward_minutes: 60,
          backward_minutes: 90,
          longitude: lng,
          latitude: lat,
        },
      })
    })
    .then((data) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data.data.items),
      });
    })
    .catch((err) => {
      console.log("ERRORED OUT SOMEHOW", err);
      callback(err);
    });
};
