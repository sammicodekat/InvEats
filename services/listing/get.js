var axios = require('axios');

module.exports.get = function (event, context, callback) {
  var rid = event.queryStringParameters.rid;

  axios({
    url: 'https://platform.opentable.com/sync/listings/' + rid,
    method: 'GET',
    headers: {
      Authorization: 'bearer e4337b2b-17a3-4178-94c6-eb63b6a54fdc',
    },
  })
    .then((data) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data.data.items[0]),
      });
    })
    .catch((err) => {
      console.log('ERRORED OUT SOMEHOW', err);
      callback(err);
    });
};
