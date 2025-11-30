
import {Link } from "react-router"

export default function Header(){
return(


    <header> 

        <nav>
            <Link className="home" to="/"> </Link>
            <Link to="/topics">Catalog</Link>

            <div   id="user">

                <Link to="/topics/add">Add topic</Link>
                <Link to="/logout">Logout</Link>
            </div>

            <div id="guest">

                <Link to="/login">Login</Link>
                <Link to= "/register">Register</Link>
            </div>

        </nav>
    </header>
);
}