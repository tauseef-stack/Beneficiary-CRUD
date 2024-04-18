import { Link } from "react-router-dom";

const Header = () => {
   return <div>
        <ul>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/edit">Edit</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
    </div>
}

export default Header;