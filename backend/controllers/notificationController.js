const axios = require("axios");

const {

    getTopNotifications

} = require("../services/priorityService");

exports.priorityNotifications = async (req, res) => {

    try {

        const response = await axios.get(

            "http://4.224.186.213/evaluation-service/notifications",

            {

                headers: {

                    Authorization:

                        "Bearer YOUR_ACCESS_TOKEN"

                }

            }

        );

        const notifications = response.data.notifications;

        const top10 = getTopNotifications(notifications);

        res.json(top10);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};