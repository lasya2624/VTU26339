const express = require("express");

const router = express.Router();

const controller = require("../controllers/notificationController");

console.log(controller);

router.get(

    "/priority",

    controller.getPriorityNotifications

);

router.get(

    "/all",

    controller.getAllNotifications

);

module.exports = router;