import logo from "./logo3.png";
import logoDark from "./logo.png";
import { Link } from "react-router-dom";
function Logo({dark}: any) {
    return(
        <Link to="/">
            <img src={dark ? logoDark : logo} alt="logo" />
        </Link>
    )
}

export default Logo;