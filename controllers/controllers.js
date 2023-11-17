const fs = require("fs");
const uniqid = require("uniqid");

const restaurants = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/restaurants.json`)
);

console.log(restaurants);

exports.getAllRestaurants = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json(restaurants);
};
