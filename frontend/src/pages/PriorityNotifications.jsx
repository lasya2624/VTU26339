import { useEffect, useState } from "react";

import axios from "axios";

import { Log } from "../utils/logger";

function PriorityNotifications() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {

        Log(

            "frontend",

            "info",

            "page",

            "Priority Notification page opened"

        );

        axios

            .get(

                "http://localhost:5000/api/priority"

            )

            .then(res => {

                setNotifications(res.data);

                Log(

                    "frontend",

                    "info",

                    "api",

                    "Priority notifications loaded"

                );

            })

            .catch(err => {

                Log(

                    "frontend",

                    "error",

                    "api",

                    err.message

                );

            });

    }, []);

    return (

        <div>

            <h1>

                Top 10 Priority Notifications

            </h1>

            {

                notifications.map(item => (

                    <div

                        key={item.ID}

                        style={{

                            border: "1px solid gray",

                            padding: "10px",

                            margin: "10px"

                        }}

                    >

                        <h3>

                            {item.Type}

                        </h3>

                        <p>

                            {item.Message}

                        </p>

                        <small>

                            {item.Timestamp}

                        </small>

                    </div>

                ))

            }

        </div>

    );

}

export default PriorityNotifications;