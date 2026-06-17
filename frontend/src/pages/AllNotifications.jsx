import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AllNotifications() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/api/all")
            .then(res => {

                setNotifications(res.data);

            })
            .catch(err => {

                console.log(err);

            });

    }, []);

    return (

        <div>
            <Navbar/>

            <h1>All Notifications</h1>

            {

                notifications.map((item, index) => (

                    <div
                        key={index}
                        style={{
                            border: "1px solid gray",
                            margin: "10px",
                            padding: "10px"
                        }}
                    >

                        <h3>{item.Type || item.type}</h3>

                        <p>{item.Message || item.message}</p>

                        <small>{item.Timestamp || item.timestamp}</small>

                    </div>

                ))

            }

        </div>

    );

}

export default AllNotifications;