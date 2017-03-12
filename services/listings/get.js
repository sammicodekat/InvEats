const axios = require('axios');

module.exports.get = function(event, context, callback) {
  const schedule = event.schedule;
  axios({
    url: 'https://platform.opentable.com/sync/listings',
    method: 'GET',
    headers: {
      Authorization: 'bearer e4337b2b-17a3-4178-94c6-eb63b6a54fdc',
    },
  })
    .then((data) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data.data.items),
      });
    })
    .catch((err) => {
      console.error('Get request errored out', err);
      callback(err);
    });
};


/*
schedule: {
     Monday: {
       Lunch: false,
       Dinner: false,
     },
     Tuesday: {
       Lunch: false,
       Dinner: false,
     },
     Wednesday: {
       Lunch: false,
       Dinner: false,
     },
     Thursday: {
       Lunch: false,
       Dinner: false,
     },
     Friday: {
       Lunch: false,
       Dinner: false,
     },
   },
*/
