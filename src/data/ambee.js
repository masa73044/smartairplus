const AMBEE_API =
  "ed1cd5b5410d087a437a0673a6a89c9e08e5f575f39570e596cac8d0b0437847";

const testCountry =
  "https://api.ambeedata.com/latest/by-country-code?countryCode=US";

const testCountryLimit =
  "https://api.ambeedata.com/latest/by-country-code?countryCode=US&limit=100";

const testCords = "https://api.ambeedata.com/latest/by-lat-lng?lat=12&lng=77";

const testCity = "https://api.ambeedata.com/latest/by-city?city=Bengaluru";

const rankWorst = "https://api.ambeedata.com/latest/by-order/worst";
const rankBest = "https://api.ambeedata.com/latest/by-order/best";

import axios from "axios";

const url = testCity;
let currentData = [];
axios
  .get(url, {
    headers: {
      "x-api-key": AMBEE_API,
    },
    // timeout: 10000, // Here you set the timeout (in milliseconds)
  })
  .then((response) => {
    currentData = response.data;
    console.log(currentData);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

console.log(currentData);
