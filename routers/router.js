const express = require("express");
const controller = require("../controllers/controllers");

const router = express.Router();
router.route("/restaurants").get(controller.getAllRestaurants);
// router.route("/restaurant/:id").get(controller.getRestaurant);

module.exports = router;
