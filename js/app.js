'use strict'
require('dotenv').config();
const key = process.env.key;

geocode();
function geocode() {
  let location = '22 Main st Boston MA';
  axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    params: {
      address:location,
      key:key
    }
  })
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error);
  })
}


