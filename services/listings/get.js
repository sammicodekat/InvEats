var axios = require('axios');

module.exports.get = function(event, context, callback) {
  var date = event.queryStringParameters.date;
  var location = event.queryStringParameters.location;

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
      var coords = encoded.data.results[0].geometry.location;
      var lat = coords.lat;
      var lng = coords.lng;

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
          radius: 5,
          party_size: 2,
          include_unavailable: false,
        },
      });
    })
    .then((data) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data.data.availabilities),
      });
    })
    .catch((err) => {
      console.log('ERRORED OUT SOMEHOW', err);
      callback(err);
    });
};
