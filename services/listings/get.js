var axios = require('axios');

module.exports.get = function(event, context, callback) {
<<<<<<< HEAD
  var date = event.queryStringParameters.date;
  var location = event.queryStringParameters.location;
=======
  const date = event.date;
  const location = event.location;
>>>>>>> 965e0a5ff6a1675c9f8f9a310ea316de421ada1b

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
<<<<<<< HEAD
      var coords = encoded.data.results[0].geometry.location;
      var lat = coords.lat;
      var lng = coords.lng;

=======
      const { lat, lng } = encoded.results[0].geometry.location;
>>>>>>> 965e0a5ff6a1675c9f8f9a310ea316de421ada1b
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
<<<<<<< HEAD
          radius: 5,
          party_size: 2,
          include_unavailable: false,
        },
      });
=======
        },
      })
>>>>>>> 965e0a5ff6a1675c9f8f9a310ea316de421ada1b
    })
    .then((data) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data.data.availabilities),
      });
    })
    .catch((err) => {
<<<<<<< HEAD
      console.log('ERRORED OUT SOMEHOW', err);
=======
      console.log("ERRORED OUT SOMEHOW", err);
>>>>>>> 965e0a5ff6a1675c9f8f9a310ea316de421ada1b
      callback(err);
    });
};
