import {Link} from "react-router-dom";

function Navbar(){

return(

<div>

<Link to="/">All Notifications</Link>

&nbsp;&nbsp;

<Link to="/priority">Priority Notifications</Link>

</div>

);

}

export default Navbar;