const axios = require("axios");

async function Log(stack, level, packageName, message) {

    try {

        await axios.post(

            "http://4.224.186.213/evaluation-service/logs",

            {

                stack: stack,
                level: level,
                package: packageName,
                message: message

            },

            {

                headers: {

                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`

                }

            }

        );

    }

    catch(err){

        console.log("Logging Error");

    }

}

module.exports = Log;