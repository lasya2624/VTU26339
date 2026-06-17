const express = require("express");

const router = express.Router();

const controller = require("../controllers/notificationController");

router.get(

    "/priority",

    controller.priorityNotifications

);

module.exports = router;