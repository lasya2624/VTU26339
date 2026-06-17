const axios = require("axios");
const Log = require("../middleware/logger");

const {

    getTopNotifications

} = require("../services/priorityService");

exports.getPriorityNotifications = async (req, res) => {

    try {

         await Log(

            "backend",

            "info",

            "controller",

            "Fetching notifications from Notification API"

        );

        const response = await axios.get(

            "http://4.224.186.213/evaluation-service/notifications",

            {

                headers: {

                    Authorization:

                        `Bearer ${process.env.ACCESS_TOKEN}`

                }

            }

        );
        console.log(response.data);

        const notifications = response.data.notifications;

        const top10 = await getTopNotifications(notifications);
        await Log(

            "backend",

            "info",

            "controller",

            "Returning top priority notifications"

        );

        res.status(200).json(top10);

    }

    catch (err) {

        
        await Log(

            "backend",

            "error",

            "controller",

            err.message

        );

        res.status(500).json({

            message: err.message

        });

    }

};


exports.getAllNotifications = async (req, res) => {

    try {

        const response = await axios.get(

            "http://4.224.186.213/evaluation-service/notifications",

            {

                headers: {

                    Authorization:

                        `Bearer ${process.env.ACCESS_TOKEN}`

                }

            }

        );

        res.json(

            response.data.notifications

        );

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};