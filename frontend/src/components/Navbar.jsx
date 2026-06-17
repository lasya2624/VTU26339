import { Link } from "react-router-dom";

function Navbar() {

    return (

        <div
            style={{
                padding: "15px",
                background: "#222"
            }}
        >

            <Link
                to="/"
                style={{
                    color: "white",
                    marginRight: "20px"
                }}
            >
                All Notifications
            </Link>

            <Link
                to="/priority"
                style={{
                    color: "white"
                }}
            >
                Priority Notifications
            </Link>

        </div>

    );

}

export default Navbar;